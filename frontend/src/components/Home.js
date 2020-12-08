import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
                <h2>WANDERLUST TRAVEL AGENCY</h2>
                <img id="glowSlogan" src="images/glowSlogan1.png" alt="Not All Who Wander Are Lost" />

                <h4 id="homeSummary">Travel - the only thing you buy, that makes you richer.</h4>

            </div>
            <div id="formStuff">
                {/* <div><p id="formIntro">Let's start planning your trip! Tell us about what kind of vacation you want to take!</p></div> */}
                <div><form id="chickenwings">
                    <div className="formDiv1">
                        <input type="text" id="cheeseburgers" className="input1" placeholder="First & Last Name"></input></div>
                    <div className="formDiv2">
                        <input type="text" id="cheeseburgers" className="input2" placeholder="E-mail Address"></input></div>
                    <div className="messageLabel">
                        <input type="text" id="formMessage" rows="3" placeholder="Where do you want to go?"></input></div>
                    <button id="formButton">Send</button>
                </form></div>
            </div>
        </div>

    );
}

export default Home;