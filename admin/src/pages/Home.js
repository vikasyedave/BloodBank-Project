import { Link } from "react-router-dom"
import {Redirect} from "react-router-dom"
import pic1 from '../images/img6.jpg'
import pic2 from '../images/img3.jpg'
import pic3 from '../images/img4.webp'







const Home=()=>{

  
  if(!localStorage.getItem("userinfo")){
   
    return( <Redirect to="/signin"/> )
}
    return(
    
        
      <div>
      <marquee width="60%" direction="left" height="100px" >
          <h1 className="mhead">WELCOME IN LIFELINE BLOOD BANK</h1>
      </marquee>
      <br></br>
      <center>
      <br></br>
      
          {/* <h2>Welcome, {user}!</h2> */}
          <marquee width="60%" direction="right" height="100px" >
          <h1 className="mhead">14 June is World Blood Donor Day</h1>
      </marquee>
      <br></br>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
              <img className="d-block w-100" src={pic1} alt="First slide"/>
              </div>
              <div className="carousel-item">
              <img className="d-block w-100" src={pic2} alt="Second slide"/>
              </div>
              <div className="carousel-item">
              <img className="d-block w-100" src={pic3} alt="Third slide"/>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            
          </a>
         
      </div>
   
      </center>
     
  </div>

       
        
    
      
        )
}


export default Home