import { Button } from "@/components/ui/button";
import { useState } from "react";

const Game = () => {
  const [diceValue, setDiceValue] = useState<number | null>(null);

  return (
    <div>
      <h1>🎲 LudoCraft 🎲</h1>
      <p>Rolled: {diceValue ?? "-"}</p>
      {/* TO DO: Dice Component */}
      <Button>Start Game</Button>
    </div>
  );
};
