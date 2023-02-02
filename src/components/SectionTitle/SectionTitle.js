import './SectionTitle.css'

const SectionTitle = (props) => {
  return (
    <>
       <div className='section-title'>
            <div className='section-main-title'>
                  {props.mainTitle}
            </div>
            <h2 className='section-scnd-title'>
                  {props.scndTitle}
            </h2>
       </div>
    </>
  )
}

const SectionTitleAlt = (props) => {
  return (
    <>
       <div className='section-title-alt'>
            <div className='section-main-title-alt'>
                  {props.mainTitle}
            </div>
            <h2 className='section-scnd-title-alt'>
                  {props.scndTitle}
            </h2>
       </div>
    </>
  )
}

export default SectionTitle
export { SectionTitleAlt }