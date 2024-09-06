import { HERO_CONTENT } from "../assets/constants/index";
import profile from "../assets/profile.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // 'once: false' ensures animation happens on every scroll.

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-12">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animate on scroll in
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Sumit Kumar Mishra
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Triggered on scroll
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Triggered on scroll
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center w-full h-full">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} // Re-trigger on scroll
              transition={{ duration: 1, delay: 0.6 }}
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-xl"
              src={profile}
              alt="Sumit Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
