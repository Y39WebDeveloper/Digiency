import './AboutUsListItem.css'
import {FaCheck} from 'react-icons/fa'

const AboutUsListItem = (props) => {
  return (
      <li className='about-us-list-item'><FaCheck/><span>{props.children}</span></li>
  )
}

export default AboutUsListItem