import { BlogImg_1 } from '../../assets/images'
import { FaRegClock, FaRegUser, FaRegCommentDots } from 'react-icons/fa'
import PrimaryButton from '../Button/Button'
import './BlogItem.css'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <div className='blog-img'>
            <img src={BlogImg_1} alt='blog'/>
        </div>
        <div className='blog-title'>
              35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired
        </div>
        <div className='blog-info'>
            <div className='info-item'><FaRegClock/><span>Junuary 25, 2021</span></div>
            <div className='info-item'><FaRegUser /><span>Cristofer Westervelt</span></div>
            <div className='info-item'><FaRegCommentDots/><span>10 Comment</span></div>
        </div>
        <div className='blog-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</div>
        <PrimaryButton>Read More</PrimaryButton>
    </div>
  )
}

export default BlogItem