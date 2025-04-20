import Dice from "@/components/Dice";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Game = () => {
  const [diceValue, setDiceValue] = useState<number | null>(null);

  const handleDiceRoll = (value: number) => {
    setDiceValue(value);
  };

  return (
    <div>
      <h1>🎲 LudoCraft 🎲</h1>
      <p>Rolled: {diceValue ?? "-"}</p>
      <Dice onRoll={handleDiceRoll} />
      <Button>Start Game</Button>
    </div>
  );
};

export default Game;
