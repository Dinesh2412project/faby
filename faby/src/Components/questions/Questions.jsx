import './Questions.css';
import { IoReloadOutline } from "react-icons/io5";

const Questions = () => {
  return (
    <div className='question-container'>
        <div className="question-heading">
            <h1>Questions?</h1>
            <p>Here is a collection of some frequently asked questions from our clients:</p>
        </div>
        <div className="question-boxess">
            <div className="ques-box active">
                <h1>1</h1>
                <h3>What can I learn here?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>

            </div>

            <div className="ques-box">
                <h1>2</h1>
                <h3>Does it come with videos?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                
            </div>

            <div className="ques-box">
                <h1>3</h1>
                <h3>Types of payments you accept?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                
            </div>

            <div className="ques-box active">
                <h1>4</h1>
                <h3>Do you have an affiliate program?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                
            </div>
        </div>
        <button className='question-btn'>lode more <span><IoReloadOutline /></span></button>
    </div>
  )
}

export default Questions