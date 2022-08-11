import '../styles/containers/ContactForm.scss'

const ContactForm = () => {
  return (
    <div className='ContactForm'>
        <label htmlFor="">
            <p>
                Want us to constact you?
            </p>
            <div className='form-container'>
                <input type="email" placeholder='Email'/>
                <button>Join</button>
            </div>
        </label>
    </div>
  )
}

export default ContactForm
