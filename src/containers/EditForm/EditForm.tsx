import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PlayerApi} from "../../type";
import axiosApi from "../../axiosApi";

const EditForm = () => {


  const navigate = useNavigate();

  const [selectedPlayer, setSelectedPlayer] = useState('lionel-messi');

  const [player, setPlayer] = useState<PlayerApi>({
    title: '',
    text: '',
    img: '',
    goals: '',
    matches: '',
    number: '',
    nick: '',
  });

  const fetchSelectedPlayer = useCallback(async () => {
    try {
      const playerResponse = await axiosApi.get<PlayerApi>("/pages/" + selectedPlayer + '.json');
      setPlayer(playerResponse.data);
    } catch (e) {
      console.error(e);
    }
  }, [selectedPlayer]);

  useEffect(() => {
    if (selectedPlayer) {
      fetchSelectedPlayer().catch(console.error);
    }
  }, [selectedPlayer, fetchSelectedPlayer]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlayer(e.target.value);
  };

  const onPlayerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPlayer(prev => ({
      ...prev,
      [name]: value,
    }));
  };


  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.put('/pages/' + selectedPlayer + '.json', player);
    navigate('/');
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <form onSubmit={onFormSubmit} className="m-3">
          <h4 className="mt-2">Edit</h4>
          <div className="form-group my-2">
            <label htmlFor="nameId" className="pb-1 fs-6 fw-bold">Player</label>
            <select name="nameId" id="nameId" className="form-select w-25"
                    onChange={onSelectChange} value={selectedPlayer}>
              <option value="lionel-messi">Лионель Месси</option>
              <option value="kilian-mbappe">Килиан Мбаппе</option>
              <option value="cristiano-ronaldo">Криштиано Роналду</option>
              <option value="harry-kane">Харри Кейн</option>
            </select>
          </div>
          {player && (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={player.title}
                  onChange={onPlayerChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="img">Image</label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  className="form-control"
                  value={player.img}
                  onChange={onPlayerChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nick">Прозвище</label>
                <input
                  type="text"
                  id="nick"
                  name="nick"
                  className="form-control"
                  value={player.nick}
                  onChange={onPlayerChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="matches">Матчи</label>
                <input
                  type="text"
                  id="matches"
                  name="matches"
                  className="form-control"
                  value={player.matches}
                  onChange={onPlayerChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="goals">Голы</label>
                <input
                  type="text"
                  id="goals"
                  name="goals"
                  className="form-control"
                  value={player.goals}
                  onChange={onPlayerChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="text">Текст</label>
                <textarea
                  id="text"
                  name="text"
                  className="form-control"
                  value={player.text}
                  onChange={onPlayerChange}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">Update</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditForm;