import React from 'react';
import {PlayerApi} from "../../type";

interface Props {
  player: PlayerApi;
}


const MainBody: React.FC<Props> = ({player}) => {

  const img = player.img;

  return (
    <div className="p-3">
      <h1 className="text-center mb-3">{player.title}</h1>
      <div className="d-flex mb-3">
        <img src={img} alt={player.title} className="align-self-start"/>
        <p className="ps-5">{player.text}</p>
      </div>
      <ul className="list">
        <li>Прозвище: <strong>{player.nick}</strong></li>
        <li>Номер игрока: <strong>{player.number}</strong></li>
        <li>Матчей в карьере: <strong>{player.matches}</strong></li>
        <li>Голов в карьере: <strong>{player.goals}</strong></li>
      </ul>

    </div>
  );
};

export default MainBody;