import aiImg from "../../images/ai.png"
import contactImg from '../../images/contacts.png'
import challengesImg from '../../images/challenges.png'

function AchievementSection() {
  return (
    <section className='achievement-section'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-4 d-flex align-items-center justify-content-center position-relative'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={aiImg} alt="AI" className='img-fluid ' />
                        </div>
                        <div className='col-8 d-flex flex-column justify-content-center'>
                            <h1>100K+</h1>
                            <p>AI model submissions</p>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-4 d-flex align-items-center justify-content-center position-relative'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={contactImg} alt="Contacts" className='img-fluid achievement-img' />
                        </div>
                        <div className='col-8 d-flex flex-column justify-content-center'>
                            <h1>50K+</h1>
                            <p>Data Scientists</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 d-flex align-items-center justify-content-center'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={challengesImg} alt="Challenges" className='img-fluid ' />
                        </div>
                        <div className='col-8 d-flex flex-column justify-content-center'>
                            <h1>100+</h1>
                            <p>AI Challenges hosted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default AchievementSection