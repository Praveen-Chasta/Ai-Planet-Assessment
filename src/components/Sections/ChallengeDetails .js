import Header from '../Header/Header'
import clock from '../../images/clock.png'
import graph from '../../images/graph.png'

function ChallengeDetails () {
  return (
    <>
       <Header/>
       <section className='challenge-top-section d-flex align-item-center'>
            <div className='container d-flex flex-column justify-content-center'>
                <div className='col-lg-5 col-md-8 col-sm-10 challenge-time-container d-flex align-item-center'>
                      <img src = {clock} alt = "clock" className="clock-icon"/> 
                      <p>Starts on 17th Jun'22 09:00 PM (India Standard Time)</p>
                </div>
                <div className='col-lg-8 challenge-name-container'>
                     <h1>Data Sprint 72 - Butterfly Identification</h1>
                     <p>Identify the class to which each butterfly belongs to.</p>
                </div>
                <div className='col-lg-1 col-md-2 col-sm-2 easy-button-container d-flex align-item-center'>
                     <img src = {graph} alt = "graph" className="graph-icon"/> 
                     <button>Easy</button>
                </div>
            </div>
       </section>
       <section className='challenge-middle-section'>
            <div className='overview-section'>
                  <div className='container d-flex align-item-center justify-content-between'>
                       <h2 className='text-center'>Overview</h2>
                       <div>
                           <button className='edit-button'>Edit</button>
                           <button className='delete-button'>Delete</button>
                       </div>
                  </div>
            </div>
       </section>
       <section className='challenge-bottom-section'>
          <div className='container'>
              <div className='col-lg-10'>
              <p>Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.</p>
              <p> An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.</p>
              <p>Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.</p>
              </div>
          </div>
       </section>
    </>
    
  )
}

export default ChallengeDetails 