import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './ParallaxSlider.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';

const slides = [
    { id: 1, img: slide1, title: 'Save Sea Animals' },
    { id: 2, img: slide2, title: 'Save Plants' },
    { id: 3, img: slide3, title: 'Gave back to Earth' },
    { id: 4, img: slide4, title: 'Go Green' },
];

const ParallaxSlider = () => {
    return (
        <div className="slider-container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                        <motion.div
                            className="parallax-image"
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={slide.img} alt={slide.title} />
                        </motion.div>
                        <motion.div
                            className="slide-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {slide.title}
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ParallaxSlider;