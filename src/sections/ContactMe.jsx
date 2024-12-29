import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser' // Allows you to automate emails to be sent to you directly

const ContactMe = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name,value}}) => {setForm({... form, [name]: value})};

    const handleSubmit = async(e) => {
        e.preventDefault(); // Prevents browser from refreshing after form submits
        setLoading(true);
        try {
            emailjs.send(
                'service_z00znie',
                'template_3qdmtcj',
                {
                    from_name: form.name, 
                    to_name: 'Riyan', 
                    from_email: form.email, 
                    to_email: 'riyaniiq@gmail.com', 
                    message: form.message
                },
                'Y2lfxHhy5Shez2aJH'
            );

            setLoading(false);
            alert('Your message has been sent!'); // Shows a pop up of send success 
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch(error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!'); // Shows a pop up of send failure
        }
    };

    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src={'/assets/terminal.png'} alt={'terminal'} className='absolute inset-0 h-full w-full '/>
                <div className='contact-container'>
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Whether you are looking to build a new website, 
                        improve your existing platform, 
                        or bring a unique project to life I am here to help!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-6 flex flex-col space-y-7'>
                        {/* Full Name Field */}
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Tom Jerry'
                            />
                        </label>

                        {/* Email */}
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='you@gmail.com'
                            />
                        </label>

                        {/* Message */}
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className='field-input'
                                placeholder='Hey Riyan, I want to work with you on ...'
                            />
                        </label>

                        {/* Submit Button */}
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending ...' : 'Submit'}
                            <img src='/assets/arrow-up.png' alt={'arrow-up'} className='field-btn_arrow'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe