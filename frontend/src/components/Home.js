import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home(props) {
    return (
        <div className="homeTotal">
            {/* menu/navbar */}
            {/* carousel with nice pics */}
            {/* home page includes: basic info - about us type info, customer testimonials/reviews slider?!, more pictures, footer w/fake address, phone number, and social media handles */}
            {/* <img src="./images/ethicalTraveler.jpg" id="homePagePic"/> */}
            {/* <div className="CarDiv">
            <Carousel id="carousel" showArrows={true}  infiniteLoop={true} interval={2500} stopOnHover={false} dynamicHeight={true} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false} >
                <div>
                    <img src="./images/greeceFixed.png" alt="shot of city and water" />
                </div>
                <div>
                    <img src="./images/lisbonFixed.png" alt="city" />
                </div>
                <div>
                    <img src="./images/beachFixed.png" alt="Miami beach" />
                </div>
            </Carousel>
            </div> */}
            
            <div className="homeHeader">
                <h2>Travel Agency Name</h2>
                <h3>Travel Agency Moto</h3>
                <h4>Sentence of Summary</h4>
            </div>
        </div>

    );
}

export default Home;