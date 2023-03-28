import Image from 'next/image';
import Button from './Button';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section className="bg-[#19191D] py-28 px-4 md:px-16 flex flex-col md:flex-row  items-center">
      <div>
        <div className="text-white md:w-9/12">
          <h2 className="text-5xl font-bold font-main my-3">
            My Creative Works Latest
            <span className="text-[#0DB760]"> Projects</span>
          </h2>
          <p className="font-medium font-main my-5">
            I have selected and mentioned here some of my latest projects to
            share with you.
          </p>
          <Button title={'Show More'} />
        </div>
      </div>
      <div className="w-full mt-9 md:w-3/5 md:mt-0">
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={'/landingpage2.svg'}
              width={100}
              height={255}
              alt="work sample"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/landingpage3.svg'}
              width={100}
              height={255}
              alt="work sample"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/landingpage2.svg'}
              width={100}
              height={255}
              alt="work sample"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
