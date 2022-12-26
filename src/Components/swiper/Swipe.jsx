import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "./Swiper.css"

import { BiHappyAlt } from "react-icons/bi"
import { BsFillLaptopFill } from "react-icons/bs"

//import styles for swiper. we have to import these so that we can use them when we initialize the optionss for swiper
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

function Swipe() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={40}
        loopFillGroupWithBlank={true}
        navigation={true}
      >
        <SwiperSlide>
          <div>
            <p>Hello!</p>
            <p>
              <BiHappyAlt />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>I'm Ufuoma Pokoh.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>I'm a full Stack web developer.</p>
            <p>
              <BsFillLaptopFill />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>I'm just exploring the use of SwiperJS.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Thanks for joining me.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>Okay, bye!</p>
            <p>
              <BiHappyAlt />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default Swipe
