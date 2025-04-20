type TokenProps = {
  color: "red" | "green" | "blue" | "yellow";
  id: number;
};

const colorMap: Record<TokenProps["color"], string> = {
  red: "bg-red-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
  yellow: "bg-yellow-500",
};

const Token = ({ color, id }: TokenProps) => {
  return (
    <div
      className={`w-6 h-6 md:w-8 md:h-8 ${colorMap[color]} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md`}
    >
      {id}
    </div>
  );
};

export default Token;
