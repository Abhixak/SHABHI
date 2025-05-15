import DisplayScreen from "../Components/DisplayScreen";
import FriendList from "../Components/FriendList";
import MainScreen from "../Components/MainContainer";
import Navigation from "../Components/Navigation";
import "../Styles/home.css"

const Home = () => {
  return (
    <div className="flex h-full gap-2 items-center">
      <Navigation />
      <FriendList />
      <DisplayScreen />
      <MainScreen />
      
    </div>
  );
};

export default Home;
