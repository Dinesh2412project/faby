import './hero.css';
import { FaThumbsUp } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaMagic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Hero = () => {
  return (
    <div className='features-section'>
       <h1 className='features-title'>main features</h1>
       <h6 className='features-subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</h6>
       <div className="features-grid">
        <div className="feature-card">
           <span className='feature-icon'><FaThumbsUp /></span>
           <h2 className='feature-title'>Easy To Use</h2>
           <p className='feature-description'> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>

        <div className="feature-card">
           <span className='feature-icon'><IoSettings /></span>
           <h2 className='feature-title'>Easy To Use</h2>
           <p className='feature-description'> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>

        <div className="feature-card">
           <span className='feature-icon'><LuMessageCircleMore /></span>
           <h2 className='feature-title'>Easy To Use</h2>
           <p className='feature-description'> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>

        <div className="feature-card">
           <span className='feature-icon'><FaMagic /></span>
           <h2 className='feature-title'>Easy To Use</h2>
           <p className='feature-description'> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>

        <div className="feature-card">
           <span className='feature-icon'><FaVideo /></span>
           <h2 className='feature-title'>Easy To Use</h2>
           <p className='feature-description'> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>

        <div className="feature-card">
           <span className='feature-icon'><GrInstagram /></span>
           <h2 className='feature-title'>Easy To Use</h2>
           <p className='feature-description'> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>
            
       </div>
       <button className='features-cta-button'>sing up now</button>
    </div>
  )
}

export default Hero