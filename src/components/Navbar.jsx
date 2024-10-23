import logo from "../assets/logo-color.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src= {logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/sai-krishna-anumula-b415a6239/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a href="https://github.com/saikrishnacreat" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-800" />
        </a>
        <a href="https://x.com/skanumula19" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com/saikrishna.19.19/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600" />
        </a>
      </div>
  </nav>
}

export default Navbar