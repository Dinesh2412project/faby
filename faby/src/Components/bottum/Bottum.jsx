import './Bottum.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdFilePresent } from "react-icons/md";



const Bottum = () => {
  return (
    <div className='bottum-section'>
        <h1 className='bottum-heading'>more features</h1>
        <p className='bottum-subtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea velit voluptatum!</p>
        <div className="bottum-container">
        <Container>
      <Row xs={1} md={2}>
        <Col className="bottum-content-column">
        <div className="bottum-box">
        <div className="bottum-icon-wrapper">
            <span><MdFilePresent className='bottum-icons'/></span>
            </div>
            <div className="bottum-text-content">
                <h3 className='bottom-title'>Ut Wisi Enim Ad Minim</h3>
                <p className='bottum-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
            </div>
            </div>

             <div className="bottum-box">
        <div className="bottum-icon-wrapper">
            <span><MdFilePresent className='bottum-icons'/></span>
            </div>
            <div className="bottum-text-content">
                <h3 className='bottom-title'>Ut Wisi Enim Ad Minim</h3>
                <p className='bottum-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
            </div>
            </div>
                 
            </Col>

        <Col className='bottum-image-column'><img  className='bottum-image' src="https://www.pngitem.com/pimgs/m/430-4300583_apple-imac-imac-21-5-inch-hd-png.png" alt="img" /></Col>
      
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Bottum