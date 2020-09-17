const { User, Job } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('thoughts')
                .populate('friends');
                
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        jobs: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Job.find(params).sort({ createdAt: -1 });
        },
        job: async (parent, { _id }) => {
            return Job.findOne({ _id });
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('jobs');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('jobs');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addJob: async (parent, args, context) => {
            if (context.user) {
                const job = await Job.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { jobs: job._id } },
                    { new: true }
                );

                return job;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;