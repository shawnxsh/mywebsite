import Logo from "../imgs/logo/Logo.png";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import { myEmail } from "./Images";

function Footer() {
  return (
    <div className="w-screen h-[200px] p-2 grid items-center justify-items-center bg-black text-white">
      <div className="w-16 overflow-hidden">
        <img src={Logo} alt="Logo" className="w-full h-full" />
      </div>
      <div className="flex space-x-7">
        <a
          href="http://github.com/shawnxsh"
          className="flex items-center space-x-2"
        >
          <BsGithub />
          <span>GitHub</span>
        </a>
        <a
          href="http://www.linkedin.com/in/xingshihe/"
          className="flex items-center space-x-2"
        >
          <BsLinkedin />
          <span>LinkedIn</span>
        </a>
        <a href={`mailto:${myEmail}`} className="flex items-center space-x-2">
          <BsMailbox />
          <span>Email</span>
        </a>
      </div>
      <div className="text-xs align-bottom">
        Made by <b>Shawn He</b> &copy; 2022, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
