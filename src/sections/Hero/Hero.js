import './Hero.css'
import { Container, Navbar, PrimaryButton } from '../../components'
import { HeroImg } from '../../assets/images'

const Hero = () => {
  return (
    <>
        <section className='header'>
            <Container>
                <Navbar />
                <div className='hero'>
                    <div className='hero-content'>
                        <h1 className='hero-title'>Choose What Matters To Your Business & Your Customers.</h1>
                        <p className='hero-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in digni ssim euismod purus donec mus vulputate habitant iaculis. Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.</p>
                        <PrimaryButton>Get Start Now</PrimaryButton>
                    </div>
                    <div className='hero-img'>
                        <img src={HeroImg} alt='hero' />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Hero