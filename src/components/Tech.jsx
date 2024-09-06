import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration, delay = 0) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        {/* MongoDB */}
        <motion.div
          variants={iconVariants(3, 0.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Express */}
        <motion.div
          variants={iconVariants(3.5, 0.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-neutral-400" />
        </motion.div>

        {/* ReactJS */}
        <motion.div
          variants={iconVariants(4, 0.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* NodeJS */}
        <motion.div
          variants={iconVariants(3, 0.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* Redis */}
        <motion.div
          variants={iconVariants(4.5, 0.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>

        {/* Firebase */}
        <motion.div
          variants={iconVariants(3.5, 0.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiFirebase className="text-7xl text-yellow-500" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(3.2, 0.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-[#38BDF8]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
