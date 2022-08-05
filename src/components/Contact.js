import React from 'react';

const ContactItem = (props) => {
    return (
        <div class="col-md-4 mt-4 pt-2">
            <div class="contact-detail text-center">
                <i class={`bi bi-${props.iconText}-fill`} style={{fontSize: "3rem"}}></i>
                <div class="content mt-4">
                    <h5 class="title text-uppercase">{props.title}</h5>
                    <p class="text-muted">{props.extraText}</p>
                    <a href={props.linkURL} class="text-primary">{props.contactData}</a>
                </div>
            </div>
        </div>
    )

}

const Contact = () => {
    return(
        <section className="section bg-light" id="contact">
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <div class="position-relative">
                                <h2 class="title text-uppercase mb-4">Contact Me</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
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
                    linkURL="mailto:estdav@protonmail.com" />
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

