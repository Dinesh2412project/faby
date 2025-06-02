import './Pricing.css';

const Pricing = () => {
  return (
    <div className='pricing-container'>
        <div className="pricing-heading">
     <h1>Plans & Pricing</h1>
     <h6>Below you can see our plans & pricing and choose the one that suits you best.</h6>
        </div>
        <div className="pricingcard-container">
            <div className="pricing-card">
                <div className="card-heading">
                    <h2>$15 / month</h2>
                    <h3>silver</h3>
                    <h4>Beginner</h4>
                </div>
                <ul>
                    <li>1000 video lessons</li>
                    <li>Normal speed</li>
                    <li>500 solved exercises</li>
                    <li>300MB to save your code</li>
                    <li>750 hours of support</li>
                </ul>
                <button className='pricing-btn'>sign up</button>
            </div>

            <div className="pricing-card">
                <div className="card-heading active">
                    <h2>$39 / month</h2>
                    <h3>gold</h3>
                    <h4>Best value</h4>
                </div>
                <ul>
                    <li>3000 video lessons</li>
                    <li>2x speed</li>
                    <li>2000 solved exercises</li>
                    <li>500MB to save your code</li>
                    <li>900 hours of support</li>
                </ul>
                <button className='pricing-btn'>sign up</button>
            </div>

            <div className="pricing-card">
                <div className="card-heading">
                    <h2>$89 / month</h2>
                    <h3>Platinum</h3>
                    <h4>Big company</h4>
                </div>
                <ul>
                    <li>5000 video lessons</li>
                    <li>4x speed</li>
                    <li>4000 solved exercises</li>
                    <li>900MB to save your code</li>
                    <li>Unlimited hours of support</li>
                </ul>
                <button className='pricing-btn'>sign up</button>
            </div>
            
        </div>



    </div>
  )
}

export default Pricing