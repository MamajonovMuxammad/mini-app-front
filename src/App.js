import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';
import { FaBell, FaUser, FaCog, FaVideo, FaWallet,FaCamera, FaEnvelope, FaMusic, FaCalendarAlt, FaBookmark, FaStore, FaLanguage, FaFileAlt, FaTools } from 'react-icons/fa'; // Иконки

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Состояние активного раздела

  return (
    <div className="app">
      {/* Верхняя панель */}
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

      <div className="main-container">
        <Sidebar setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />

        {/* Правая панель с кнопками */}
        <div className="right-panel">
          <div className="right-buttons">
            <button className="btn">
              <FaEnvelope /> Смс
            </button>
            <button className="btn">
              <FaCamera /> Фотографии
            </button>
            <button className="btn">
              <FaMusic /> Аудиофайлы
            </button>
            <button className="btn">
              <FaVideo /> Видео
            </button>
            <button className="btn">
              <FaEnvelope /> Голосовые смс
            </button>
            <button className="btn">
              <FaWallet /> Кошелек
            </button>
            <button className="btn">
              <FaCog /> Приватность
            </button>
            <button className="btn">
              <FaBookmark /> Закладки
            </button>
            <button className="btn">
              <FaStore /> Магазин
            </button>
            <button className="btn">
              <FaCalendarAlt /> Календарь событий
            </button>
            <button className="btn">
              <FaLanguage /> Язык
            </button>
            <button className="btn">
              <FaUser /> Профиль
            </button>
          </div>

          {/* Нижние кнопки */}
          <div className="bottom-buttons">
            <button className="btn">
              <FaFileAlt /> Файлы
            </button>
            <button className="btn">
              <FaTools /> Сервисы
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
