import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { CustomBtn } from './custom-btn'

export function Contact() {
    const [state, handleSubmit] = useForm('mayzbdye')
    const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', msg: '' })

    if (state.succeeded) {
        return <p>Message sent, Thank you!</p>
    }

    const handleChange = ({ target }) => {
        const { name: field, value } = target
        setContactForm(prevForm => ({ ...prevForm, [field]: value }))
    }

    const onSubmitContact = ev => {
        ev.preventDefault()
        console.log(contactForm)
        clearForm()
    }

    const clearForm = () => {
        setContactForm({ name: '', email: '', subject: '', msg: '' })
    }

    return (
        <section className='full contact' id='contact'>
            <div className='contact-container'>
                <h2 className='markup-txt'>contact me</h2>
                <p>
                    Let's connect and make something amazing together! I'm always open to exploring new opportunities
                    and expanding my horizons.
                </p>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='name-input-wrapper'>
                    <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        value={contactForm.name}
                        placeholder='Name'
                    />
                    <label></label>
                </div>
                <div className='email-input-wrapper'>
                    <input
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={contactForm.email}
                        placeholder='Email'
                    />
                    <label></label>
                </div>
                <ValidationError prefix='Email' field='email' errors={state.errors} />

                <div className='subject-input-wrapper'>
                    <input
                        className='subject-input'
                        type='text'
                        name='subject'
                        onChange={handleChange}
                        placeholder='Subject'
                        value={contactForm.subject}
                    />

                    <label></label>
                </div>
                <div className='msg-input-wrapper'>
                    <textarea
                        className='msg-input'
                        type='text'
                        name='msg'
                        onChange={handleChange}
                        placeholder='Message'
                        rows='7'
                        value={contactForm.msg}
                    />
                    <label></label>
                </div>

                <div className='custom-btn btn-submit-wrapper'>
                    <button type='submit' className='flat-button'>
                        <div>
                            <span className='bg'></span>
                            <span className='base'></span>
                            <span className='text'>Send message!</span>
                        </div>
                    </button>
                </div>
            </form>
        </section>
    )
}
