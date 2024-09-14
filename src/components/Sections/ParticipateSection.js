import contactList from '../../images/contact-list.png'
import community from '../../images/community.png'
import robot from '../../images/robot.png'
import list from '../../images/list.png'

function ParticipateSection() {
  return (
    <section className='participation-section'>
        <div className='header-container'>
            <h1 className='participation-section-heading text-center'>Why Participate in <span className='participation-section-span'>AI Challenges?</span></h1>
        </div>
        <div className='container'>
            <div className='row justify-content-evenly '>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={list} alt="Contact List" className='img-fluid'/>
                    <h1>Prove your skills</h1>
                    <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={community} alt="Contact List" className='img-fluid m-2'/>
                    <h1>Learn from community</h1>
                    <p>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                </div>
            </div>
            <div className='row justify-content-evenly'>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={robot} alt="Contact List" className='img-fluid'/>
                    <h1>Challenge yourself</h1>
                    <p>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={contactList} alt="Contact List" className='img-fluid'/>
                    <h1>Earn recognition</h1>
                    <p>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ParticipateSection