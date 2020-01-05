import React from "react";
import "./App.css";

type Component<T = {}> = React.FunctionComponent<T>;

type cardType = "red" | "green" | "blue" | "orange" | "special";
type fromType = Record<cardType, string>;

const cardTypeColor: fromType = {
  red: "#e32249",
  green: "#52de97",
  blue: "#3282b8",
  orange: "#ff971d",
  special: "#3c4245"
};

const colorSymbol: fromType = {
  red: "🪐",
  green: "🌎",
  blue: "🛰",
  orange: "🌓",
  special: "😃"
};

const Card: Component<{ type: cardType; num: number }> = ({ type, num }) => {
  const value = type === "special" ? "x" : num;
  const style = { backgroundColor: cardTypeColor[type] };

  return (
    <div className="containerStyle">
      <div className="backgroundStyle" style={style}>
        <div className="numberStyle">{value}</div>
        <div className="elementStyle">{colorSymbol[type]}</div>
      </div>
    </div>
  );
};

const CardType: Component<{ type: cardType }> = ({ type }) => {
  const numOfCards = type === "special" ? 2 : 13;
  const numbers = Array.from({ length: numOfCards }, (_, i) => i + 1);

  return (
    <section key={type} className="cardType">
      {numbers.map(number => (
        <Card key={number} num={number} type={type} />
      ))}
    </section>
  );
};

const App: Component = () => {
  const types = Object.keys(cardTypeColor) as Array<cardType>;

  return (
    <div>
      {types.map(type => (
        <CardType type={type} key={type} />
      ))}
    </div>
  );
};

export default App;
