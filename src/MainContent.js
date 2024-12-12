import React from 'react';
import { FaArrowLeft, FaPhone } from 'react-icons/fa'; // Иконки

function MainContent({ activeSection }) {
  return (
    <div className="main-content">
      {/* Верхний левый угол (кнопка назад) */}
      <div className="back-btn">
        <FaArrowLeft />
      </div>
      
      {/* Верхний правый угол (иконка телефона) */}
      <div className="phone-btn">
        <FaPhone />
      </div>

      {/* Основной контент в зависимости от активного раздела */}
      <div>
        <h1>{activeSection}</h1>
        {/* Дополнительный контент */}
      </div>
    </div>
  );
}

export default MainContent;
