import { CONTACT } from "../assets/constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-poppins"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 w-fit mx-auto flex items-center justify-center"
        >
          <FaMapMarkerAlt className="mr-2" /> {/* Location icon */}
          {CONTACT.address}
        </motion.p>
        {/* <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p> */}
        <a
          href="mailto:sumitkm101102@gmail.com"
          className="border-b flex items-center justify-center w-fit mx-auto my-4"
        >
          <FaEnvelope className="mr-2" /> {/* Mail icon */}
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
