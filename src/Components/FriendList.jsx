import { useEffect, useState } from "react";
import "../Styles/FX.css";

const FriendList = ({ activeTab }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Visible if large screen or activeTab is set
  const isVisible = isLargeScreen || !!activeTab;

  return (
    <div
      className={`dataContainer ${isVisible ? "active" : ""} z-5 border-2 border-[#366871] bg-[#ffd99d] rounded-2xl
        absolute left-[5%] top-4 h-[85%]
        sm:w-[60%] sm:h-[85%] sm:left-[2%] sm:top-4
        lg:static lg:h-[95%] 
        flex justify-center items-center text-[white]
      `}
      style={{ width: isLargeScreen ? "20%" : undefined }}
    >
      {activeTab === 'chats' && <p className="p-4">Chats</p>}
      {activeTab === 'friends' && <p className="p-4">Friends</p>}
      {activeTab === 'notifications' && <p className="p-4">Notifications</p>}
      {activeTab === 'profile' && <p className="p-4">Profile</p>}
      {!activeTab && isLargeScreen && <p className="p-4">Default Screen</p>}
    </div>
  );
};

export default FriendList;
