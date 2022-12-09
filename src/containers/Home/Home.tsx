import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="main-block">
      <Link to={'/pages/lionel-messi'}><img src="https://wallpapercrafter.com/desktop/397161-Sports-Lionel-Messi-Phone-Wallpaper.jpg" alt="messi"/></Link>
      <Link to={'/pages/cristiano-ronaldo'}><img src="https://zamanilka.ru/wp-content/uploads/2021/11/ronaldo-221121-2.jpg" alt="ronaldo"/></Link>
      <Link to={'/pages/harry-kane'}><img src="https://oboi-telefon.ru/wallpapers/54756/32170.jpg" alt="kane"/></Link>
      <Link to={'/pages/kilian-mbappe'}><img src="https://oboi-telefon.ru/wallpapers/54279/37996.jpg" alt="mbappe"/></Link>
    </div>
  );
};

export default Home;