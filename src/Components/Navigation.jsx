import { PiChatsTeardropBold } from "react-icons/pi";
import { PiUsersBold } from "react-icons/pi";
import { RiNotificationLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navigation = ({ onIconClick, activeTab }) => {
  const tabs = [
    { icon: <PiChatsTeardropBold />, label: "chats" },
    { icon: <PiUsersBold />, label: "friends" },
    { icon: <RiNotificationLine />, label: "notifications" },
    { icon: <CgProfile />, label: "profile" }
  ];

  return (
    <nav className="rounded-2xl border-2 border-[#366871] h-[10%] absolute bottom-2 w-[90%] z-10 lg:h-[95%] lg:w-[5%] sm:w-[95%] lg:static bg-[#ffc1b3] flex items-center justify-evenly lg:flex-col">
      {tabs.map(({ icon, label }) => (
        <div
          key={label}
          className={`cursor-pointer text-[1.5em] transition-colors duration-300 ease-in-out
            ${activeTab === label ? "text-[#ff8a5e] font-bold scale-110" : "text-[#402e32]"}
          `}
          onClick={() => onIconClick(label)}
          title={label.charAt(0).toUpperCase() + label.slice(1)}
        >
          {icon}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
