type DiceProps = {
  onRoll: (value: number) => void;
};

const Dice = ({ onRoll }: DiceProps) => {
  const roll = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    onRoll(result);
  };

  return <button onClick={roll}>🎲 Roll Dice</button>;
};

export default Dice;
