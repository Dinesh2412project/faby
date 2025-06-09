import './Questions.css';
import { IoReloadOutline } from "react-icons/io5";

const Questions = () => {
  return (
    <div className='faq'>
        <div className="faq__header">
            <h1 className='faq__title'>Questions?</h1>
            <p className='faq__subtitle'>Here is a collection of some frequently asked questions from our clients:</p>
        </div>
        <div className="faq__list">
            <div className="faq__item active">
                <h1 className='faq__number'>1</h1>
                <h3 className='faq__question'>What can I learn here?</h3>
                <p className='faq__answer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>

            </div>

            <div className="faq__item">
                <h1 className='faq__number'>2</h1>
                <h3 className='faq__question'>Does it come with videos?</h3>
                <p className='faq__answer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                
            </div>

            <div className="faq__item">
                <h1 className='faq__number'>3</h1>
                <h3 className='faq__question'>Types of payments you accept?</h3>
                <p className='faq__answer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                
            </div>

            <div className="faq__item active">
                <h1 className='faq__number'>4</h1>
                <h3 className='faq__question'>Do you have an affiliate program?</h3>
                <p className='faq__answer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                
            </div>
        </div>
        <button className='faq__load-more'>lode more <span><IoReloadOutline /></span></button>
    </div>
  )
}

export default Questions