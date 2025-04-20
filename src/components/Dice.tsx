type DiceProps = {
  onRoll: (value: number) => void;
};

const Dice = ({ onRoll }: DiceProps) => {
  const roll = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    onRoll(result);
  };

  return (
    <button
      onClick={roll}
      className="text-2xl px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-lg"
    >
      🎲 Roll Dice
    </button>
  );
};

export default Dice;
