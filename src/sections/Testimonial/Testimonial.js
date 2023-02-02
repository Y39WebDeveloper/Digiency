import { Container, SectionTitle, ClientCard } from '../../components'
import './Testimonial.css'
import ClientData from '../../Data/ClientData';

const Testimonial = () => {
    const clients = ClientData.map(client => {
        return <ClientCard key={client.id} img={client.img} name={client.name} function={client.function} rate={client.rate} comment={client.comment} />
    });
  return (
    <>
        <section className='testimonial'>
            <Container>
                <SectionTitle mainTitle="Our Testimonial" scndTitle="What Our Client Saying"/>
                <div className='client-card-container'>
                    {clients}
                </div>
            </Container>
        </section>
    </>
  )
}

export default Testimonial