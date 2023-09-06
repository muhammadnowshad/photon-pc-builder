import Image from 'next/image';
import DrawingImage from "../../assets/images/bannar/drawing_image.jpg";
import styles from "@/styles/Bannar.module.css";
import Slider from 'react-slick';

const Bannar = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
      <div>
        <Slider {...settings}>
          <div>
            <Image
              src={DrawingImage}
              className={styles.bannarImg}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src={DrawingImage}
              className={styles.bannarImg}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src={DrawingImage}
              className={styles.bannarImg}
              alt="Picture of the author"
            />
          </div>
        </Slider>
      </div>
    );
};

export default Bannar;