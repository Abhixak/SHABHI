import { useState, useEffect } from "react";
import Navigation from './Navigation';
import FriendList from './FriendList';
import DisplayScreen from './DisplayScreen';

const MainContainer = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleIconClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab(null);
    } else {
      setActiveTab(tabName);
    }
  };

  // FriendList visible if large screen OR activeTab is set
  const friendListVisible = isLargeScreen || !!activeTab;

  // Blur DisplayScreen only if FriendList visible AND NOT large screen
  const shouldBlurDisplay = friendListVisible && !isLargeScreen;

  return (
    <div className='w-screen h-screen bg-[#c3fcf2] flex gap-4 items-center justify-center'>
      <Navigation onIconClick={handleIconClick} activeTab={activeTab} />
      <FriendList activeTab={activeTab} />
      <DisplayScreen blur={shouldBlurDisplay} />
    </div>
  );
};

export default MainContainer;
