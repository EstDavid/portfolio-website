import React from 'react';
import { mainLinks } from '../assets/copyData';

const ContactItem = (props) => {
    return (
        <div className="col-md-4 mt-4 pt-2">
            <div className="contact-detail text-center">
                <i className={`bi bi-${props.iconText}-fill`} style={{fontSize: "3rem"}}></i>
                <div className="content mt-4">
                    <h5 className="title text-uppercase">{props.title}</h5>
                    <p className="text-muted">{props.extraText}</p>
                    <a href={props.linkURL} className="text-primary">{props.contactData}</a>
                </div>
            </div>
        </div>
    )

}

const Contact = () => {
    return(
        <section className="section bg-light" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <div className="position-relative">
                                <h2 className="title text-uppercase mb-4">Contact Me</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                <ContactItem
                    title="Phone"
                    iconText="telephone"
                    extraText="Call me at:"
                    contactData="+ 34 656 552 448"
                    linkURL='tel:+34656552448' />
                <ContactItem
                    title="Email"
                    iconText="envelope"
                    extraText="Send me an email to:"
                    contactData="estdav@protonmail.com"
                    linkURL={mainLinks.email} />
                <ContactItem 
                    title="Location"
                    iconText="geo-alt"
                    extraText="Alicante (Spain)"
                    contactData="Central European Time (UTC+01:00)"
                    linkURL="https://24timezones.com/time-zone/cet" />

                </div>

            </div>
        </section>
    )
}

export default Contact;

