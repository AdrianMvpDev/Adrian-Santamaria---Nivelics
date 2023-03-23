import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [element1, setElement1] = useState(false);
  const [element2, setElement2] = useState(false);

  const handleClick = () => {
    setElement1(!element1);
    setElement2(!element2);
  };

  return (
    <div className="container">
      <header>
        <h1>My Website</h1>
        {window.innerWidth < 500 ? (
          <div className={`menu_hamburguesa ${element1 ? 'active' : ''}`} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : null}
        <nav className={`${element2 ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        
      </header>
      <main>
        <section>
          <h2>Welcome to My Website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ullamcorper tellus. Morbi vestibulum quam eu libero mollis, at
            fringilla est varius. Praesent ut faucibus risus. In finibus nunc dolor, non imperdiet nunc laoreet at.{' '}
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Adrian Santamaria - Nivelics</p>
      </footer>
    </div>
  );
};

export default App;
