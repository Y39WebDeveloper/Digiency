import './ClientCard.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import Virgul from './virgul.svg'

const ClientCard = (props) => {
    
    let arr = [];
    for(let i=0; i<5; i++){
        const rate = props.rate;
        if (rate > i){
            if (i - rate > -1 && i - rate < 0){
                arr.push(<FaStarHalfAlt/>)
            }else{
                arr.push(<FaStar />)
            }
        }else{
            arr.push(<FaRegStar />)
        }
    }
    const stars = arr.map((star, index) => {
        return <div key={index}>{star}</div>;
    });
  return (
    <div className='client-card'>
        <div className='stars'>
            {stars}
        </div>
          <p className='client-comment'>{props.comment}</p>
        <div className='client-profil'>
            <div className='profil'>
                <img src={props.img} alt='profil'/>
                <div className='info'>
                    <div className='name'>{props.name}</div>
                    <div className='function'>{props.function}</div>
                </div>
            </div>
            <span>
                <img src={Virgul} alt='virgul'/>
            </span>
        </div>
    </div>
  )
}

export default ClientCard