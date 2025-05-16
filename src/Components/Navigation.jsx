
import { PiChatsTeardropBold } from "react-icons/pi";
import { PiUsersBold } from "react-icons/pi";
import { RiNotificationLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {
  return (
    <nav className="rounded-2xl border-2 border-[#366871] h-[10%] absolute bottom-2 w-[90%] z-10 lg:h-[95%] lg:w-[5%] sm:w-[95%] lg:static bg-[#ffc1b3] flex items-center justify-evenly lg:flex-col ">
      <PiChatsTeardropBold className="cursor-pointer text-[1.5em] text-[#402e32]"/>
      <PiUsersBold className="cursor-pointer text-[1.5em] text-[#402e32]"/>
      <RiNotificationLine className="cursor-pointer text-[1.5em] text-[#402e32]"/>
      <CgProfile className="cursor-pointer text-[1.5em] text-[#402e32]"/>
    </nav>
  );
};

export default Navigation;
