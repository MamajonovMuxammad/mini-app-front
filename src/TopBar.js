import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa'; // Иконки уведомлений и пользователя

function TopBar() {
  return (
    <div className="topbar">
      <div className="left">
        <button className="btn">Люди</button>
      </div>
      <div className="center">
        <span className="nickname">Никнейм</span>
      </div>
      <div className="right">
        <button className="btn">
          <FaBell /> {/* Кнопка уведомлений */}
        </button>
        <button className="btn">
          <FaUser /> {/* Кнопка пользователя */}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
