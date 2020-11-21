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
            <Carousel showArrows={true}  >
                <div>
                    <img src="./images/greecePic.jpg" alt="shot of city and water" />
                </div>
            </Carousel>
        </div>
        
    );
}

export default Home;