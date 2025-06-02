import './Support.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Support = () => {
  return (
    <div className='support'>
        <h2>Great Support</h2>
        <hr className='su-hr' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
  
        <Container >
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className="supp-box">
        <Col className='sup-img' xs={6}>
        <img src="https://molla.al/wp-content/uploads/2020/09/imacpro.png" alt="" />
        </Col>
        <Col className='sup-right' xs={6}>
        <h3>24/7 Support For Every Question</h3>
        <h5>Ut wisi enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod labore et. Ut wisi <span>enim ad minim </span> veniam, quis nostrud. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Support