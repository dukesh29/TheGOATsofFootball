import React, {useCallback, useEffect, useState} from 'react';
import MainBody from "../../components/MainBody/MainBody";
import {useParams} from "react-router-dom";
import {PlayerApi} from "../../type";
import axiosApi from "../../axiosApi";

const PlayerInfo = () => {

  const {id} = useParams();

  const [player, setPlayer] = useState<PlayerApi | null>(null);

  const fetchSelectedPlayer = useCallback(async () => {
    try {
      const playerResponse = await axiosApi.get<PlayerApi>("/pages/" + id + '.json');
      if (playerResponse !== null) {
        setPlayer(playerResponse.data);
      }

    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchSelectedPlayer().catch(console.error);
    }
  }, [id, fetchSelectedPlayer]);

  return player && (
    <div>
      <MainBody player={player}/>
    </div>
  );
};

export default PlayerInfo;