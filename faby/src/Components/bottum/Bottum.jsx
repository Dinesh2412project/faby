import './Bottum.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdFilePresent } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


const Bottum = () => {
  return (
    <div className='bottum'>
        <h1>more features</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea velit voluptatum!</p>
        <div className="bottum-box">
        <Container>
      <Row xs={1} md={2}>
        <Col className="bottum-boxes">
        <div className="bottom-b">
        <div className="bottum-icon">
            <span><MdFilePresent className='bt-icons' /></span>
            </div>
            <div className="bottum-cont">
                <h3>Ut Wisi Enim Ad Minim</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
            </div>
            </div>


              <div className="bottom-b">
              <div className="bottum-icon">
            <span><IoMdContact className='bt-icons' /></span>
            </div>
            <div className="bottum-cont">
                <h3>Ut Wisi Enim Ad Minim</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
            </div>
            </div>
                 
            </Col>

        <Col className='btm-img'><img src="https://www.pngitem.com/pimgs/m/430-4300583_apple-imac-imac-21-5-inch-hd-png.png" alt="img" /></Col>
        
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Bottum