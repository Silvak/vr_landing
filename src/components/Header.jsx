//import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";

const styledText =
  "bg-gradient-to-r from-[#8176AF]  to-[#C0B7E8]  inline-block text-transparent bg-clip-text";

function Header() {
  return (
    <head className="flex justify-center w-full h-[80px] fixed top-0 z-[1000] backdrop-blur-lg border-b border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-[1300px] px-4 md:px-0 w-full items-center">
        <div className="text-xl font-bold text-white">
          <a href="/">
            <span className={styledText}>HYDRA</span>
          </a>
        </div>

        <ul className="flex justify-center hidden md:flex">
          <li className="flex gap-4 text-white font-semibold text-[12px]">
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#technologies">TECHNOLOGIES</a>
            <a href="#howto">HOW TO</a>
          </li>
        </ul>

        <div className="flex justify-end gap-4">
          <a href="#contact">
            <Button className="text-[12px]">CONTACT US</Button>
          </a>
        </div>
      </div>
    </head>
  );
}

export default Header;
