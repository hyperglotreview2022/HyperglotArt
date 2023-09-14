import React from "react";
import Slider from "react-slick";
import styles from '../../styles/slider.module.css'
import Image from "next/image";
import Link from "next/link";

const slider = ({product}) => {

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
            slidesToShow: 2,
            slidesToScroll: 1,
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
            {product.slice(0,8).map(image =>       
              <div key={image.id} className={styles.slidecontainer}>
              <Link className={styles.link} href={`/SingleProduct/${image.id}`}>
                <div className={styles.imgcontainer}>
                <Image className={styles.img} loader={() => image?.attributes?.img1?.data?.attributes?.url} unoptimized={true} src={image?.attributes?.img1?.data?.attributes?.url} width={300} height={700} alt="image"/>
                {/* <Image className={styles.img} loader={() => process.env.NEXT_PUBLIC_UPLOAD_URL+image?.attributes?.img1?.data?.attributes?.url} unoptimized={true} src={process.env.NEXT_PUBLIC_UPLOAD_URL+image?.attributes?.img1?.data?.attributes?.url} width={300} height={700} alt="image"/> */}
                </div>
                <div>
                  <h1 className={styles.sliderheading}>{image.attributes.title}</h1>
                  <h3 className={styles.subheading}>{image.attributes.desc}</h3>
                </div>
              </Link>

              </div>
            )}
          </Slider>
      </div>
    );
  }

export default slider;