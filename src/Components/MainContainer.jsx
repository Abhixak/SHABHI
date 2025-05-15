
import Navigation from './Navigation'
import FriendList from './FriendList'
import DisplayScreen from './DisplayScreen'

const MainContainer = () => {
  return (
    <div className='w-screen h-screen bg-[#b0cdcb] flex gap-4 items-center justify-center'>
      <Navigation />
      <FriendList />
      <DisplayScreen />
    </div>
  )
}

export default MainContainer
