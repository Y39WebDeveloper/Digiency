import { CapabilitiesImg, StatisticImg_1, StatisticImg_2, StatisticImg_3, StatisticImg_4 } from '../../assets/images'
import { CapabilitiesStatsItem, Container, SectionTitleAlt } from '../../components'
import './Capabilities.css'

const Capabilities = () => {
  return (
    <section className='capabilities' id='capabilities'>
        <Container>
            <div className='capabilities-container'>
                <div className='capabilities-content'>
                    <SectionTitleAlt mainTitle="Our Capabilities" scndTitle="Forward Thinking Team Of Designers & Developers"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae purus felis eget massa felis. Eu mattis in malesuada facilisi proin vel.</p>
                      <div className='capabilities-stats'>
                        <CapabilitiesStatsItem/>
                        <CapabilitiesStatsItem/>
                        <CapabilitiesStatsItem/>
                        <CapabilitiesStatsItem/>
                      </div>
                </div>
                <div className='capabilities-img'>
                    <img src={CapabilitiesImg} alt='capabilities'/>
                </div>
            </div>
            <div className='statistic'>
                <div className='statistic-item'>
                    <img src={StatisticImg_1} alt="stats" />
                    <span>120</span>
                    <p>Top Experts</p>
                </div>
                <div className='statistic-item'>
                    <img src={StatisticImg_2} alt="stats" />
                    <span>500</span>
                    <p>Strategies</p>
                </div>
                <div className='statistic-item'>
                    <img src={StatisticImg_3} alt="stats" />
                    <span>347</span>
                    <p>Great Results</p>
                </div>
                <div className='statistic-item'>
                    <img src={StatisticImg_4} alt="stats" />
                    <span>120</span>
                    <p>Hight Ranking</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Capabilities