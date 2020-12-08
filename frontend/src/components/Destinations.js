import React from 'react';

function Destinations(props) {


    return (
        <div>

<div class="content">
  <h1 class="section-header">Video Gallery</h1>
  <div class="section-header-underline"></div>
  <div class="video-gallery">
    <div class="gallery-item">
      <img src="https://i.pinimg.com/originals/75/f9/97/75f997ee6acf59dc51bbea05eae36677.jpg" alt="North Cascades National Park" />
      <div class="gallery-item-caption">
        <div>
          <h2>North Cascades</h2>
          <p>The mountains are calling</p>
        </div>
      </div>
    </div>

    <div class="gallery-item ">
      <img src="https://images.unsplash.com/photo-1556354235-586dcf1dccc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Mt. Rainier" />
      <div class="gallery-item-caption">
        <div>
          <h2>Mt. Rainier</h2>
          <p>14410 feet of adventure</p>
        </div>
        
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://wqtcq1f34a8kduuv3sc0e76o-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/12394537_web1_180620-pdn-goat-web.jpg" alt="Olympic National Park" />
      <div class="gallery-item-caption">
        <div>
          <h2>Olympic National Park</h2>
          <p>Mountains, rain forests, wild coastlines</p>
        </div>
      </div>
    </div>

    <div class="gallery-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg" alt="Mount St. Helens" />
      <div class="gallery-item-caption">
        <div>
          <h2>Mount St. Helens</h2>
          <p>The one and only</p>
        </div>
      </div>
    </div>

  </div>
</div>


        </div>
    );
}

export default Destinations;