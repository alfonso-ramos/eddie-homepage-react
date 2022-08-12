import Person1 from '../assets/images/person1.png'
import Person2 from '../assets/images/person2.png'
import Person3 from '../assets/images/person3.png'

import '../styles/containers/TeamImages.scss'


const TeamImages = () => {
  return (
    <div className='TeamImages'>
      <img src={Person1} alt="" className='person1'/>
      <img src={Person2} alt="" className='person2'/>
      <img src={Person3} alt="" className='person3'/>
    </div>
  )
}

export default TeamImages
