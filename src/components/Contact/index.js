import React from 'react';
import contacts from '../../assets/js/contact';

function Contact () {

    return(
        <div>
            <h2>
                Contact Me
            </h2>
            {contacts.map((item) => (
                <article key={item.name}>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                    <img src={require(`../../assets/images/icons/${item.icon}`)} />
                    </a>
                </article>
            ))}
        </div>
    )
}

export default Contact;