import './AboutUs.css'
import { Container, SectionTitleAlt, AboutUsListItem } from '../../components'
import { AboutUs_img } from '../../assets/images'

const AboutUs = () => {
  return (
    <>
      <section className='about-us' id='aboutUs'>
        <Container>
          <div className='about-us-container'>
            <div className='about-us-content'>
              <SectionTitleAlt mainTitle="About Us" scndTitle="Grow Your Business With Our Agency" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .</p>
              <ul>
                <AboutUsListItem>Innovative website design</AboutUsListItem>
                <AboutUsListItem>UI/UX design with global trends</AboutUsListItem>
                <AboutUsListItem>Web and email hosting service</AboutUsListItem>
              </ul>
            </div>
            <div className='about-us-img'>
              <img src={AboutUs_img} alt="about-us"/>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutUs