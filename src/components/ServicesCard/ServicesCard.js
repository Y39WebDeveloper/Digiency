import './ServicesCard.css'

const ServicesCard = (props) => {
  return (
    <>
        <div className='services-card'>
            <div className='services-card-header'>
                <img src={props.img} alt="service"/>
                <span>{props.number}</span>
            </div>
            <div className='services-card-title'>
                <h2 className='title'>{props.title}</h2>
                <p className='category'>{props.category}</p>
            </div>
            <p>{props.content}</p>
        </div>
    </>
  )
}

export default ServicesCard