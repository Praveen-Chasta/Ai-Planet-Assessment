import contactList from '../../images/contact-list.png'

function ParticipateSection() {
  return (
    <section className='participation-section'>
        <div className='header-container'>
            <h1 className='participation-section-heading text-center'>Why Participate in <span className='participation-section-span'>AI Challenges?</span></h1>
        </div>
        <div className='container'>
            <div className='row justify-content-evenly '>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={contactList} alt="Contact List" className='img-fluid'/>
                    <h1>Prove your skills</h1>
                    <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={contactList} alt="Contact List" className='img-fluid'/>
                    <h1>Prove your skills</h1>
                    <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>
            </div>
            <div className='row justify-content-evenly'>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={contactList} alt="Contact List" className='img-fluid'/>
                    <h1>Prove your skills</h1>
                    <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-10 challenges-container'>
                    <img src={contactList} alt="Contact List" className='img-fluid'/>
                    <h1>Prove your skills</h1>
                    <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ParticipateSection