import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../../styles/slider.module.css'
import Image from "next/image";

const images = [ { id:1 ,
                   url:"/heroimage/Heroimage.JPG"},
                   { id:2 ,
                    url:"/heroimage/Heroimage.JPG"},
                    { id:3 ,
                      url:"/heroimage/Heroimage.JPG"},
                      { id:4 ,
                        url:"/heroimage/Heroimage.JPG"},
                        { id:5 ,
                          url:"/heroimage/Heroimage.JPG"},
                          { id:6 ,
                            url:"/heroimage/Heroimage.JPG"},
                            { id:7 ,
                              url:"/heroimage/Heroimage.JPG"},
                              { id:8 ,
                                url:"/heroimage/Heroimage.JPG"}]

export default class slider extends Component {
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={styles.container}>
        <h2 className="heading"> Exhibitions </h2>
          <Slider {...settings} className={styles.slider}>        
            {images.map(image =>       
              <div className={styles.slidecontainer}>
                <div className={styles.imgcontainer}>
                  <Image key={image.id} className={styles.img} src={image.url} width={500} height={500} alt="image"/>
                </div>
                <div>
                  <h1 className={styles.sliderheading}>English Landscape Painting</h1>
                  <h3 className={styles.subheading}>8th July 2023 - 10th July 2023</h3>
                </div>
              </div>
            )}
          </Slider>
      </div>
    );
  }
}