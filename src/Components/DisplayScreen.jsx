const DisplayScreen = ({ blur }) => {
  return (
    <div className={`
      screen overflow-hidden
      bg-[#fff8ec] h-[85%]
      absolute top-4 w-[90%]
      sm:h-[85%] sm:w-[95%]
      sm:absolute sm:top-4 lg:h-[95%]
      lg:static lg:w-[70%] rounded-2xl
      border-2 border-[#366871]
      flex justify-center items-center
      ${blur ? "blur-sm" : ""}
    `}>
      DISPLAY SCREEN
    </div>
  );
};

export default DisplayScreen;
