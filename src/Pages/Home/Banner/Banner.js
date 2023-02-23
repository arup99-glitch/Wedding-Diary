import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import carosel from'../../../img/revolution-image-1.jpg'
import carosel2 from'../../../img/revolution-image-2.jpg'
import carosel3 from'../../../img/revolution-image-3.jpg'
import smallflower from '../../../img/revolution-image-4.png';


const Banner = () => {
    return (
        <div>
        <div className='banner'>
            <h1 className='bannerText'>PLANNING YOUR SPACIAL DAY?</h1>
            </div>
            {/* <div>
                <img src={smallflower} alt=""></img>
            </div> */}
            <div className='carosel'>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carosel}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carosel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carosel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            <div className='Text'>
                <p>
                We create thoughtful environments, full of memorable moments and details, for our clients and their guests. Our hope is that each couple feels their day is perfectly unique to them.

                </p>
                <p>
                We are based in London but travel all over the UK and overseas to create unique, badass weddings for our couples. But we also care about the planet, so if we have to fly or drive to a wedding we offset our carbon and donate to a number of projects helping combat climate change.


                </p>
                <p>
                    
Head on over to our Weddings with Revelry page for more details on what we do and how we work, then get in touch with us today to chat about how we can work with you to create your dream day.


                </p>
            </div>
        </div>
    );
};

export default Banner;