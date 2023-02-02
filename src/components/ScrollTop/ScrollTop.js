import './ScrollTop.css'
import { ScrollImg } from '../../assets/images'

const ScrollTop = () => {
    let scrollPos = 0;
    let scrollTop = () => window.scroll({left:0, top:0, behavior:"smooth"})
    let scrollShow = () => {
        let winy = window.scrollY;
        if(winy < scrollPos){
            document.getElementById("scrollBtn").classList.add("show");
        }else{
            document.getElementById("scrollBtn").classList.remove("show");
        }
        scrollPos = winy
    };
    window.onscroll = scrollShow
  return (
    <div className='scroll-top' id='scrollBtn' onClick={scrollTop}>
        <img src={ScrollImg} alt='top'/>
    </div>
  )
}

export default ScrollTop