import { Container, Logo } from '../../components'
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <div className='footer-contact'>
                <div className='agency'>
                    <Logo/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor facilisi quis risus egestas ipsum.</p>
                </div>
                <div className='location'>
                    <div className='ttl'>Location</div>
                    <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>
                <div className='call-us'>
                    <div className='ttl'>Call Us</div>
                    <p><span>(252) 555-0126</span><span>info@youremai.com</span></p>
                </div>
                <div className='follow'>
                    <div className='ttl'>Follow Us</div>
                    <ul>
                          <li><FaFacebookF /></li>
                          <li><FaInstagram /></li>
                          <li><FaSkype /></li>
                          <li><FaTwitter /></li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer