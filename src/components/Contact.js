import React, { useState } from 'react';
import { mainLinks } from '../assets/copyData';

const ContactItem = (props) => {

    const [data, setData] = useState(['', '']);

    const [showInfo, setVisibility] = useState(false);

    const handleClick = () => {
        setData([props.linkURL, props.contactData]);
        setVisibility(true);
    };

    return (
        <div className="col-md-6 mt-4 pt-2">
            <div className="contact-detail text-center">
                <i className={`bi bi-${props.iconText}-fill`} style={{ fontSize: "3rem" }}></i>
                <div className="content mt-4">
                    {showInfo ?
                        <a href={data[0]} className="text-primary">{data[1]}</a>
                        :
                        <button className="btn btn-secondary" onClick={() => handleClick()}>Show {props.title}</button>
                    }
                </div>
            </div>
        </div>
    );

};

const Contact = () => {
    return (
        <section className="section bg-light" id="contact">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title">
                        <div className="position-relative">
                            <h2 className="title text-uppercase mb-4">Contact Me</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around gap-5">
                <ContactItem
                    title="Phone"
                    iconText="telephone"
                    contactData="Whatsapp audio"
                    linkURL='https://call.whatsapp.com/voice/O8bdajmqR84OuKPie1GXZB' />
                <ContactItem
                    title="Email"
                    iconText="envelope"
                    contactData="estdav@protonmail.com"
                    linkURL={mainLinks.email} />
            </div>
        </section>
    );
};

export default Contact;

