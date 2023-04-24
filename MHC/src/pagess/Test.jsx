
import SimpleAccordion from "../function/accordian"
import test from "../images2/testing.png"
import "./test.sass"
const Test = () => {
  return (
    <div className="class">
        <div className="upper">
            <h1>Psychometric</h1>
            <p>
            Take mental health<br/> questionnaire and psychometric<br/> tests such as 
anxiety, depression, and personality tests<br/> to gain a deeper insight into your health and mind.
            </p>
        </div>
        <div className="lower">
            <div className="heading">  
            <h1>Test Available</h1>
            <h2>We currently offer tests for depression, anxiety, and personality.<br/>Depression Tests</h2>
</div>
        
<SimpleAccordion />
            <img  src={test} />
           
         

        </div>
    </div>
  )
}

export default Test