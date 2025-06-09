import './Pricing.css';

const Pricing = () => {
  return (
    <div className='pricing-section'>
        <div className="pricing-section__header">
     <h1 className='pricing-section__title'>Plans & Pricing</h1>
     <h6 className='pricing-section__subtitle'>Below you can see our plans & pricing and choose the one that suits you best.</h6>
        </div>
        <div className="pricing-section__cards">

            {/* Silver Plan */}
            <div className="pricing-card">
                <div className="pricing-card__header">
                    <h2 className='pricing-card__price'>$15 / month</h2>
                    <h3 className='pricing-card__plan'>silver</h3>
                    <h4 className='pricing-card__tagline'>Beginner</h4>
                </div>
                <ul className='pricing-card__features'>
                    <li>1000 video lessons</li>
                    <li>Normal speed</li>
                    <li>500 solved exercises</li>
                    <li>300MB to save your code</li>
                    <li>750 hours of support</li>
                </ul>
                <button className='pricing-card__button'>sign up</button>
            </div>


                 {/* Gold Plan */}
            <div className="pricing-card ">
                <div className="pricing-card__header active">
                    <h2 className='pricing-card__price'>$39 / month</h2>
                    <h3 className='pricing-card__plan'>gold</h3>
                    <h4 className='pricing-card__tagline'>Best value</h4>
                </div>
                <ul className='pricing-card__features'>
                    <li>3000 video lessons</li>
                    <li>2X speed</li>
                    <li>2000 solved exercises</li>
                    <li>500MB to save your code</li>
                    <li>900 hours of support</li>
                </ul>
                <button className='pricing-card__button'>sign up</button>
            </div>

                        {/* Platinum Plan */}
            <div className="pricing-card">
                <div className="pricing-card__header">
                    <h2 className='pricing-card__price'>$89 / month</h2>
                    <h3 className='pricing-card__plan'>platinum</h3>
                    <h4 className='pricing-card__tagline'>Big company</h4>
                </div>
                <ul className='pricing-card__features'>
                    <li>5000 video lessons</li>
                    <li>4X speed</li>
                    <li>4000 solved exercises</li>
                    <li>900MB to save your code</li>
                    <li>unlimited hours of support</li>
                </ul>
                <button className='pricing-card__button'>sign up</button>
            </div>
            
        </div>



    </div>
  )
}

export default Pricing