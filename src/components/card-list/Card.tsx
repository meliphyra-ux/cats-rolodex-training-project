import "./card.styles.css";
import { Monster } from "../../App";
import { FC } from "react";

type CardProps = {
  monster : Monster
}

const Card: FC<CardProps> = ({ monster: { name, id , email} }) => {
  return (
    <div key={id} className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
