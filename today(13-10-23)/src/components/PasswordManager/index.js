import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import PasswordItem from '../PasswordItem';

function PasswordManager() {
  const [passwordRecords, setPasswordRecords] = useState([]);
  const [inputUrl, setInputUrl] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const deletePasswordRecord = (id) => {
    const filteredPasswordRecords = passwordRecords.filter((e) => e.id !== id);
    setPasswordRecords(filteredPasswordRecords);
  };

  const getSearchRecords = () => {
    return passwordRecords.filter((eachRecord) =>
      eachRecord.url.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const onInputUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onInputNameChange = (e) => {
    setInputName(e.target.value);
  };

  const onInputPasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const onCheckChange = () => {
    setShowPassword((prevState) => !prevState);
  };

  const addPasswordRecord = (e) => {
    e.preventDefault();
    const newPasswordRecord = {
      id: uuidv4(),
      url: inputUrl,
      name: inputName,
      password: inputPassword,
    };
    setPasswordRecords((prevRecords) => [...prevRecords, newPasswordRecord]);
  };

  const searchResults = getSearchRecords();

  
  useEffect(() => {
    
    const simulatedData = [
      { id: uuidv4(), url: 'Youtube.com', name: 'Ramya', password: '12345678' },
      { id: uuidv4(), url: 'Google.com', name: 'Chowdary', password: '87654321' },
      
    ];

    
    setPasswordRecords(simulatedData);
  }, []);

  return (
    <div className="app-container">
      <div className="responsive-container">
      <div className="app-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="card-container manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="manager-image"
          />
          <div className="card form-container">
            <form className="card-responsive" onSubmit={addPasswordRecord}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Website"
                  value={inputUrl}
                  onChange={onInputUrlChange}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Username"
                  value={inputName}
                  onChange={onInputNameChange}
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  value={inputPassword}
                  onChange={onInputPasswordChange}
                />
              </div>
              <div className="btn-container">
                <button className="add-btn" type="submit" onClick={addPasswordRecord}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="card-container">
          <div className="card-responsive no-password-container">
            <div className="passwords-header">
              <h1 className="passwords-header-title">
                Your Passwords
                <p className="results-count"> {searchResults.length}</p>
              </h1>
              <div className="search-container">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon"
                  />
                </div>
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={onSearchChange}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-input"
                id="checkbox"
                onChange={onCheckChange}
                checked={showPassword}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                Show Passwords
              </label>
            </div>
            {searchResults.length !== 0 ? (
              <ul className="passwords-list-container">
                {searchResults.map((eachRecord) => (
                  <PasswordItem
                    key={eachRecord.id}
                    record={eachRecord}
                    deletePasswordRecord={deletePasswordRecord}
                    showPassword={showPassword}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="no-passwords-title">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordManager;
