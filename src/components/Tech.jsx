import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss, SiFastapi, SiPostgresql } from "react-icons/si";
import { FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { DiRedis, DiFirebase } from "react-icons/di";

const Tech = () => {
  // Configuration parameters
  const amplitude = 12;      // pixels up/down movement
  const period = 2;          // seconds per full wave cycle
  const phaseStep = 0.6;     // radians between adjacent icons (controls wave spacing)

  const icons = [
    <SiMongodb className="text-7xl text-green-500" />,
    <SiExpress className="text-7xl text-neutral-400" />,
    <RiReactjsLine className="text-7xl text-cyan-400" />,
    <FaNodeJs className="text-7xl text-green-500" />,
    <DiRedis className="text-7xl text-red-700" />,
    <DiFirebase className="text-7xl text-yellow-500" />,
    <FaAws className="text-7xl text-orange-500" />,
    <SiPostgresql className="text-7xl text-sky-600" />,
    <SiFastapi className="text-7xl text-emerald-500" />,
    <FaDocker className="text-7xl text-blue-500" />,
    <SiTailwindcss className="text-7xl text-[#38BDF8]" />,
  ];

  const frequency = 1 / period; // cycles per second

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

      <div className="flex flex-wrap justify-center items-center gap-4">
        {icons.map((icon, index) => {
          const y = useMotionValue(0); // create motion value per icon
          const phase = index * phaseStep; // phase offset for wave

          useAnimationFrame((t) => {
            const time = t / 1000; // convert ms to seconds
            const displacement =
              amplitude * Math.sin(2 * Math.PI * frequency * time + phase);
            y.set(displacement);
          });

          return (
            <motion.div
              key={index}
              style={{ y }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              {icon}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
