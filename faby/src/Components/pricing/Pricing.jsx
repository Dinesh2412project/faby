import './Pricing.css';

const pricingPlans = [
  {
    price: "$15 / month",
    plan: "Silver",
    tagline: "Beginner",
    features: [
      "1000 video lessons",
      "Normal speed",
      "500 solved exercises",
      "300MB to save your code",
      "750 hours of support",
    ],
    isPopular: false,
  },
  {
    price: "$39 / month",
    plan: "Gold",
    tagline: "Best value",
    features: [
      "3000 video lessons",
      "2X speed",
      "2000 solved exercises",
      "500MB to save your code",
      "900 hours of support",
    ],
    isPopular: true, // This will get a special class
  },
  {
    price: "$89 / month",
    plan: "Platinum",
    tagline: "Big company",
    features: [
      "5000 video lessons",
      "4X speed",
      "4000 solved exercises",
      "900MB to save your code",
      "Unlimited hours of support",
    ],
    isPopular: false,
  },
];


const Pricing = () => {
  return (

    <div className="pricing-section">
  <div className="pricing-section__header">
    <h1 className="pricing-section__title">Plans & Pricing</h1>
    <h6 className="pricing-section__subtitle">
      Below you can see our plans & pricing and choose the one that suits you best.
    </h6>
  </div>

  <div className="pricing-section__cards">
    {pricingPlans.map((plan, index) => (
      <div
        className={`pricing-card ${plan.isPopular ? "active" : ""}`}
        key={index}
      >
        <div className={`pricing-card__header ${plan.isPopular ? "active" : ""}`}>
          <h2 className="pricing-card__price">{plan.price}</h2>
          <h3 className="pricing-card__plan">{plan.plan.toLowerCase()}</h3>
          <h4 className="pricing-card__tagline">{plan.tagline}</h4>
        </div>
        <ul className="pricing-card__features">
          {plan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <button className="pricing-card__button">Sign Up</button>
      </div>
    ))}
  </div>
</div>
  )
   {/*<div className='pricing-section'>
        <div className="pricing-section__header">
     <h1 className='pricing-section__title'>Plans & Pricing</h1>
     <h6 className='pricing-section__subtitle'>Below you can see our plans & pricing and choose the one that suits you best.</h6>
        </div>
        <div className="pricing-section__cards">

            
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



    </div>......*/}

}

export default Pricing