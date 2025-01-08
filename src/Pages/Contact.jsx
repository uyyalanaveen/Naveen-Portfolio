import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="flex flex-col gap-16 items-center px-4 sm:px-8 md:px-16 py-8">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
