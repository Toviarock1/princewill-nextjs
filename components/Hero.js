import { useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const heroVariant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0.4 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="bg-[#1D1E22] py-28 px-4 md:px-20 lg:px-32 flex flex-col-reverse md:flex-row items-center">
      <div>
        <div className="text-white lg:w-7/12">
          <p className="font-bold text-lg font-main">✋ Hello, my name is</p>
          <h1 className="text-5xl font-bold font-main my-3">Prince Chima</h1>
          <h2 className="text-5xl font-bold text-[#0DB760] font-main my-3">
            UI/UX and
            <br /> Graphic Designer
          </h2>
          <p className="font-medium font-main my-3">
            I’m Prince, a creative Product Designer. I’ve been helping
            businesses to solve their problems with my design for over a year.
          </p>
          <Button title={'Get in touch'} />
        </div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{
          duration: 5,
        }}
        variants={heroVariant}
        className="mb-8 md:mb-0"
      >
        <Image
          src={'/Picture.svg'}
          width={500}
          height={400}
          alt="potrait of prince chima"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
