import './Fotter.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaSkype } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Fotter = () => {
  return (
    <div className='fotter-container'>
        <div className="footer-sections">
            <div className="about-section">
                <h2>about us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro veniam repudiandae ex voluptatum? Earum maxime deserunt explicabo corrupti, inventore illum fuga totam iste debitis impedit! Suscipit molestiae nemo commodi.</p>
                <span><a href="#">our team</a></span>
            </div>

            <div className="about-section">
                <h2>Contact Info</h2>
                <ul>
                    <li><FaMapMarkerAlt /> <span>Via Rossini 10, 10136 Turin Italy</span></li>
                    <li><BsFillTelephoneFill /> <span>Phone: (0039) 333 12 68 347</span></li>
                    <li><IoMdMail /> <span>Email: support@domain.com</span></li>
                    <li><FaSkype /> <span> Skype: faby_online</span></li>
                </ul>
            </div>

            <div className="about-section">
            <h2>We're Social</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fuga sit deleniti, corrupti vel saepe sed ipsam voluptatem inventore laudantium.</p>
            <div className="fotter-icon">
                <h6><FaFacebookF /></h6>
                <h6><FaTwitter /></h6>
                <h6><FaGooglePlusG /></h6>
                <h6><FaInstagram /></h6>
                <h6><FaPinterest /></h6>
            </div>

            </div>
        </div>
        <h3 className='footer-credits'>© Faby Bootstrap Template by <span>AZMIND</span></h3>
    </div>
  )
}

export default Fotter