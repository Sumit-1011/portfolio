import about_sumit from "/about_sumit.png";
import { ABOUT_TEXT } from "../assets/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-8 text-center text-4xl">
        About
        {/* <span className="text-neutral-500"> Me</span> */}
      </h2>
      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-xl w-2/3" src={about_sumit} alt="About Me" />
          </div>
        </motion.div>

        {/* About Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 lg:py-20">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
