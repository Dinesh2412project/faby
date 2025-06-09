import './Support.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Support = () => {
  return (
    <div className='support-section'>
        <h2 className='support-title'>Great Support</h2>
        <hr className='support-divider' />
        <p className='support-intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
  
        <Container >
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="support-content-row">
        <Col className='support-image-column' xs={6}>
        <img className='support-image' src="https://molla.al/wp-content/uploads/2020/09/imacpro.png" alt="" />
        </Col>
        <Col className='support-text-column' xs={6}>
        <h3 className='support-subtitle'>24/7 Support For Every Question</h3>
        <h5 className='support-highlight'>Ut wisi enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</h5>
        <p className='support-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod labore et. Ut wisi <span>enim ad minim </span> veniam, quis nostrud. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Support