import FooterMenu from './FooterMenu'
import FooterSocialMedia from './FooterSocialMedia'
import ContactForm from './ContactForm'

import '../styles/containers/Footer.scss'

const Footer = () => {
  return (
    <div className='Footer'>
        <FooterMenu />
        <FooterSocialMedia />
        <ContactForm />
        <p className='credits'>created by <span>Poncho Ramos</span> - devChallenges.io </p>
    </div>
  )
}

export default Footer
