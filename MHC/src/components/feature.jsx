import "./feature.scss"
import head from "../images2/head.png";
import doctor from "../images2/doctor.png"
import stress from "../images2/stress.png"
import test from "../images2/test.png"
import community from "../images2/community.png"
const Feature = () => {
  return (
   <div className="feature" id="features">
    <div className="upper photo">
       
<img src={head} />
<h1>The <br />
    website<br />
    that cares<br />
    about your<br />
    well-being.</h1>
    </div>
    <div className="middle photo">
        <h1>Book Sessions<br /> With Licensed <br />Therapists </h1>
        <img src={doctor} />
    </div>
 <div className="upper-mid photo">
    <img src={community} />
    <h1>Join a community<br/> of like-minded<br/> individuals</h1>
 </div>
    <div className="lower-middle photo" id="tests">
        <h1>Take Psychometric<br/> surveys and<br /> questionaires</h1>
        <img src={test}/>
    </div>
    <div className="lower photo">
        <img src={stress} />
        <h1>Stress-<br />management <br />exercises</h1>
    </div>
   </div>
  )
}

export default Feature