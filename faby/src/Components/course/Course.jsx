import './Course.css';

const Course = () => {
  return (
    <div className='course-section'>
     <div className="course-section__intro">
      <div className="course-section__video">
        <iframe src="https://player.vimeo.com/video/115014610" frameborder="0"></iframe>
      </div>
      <div className="course-section__details">
        <h2 className='course-section__heading'>An Inside Look To Our Course!</h2>
        <h5 className='course-section__subheading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</h5>
        <p className='course-section__description'>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud.</p>
        <span className='course-section__cta'><a href="#">Sign Up Now</a></span>
      </div>
     </div>
                     {/*COURSE SECOND BOX METHOD IN FLEX.......*/}

        <div className="course-section__signup-box">
          
            <div className="signup-box__content">
              <h1 className='signup-box__title'>Sign Up Now</h1>
              <p className='signup-box__description'>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Exerci tation ullamcorper, ut wisi enim ad minim veniam, quis nostrud.</p>
              <button className='signup-box__button'>sign me up</button>
            </div>
        </div>

    </div>
  )
}

export default Course