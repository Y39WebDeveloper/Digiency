import './GalleryItem.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const GalleryItem = (props) => {
  return (
    <>
        <div className='gallery-item'>
            <img src={props.img}/>
            <div className='img-overlay'>
                <FaExternalLinkAlt/>
                <span>Browse Project</span>
            </div>
        </div>
    </>
  )
}

export default GalleryItem