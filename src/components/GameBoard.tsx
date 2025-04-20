import Token from "./Token";

const GameBoard = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[500px] h-[500px] border-4 border-black rounded overflow-hidden">
      {/* Green Base */}
      <div className="bg-green-400 flex items-center justify-center flex-wrap gap-1">
        <Token color="green" id={1} />
        <Token color="green" id={2} />
        <Token color="green" id={3} />
        <Token color="green" id={4} />
      </div>

      {/* Center Path */}
      <div className="bg-white flex items-center justify-center border">
        Path
      </div>

      {/* Yellow Base */}
      <div className="bg-yellow-400 flex items-center justify-center flex-wrap gap-1">
        <Token color="yellow" id={1} />
        <Token color="yellow" id={2} />
        <Token color="yellow" id={3} />
        <Token color="yellow" id={4} />
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
      <div className="bg-red-400 flex items-center justify-center flex-wrap gap-1">
        <Token color="red" id={1} />
        <Token color="red" id={2} />
        <Token color="red" id={3} />
        <Token color="red" id={4} />
      </div>

      {/* Bottom-center - Path */}
      <div className="bg-white flex items-center justify-center border">
        Path
      </div>

      {/* Bottom-right - Blue */}
      <div className="bg-blue-400 flex items-center justify-center flex-wrap gap-1">
        <Token color="blue" id={1} />
        <Token color="blue" id={2} />
        <Token color="blue" id={3} />
        <Token color="blue" id={4} />
      </div>
    </div>
  );
};

export default GameBoard;
