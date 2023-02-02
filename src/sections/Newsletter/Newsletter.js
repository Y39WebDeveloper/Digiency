import { Container } from '../../components'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <div className='newsletter-container'>
                <div className='newsletter-title'>
                    <div className='newsletter-main-title'>
                        Subscribe Newsletter
                    </div>
                    <h2 className='newsletter-label'>
                        Lets Stay In Touch
                    </h2>
                </div>
                <form>
                    <input type={'email'} placeholder='Enter your email' />
                    <input type={'button'} value="Subscribe Now"/>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default Newsletter