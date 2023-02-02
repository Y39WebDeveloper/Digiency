import './Services.css'
import { Container, SectionTitle, ServicesCard } from '../../components'
import ServicesData from '../../Data/ServicesData'

const Services = () => {
    const cards = ServicesData.map(card => {
        return <ServicesCard key={card.id} img={card.img} number={card.number} title={card.title} category={card.category} content={card.content}/>
    });
  return (
    <>
        <section className='our-services' id='services'>
            <Container>
                <SectionTitle mainTitle="Our Services" scndTitle="What We Do"/>
                <div className='services-cards-container'>
                      {cards}
                </div>
            </Container>
        </section>
    </>
  )
}

export default Services