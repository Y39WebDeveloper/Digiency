import './OurProject.css'
import { Container, SectionTitle, GalleryItem } from '../../components'
import { Project_1, Project_2, Project_3, Project_4, Project_5, Project_6, Project_7, Project_8, Project_9 } from '../../assets/images'

const OurProject = () => {
  return (
    <>
      <section className='our-project' id='project'>
        <Container>
          <SectionTitle mainTitle='Our Case Study' scndTitle='Our Recent Project' />
          <ul>
            <li className='active'>All</li>
            <li>UX Design</li>
            <li>Web Design</li>
            <li>App Development</li>
            <li>Game Design</li>
            <li>Graphic Design</li>
          </ul>
          <div className='our-project-gallery'>
            <GalleryItem img={Project_1} />
            <GalleryItem img={Project_2} />
            <GalleryItem img={Project_3} />
            <GalleryItem img={Project_4} />
            <GalleryItem img={Project_5} />
            <GalleryItem img={Project_6} />
            <GalleryItem img={Project_7} />
            <GalleryItem img={Project_8} />
            <GalleryItem img={Project_9} />
          </div>
        </Container>
      </section>
    </>
  )
}

export default OurProject