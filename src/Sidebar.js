import React from 'react';
import { FaUsers, FaCog } from 'react-icons/fa';  // Импорт иконок
import { FaEnvelope,FaUser } from 'react-icons/fa'; // Импорт иконки

function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveSection('УРА ДРУЗЬЯ!')}>
          <FaUsers /> Друзья  {/* Использование иконки FaUsers */}
        </li>
        <li onClick={() => setActiveSection('НЕТУ В СЕТИ НИКОГО')}>
          <FaUsers /> В сети {/* Использование иконки FaUsers */}
        </li>
        <li onClick={() => setActiveSection('дРУЗЕЙ У ВАС НЕТ ЕЩЕ')}>
          <FaCog /> Добавить в Друзья {/* Использование иконки FaCog */}
        </li>
        <li onClick={() => setActiveSection('Заявки')}>
        <FaEnvelope /> Зявки {/* Использование иконки FaCog */}
        </li>
        <li onClick={() => setActiveSection('Безопастность профиля')}>
        <FaUser />  Безопастность профиля {/* Использование иконки FaCog */}
        </li>
        {/* Добавьте другие элементы меню */}
      </ul>
    </div>
  );
}

export default Sidebar;
