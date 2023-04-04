import Card from "./Card";
import { Monster } from "../../App";

import "./card-list.styles.css";
import { FC } from "react";

type CardListProps = {
  filteredMonsters: Monster[]
}

const CardList: FC<CardListProps> = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default CardList;
