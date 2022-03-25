import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image5 from "../../assets/image5.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
    return(
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={Image1} alt="Delicious Meals" /></SwiperSlide>
        
        <SwiperSlide><img  src={Image2} alt="Delicious Meals" /></SwiperSlide>
        
        <SwiperSlide> <img  src={Image3} alt="Delicious Meals" /></SwiperSlide>

        <SwiperSlide> <img  src={Image5} alt="Delicious Meals" /></SwiperSlide>
        
       
      </Swiper>
      )

}

export default Carousel