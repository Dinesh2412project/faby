import './hero.css';
import { FaThumbsUp } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaMagic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Hero = () => {
  return (
    <div className='hero'>
       <h1>main features</h1>
       <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</h6>
       <div className="hero-main">
        <div className="hero-feature">
           <span><FaThumbsUp /></span>
           <h2>Easy To Use</h2>
           <p> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>

        </div>

        <div className="hero-feature">
           <span><IoSettings /></span>
           <h2>Responsive Design</h2>
           <p> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>
           
        </div>

        <div className="hero-feature">
           <span><LuMessageCircleMore /></span>
           <h2>24/7 Support</h2>
           <p> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>
           
        </div>

        <div className="hero-feature">
           <span><FaMagic /></span>
           <h2>Smart Layout</h2>
           <p> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>
           
        </div>

        <div className="hero-feature">
           <span><FaVideo /></span>
           <h2>Lots Of Videos</h2>
           <p> beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>
           
        </div>

        <div className="hero-feature">
           <span><GrInstagram /></span>
           <h2>Big Community</h2>
           <p>beatae? Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.</p>
           
        </div>

            
       </div>
       <button className='hero-btn'>sing up now</button>
    </div>
  )
}

export default Hero