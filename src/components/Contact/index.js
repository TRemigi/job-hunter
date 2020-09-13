import React from 'react';
import contacts from '../../assets/js/contact';

function Contact () {

    return(
        <div className="container-fluid fill-screen">
            <div className="row">
                <div className="col-12 pt-2 text-center">
                    <h2 className="p-5 mb-4 neon">
                        Contact Me
                    </h2>
                </div>
                {contacts.map((item) => (
                    <div className="col-12 col-md-4 mt-4">
                    <div className="card contact-card">
                        <img className="card-img-top" src={require(`../../assets/images/icons/${item.icon}`)} alt={item.name} />
                        <div className="card-body">
                            <a href={item.link} target="_blank" className="btn btn-dark">{item.name}</a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact;