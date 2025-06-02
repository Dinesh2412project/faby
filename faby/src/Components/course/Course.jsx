import './Course.css';

const Course = () => {
  return (
    <div className='course-container'>
     <div className="course-firstbox">
      <div className="firstbox-left">
        <iframe src="https://player.vimeo.com/video/115014610" frameborder="0"></iframe>
      </div>
      <div className="firstbox-right">
        <h2>An Inside Look To Our Course!</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</h5>
        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud.</p>
        <span><a href="#">Sign Up Now</a></span>
      </div>
     </div>
                     {/*COURSE SECOND BOX METHOD IN FLEX.......*/}

        <div className="course-secondbox">
          
            <div className="secondbox-content">
              <h1>Sign Up Now</h1>
              <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Exerci tation ullamcorper, ut wisi enim ad minim veniam, quis nostrud.</p>
              <button className='course-btn'>sign me up</button>
            </div>
        </div>

    </div>
  )
}

export default Course