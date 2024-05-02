import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Handle login click event
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    // Handle search functionality
  };

  const handleCreateBlog = (): void => {
    navigate("/")
  }

  return (
    <header className="header">
      <div className="search">
        <input type="text" placeholder="Search..." onChange={handleSearch} className="search-input" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="brand">
        <h1>Large</h1>
      </div>
      <div className="login">
        <div className="write" onClick={handleCreateBlog}>
          <FontAwesomeIcon icon={faPenToSquare} className="write-icon" />
          <div>Write</div>
        </div>
        <button onClick={handleLoginClick} className="login-button">Login</button>
      </div>
    </header>
  );
};

export default Header;
