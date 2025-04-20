const GameBoard = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[500px] h-[500px] border-4 border-black rounded overflow-hidden">
      {/* Top-left - Green */}
      <div className="bg-green-400 flex items-center justify-center text-white font-bold">
        Green
      </div>

      {/* Top-center - Home Path */}
      <div className="bg-white flex items-center justify-center border">
        Path
      </div>

      {/* Top-right - Yellow */}
      <div className="bg-yellow-400 flex items-center justify-center text-white font-bold">
        Yellow
      </div>

      {/* Middle-left - Green Path */}
      <div className="bg-white flex items-center justify-center border">
        Path
      </div>

      {/* Center - Star/Goal */}
      <div className="bg-neutral-100 flex items-center justify-center border text-center">
        🏁
        <br />
        Home
      </div>

      {/* Middle-right - Yellow Path */}
      <div className="bg-white flex items-center justify-center border">
        Path
      </div>

      {/* Bottom-left - Red */}
      <div className="bg-red-400 flex items-center justify-center text-white font-bold">
        Red
      </div>

      {/* Bottom-center - Path */}
      <div className="bg-white flex items-center justify-center border">
        Path
      </div>

      {/* Bottom-right - Blue */}
      <div className="bg-blue-400 flex items-center justify-center text-white font-bold">
        Blue
      </div>
    </div>
  );
};

export default GameBoard;
