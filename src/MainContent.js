import React from 'react';
import { FaPlus, FaSmile, FaStream, FaMicrophone, FaArrowRight } from 'react-icons/fa';
import './App.css'; // Подключение CSS файла

function MainContent({ activeSection }) {
  return (
    <div className="main-content">
      {/* Верхняя часть интерфейса */}
      <div className="content-header">
        <h1>Текущий раздел: {activeSection}</h1>
      </div>

      {/* Нижняя панель */}
      <div className="bottom-panel">
        <div className="right-group">
          <button className="bottom-btn">
            <FaPlus />
          </button>
          <button className="bottom-btn">
            <FaSmile />
          </button>
          <button className="bottom-btn">
            <FaStream />
          </button>
        </div>
        <div className="left-group">
          <button className="bottom-btn">
            <FaMicrophone />
          </button>
          <button className="bottom-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;