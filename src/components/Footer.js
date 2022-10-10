import Logo from "../imgs/logo/Logo.png";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-screen h-[200px] p-2 grid items-center justify-items-center bg-black text-white">
      <div className="w-16 overflow-hidden">
        <img src={Logo} alt="Logo" className="w-full h-full" />
      </div>
      <div className="flex space-x-4">
        <div>
          <BsGithub />
          GitHub
        </div>
        <div>
          <BsLinkedin />
          LinkedIn
        </div>
        <div>
          <BsMailbox />
          Email
        </div>
      </div>
      <div className="text-xs align-bottom">
        Made by <b>Shawn He</b> &copy; 2022, All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
