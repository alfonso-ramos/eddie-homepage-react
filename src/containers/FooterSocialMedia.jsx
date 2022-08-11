import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'

import '../styles/containers/FooterSocialMedia.scss'

const FooterSocialMedia = () => {
  return (
    <div className='FooterSocialMedia'>
      <p>Edie</p>
      <div className="social-media-container">
        <a href="/"><img src={instagram} alt="" /></a>
        <a href="/"><img src={linkedin} alt="" /></a>
        <a href="/"><img src={twitter} alt="" /></a>
      </div>
    </div>
  )
}

export default FooterSocialMedia
