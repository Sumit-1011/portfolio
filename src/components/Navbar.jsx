import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-semibold text-gray-400 ml-6">Sumit.</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/sumit1011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-[#0077B5] hover:bg-white rounded" />
        </a>
        <a
          href="https://github.com/Sumit-1011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white hover:text-gray-800 hover:bg-white rounded-lg" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-white hover:text-gray-800 hover:bg-white rounded " />
        </a>
        <a
          href="https://www.instagram.com/_sumit_kumar_mishra_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white hover:text-pink-500 hover:bg-white rounded-lg" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
