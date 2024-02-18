import React from "react";
import "../images/image1.jpg";

const Carousel = () => {
  return (
    <div>
      <div class="center">
        <div class="wrapper">
          <div class="inner">
            <div class="card">
              <div class="content">
                <h1>test one</h1>
                <img src="../images/image1.jpg" alt="" />
                <h3></h3>
              </div>
            </div>
            <div class="card">
              <img src="../images/image2.jpg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>

            <div class="card">
              <img src="../images/image3.jpg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>
            <div class="card">
              <img src="../images/image4.jpg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>
            <div class="card">
              <img src="../images/image5.jpg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>
            <div class="card">
              <img src="../images/image6.jpg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>
            <div class="card">
              <img src="../images/image7.jpeg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>
            <div class="card">
              <img src="../images/image8.jpeg" alt="" />
              <div class="content">
                <h1></h1>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>

        <div class="map">
          <button class="active first"></button>
          <button class="second"></button>
          <button class="third"></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
