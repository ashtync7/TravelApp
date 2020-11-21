import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home(props) {
    return (
        <div>
            {/* menu/navbar */}
            {/* carousel with nice pics */}
            {/* home page includes: basic info - about us type info, customer testimonials/reviews slider?!, more pictures, footer w/fake address, phone number, and social media handles */}
            <p>This is the Home Page</p>
            <Carousel showArrows={true} infiniteLoop={true} interval={3000} autoPlay={true} showThumbs={false} showStatus={false} >
                <div>
                    <img src="./images/greecePic.jpg" alt="shot of city and water" />
                </div>
                <div>
                    <img src="./images/Lisbon.jpg" alt="city" />
                </div>
                <div>
                    <img src="./images/Miami.jpg" alt="Miami beach" />
                </div>
            </Carousel>
        </div>

    );
}

export default Home;