import './hero.css';
import { FaThumbsUp } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaMagic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const features = [
  {
    icon: <FaThumbsUp />,
    title: "Easy To Use",
    description: "Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.",
  },
  {
    icon: <IoSettings />,
    title: "Fully Customizable",
    description: "Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.",
  },
  {
    icon: <LuMessageCircleMore />,
    title: "24/7 Support",
    description: "Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.",
  },
  {
    icon: <FaMagic />,
    title: "Smart Solutions",
    description: "Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.",
  },
  {
    icon: <FaVideo />,
    title: "Media Integration",
    description: "Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.",
  },
  {
    icon: <GrInstagram />,
    title: "Social Friendly",
    description: "Dicta architecto recusandae aliquam cupiditate quibusdam soluta ipsum inventore quo.",
  },
];

const Hero = () => {
  return (

   
      <div className="features-section">
    <h1 className="features-title">Main Features</h1>
    <h6 className="features-subtitle">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
    </h6>

    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <span className="feature-icon">{feature.icon}</span>
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>

    <button className="features-cta-button">Sign Up Now</button>
  </div>
);

   
    {/*<div className='features-section'>
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
    </div>    */}


}
  

export default Hero