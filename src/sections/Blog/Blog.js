import { BlogItem, Container, SectionTitle } from '../../components'
import './Blog.css'

const Blog = () => {
  return (
    <section className='blog' id='blog'>
        <Container>
              <SectionTitle mainTitle='Our Blog' scndTitle='Every Singel Update From Here'/>
              <div className='blog-container'>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
              </div>
        </Container>
    </section>
  )
}

export default Blog