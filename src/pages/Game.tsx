import Dice from "@/components/Dice";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Game = () => {
  const [diceValue, setDiceValue] = useState<number | null>(null);

  const handleDiceRoll = (value: number) => {
    setDiceValue(value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-green-100">
      <h1 className="text-4xl font-bold text-center">🎲 LudoCraft 🎲</h1>
      <p className="text-xl">Rolled: {diceValue ?? "-"}</p>
      <Dice onRoll={handleDiceRoll} />
      <Button variant="outline">Start Game</Button>
    </div>
  );
};

export default Game;
