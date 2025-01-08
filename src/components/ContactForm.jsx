import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(`Message: ${message}\n\nFrom: ${name} (${email})`);
        const mailtoLink = `mailto:uyyalanaveenedu@gmail.com?subject=${subject}&body=${body}`;

        try {
            window.location.href = mailtoLink;
        } catch (err) {
            window.open(mailtoLink);
        }
    };

    return (
        <div className="flex justify-center flex-col md:w-96 w-72">
            <form
                onSubmit={handleSubmit}
                className="border-2 border-gray-400 rounded-lg flex flex-col items-center gap-8 p-6  "
            >
                <h1 className="text-3xl font-bold text-center">Contact Me</h1>
                <div className="w-full">
                    <label htmlFor="name" className="block text-lg opacity-50 mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-10 w-full outline-none bg-transparent border-b-2 text-lg font-medium focus:border-violet-700"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block text-lg opacity-50 mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-10 w-full outline-none bg-transparent border-b-2 text-lg font-medium focus:border-violet-700"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="message" className="block text-lg opacity-50 mb-1">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full outline-none bg-transparent border-b-2 text-lg font-medium focus:border-violet-700 resize-none"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="w-full max-w-xs h-12 bg-transparent border rounded-md hover:bg-[#4dd0e4f2] hover:text-white text-lg font-medium border-gray-400"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
