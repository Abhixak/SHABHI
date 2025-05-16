import { useState } from "react";
import Navigation from './Navigation';
import FriendList from './FriendList';
import DisplayScreen from './DisplayScreen';

const MainContainer = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleIconClick = (tabName) => {
    if (activeTab === tabName) {
      setActiveTab(null);
    } else {
      setActiveTab(tabName);
    }
  };

  return (
    <div className='w-screen h-screen bg-[#c3fcf2] flex gap-4 items-center justify-center'>
      <Navigation onIconClick={handleIconClick} activeTab={activeTab} />
      <FriendList activeTab={activeTab} />
      <DisplayScreen />
    </div>
  );
};

export default MainContainer;
