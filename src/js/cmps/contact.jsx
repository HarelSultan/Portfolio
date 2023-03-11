import { useState } from 'react'
import { CustomBtn } from './custom-btn'

export function Contact() {
    const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', msg: '' })

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
            <form className='contact-form' onSubmit={onSubmitContact}>
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

                {/* <button className='btn btn-submit'>Send message!</button> */}
                <div onClick={onSubmitContact} className='btn-submit-wrapper'>
                    <CustomBtn href={'#'} txt={'Send message!'} />
                </div>
            </form>
        </section>
    )
}
