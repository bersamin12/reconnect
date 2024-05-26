import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './character-creation.css';

const CharacterCreation = (props) => {
  const [aowDropdownVisible, setAowDropdownVisible] = useState(false);
  const [aoiDropdownVisible, setAoiDropdownVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [age, setAge] = useState('');
  const [areaOfWork, setAreaOfWork] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const history = useHistory();

  const toggleAowDropdown = () => {
    setAowDropdownVisible(!aowDropdownVisible);
  };

  const toggleAoiDropdown = () => {
    setAoiDropdownVisible(!aoiDropdownVisible);
  };

  const handleCharacterSelection = (event) => {
    setSelectedCharacter(event.target.value);
  };

  const handleAowSelection = (value) => {
    setAreaOfWork(value);
    setAowDropdownVisible(false);
  };

  const handleAoiSelection = (value) => {
    setAreaOfInterest(value);
    setAoiDropdownVisible(false);
  };

  const handleConfirm = async () => {
    let personName = localStorage.getItem('username');
    
    // Clean up the username
    personName = personName.replace(/['"]+/g, '');

    const userDetails = {
      person_name: personName,
      sprite: selectedCharacter,
      age: age,
      work: areaOfWork,
      interest: areaOfInterest,
    };

    try {
      const response = await fetch('http://localhost:8000/update_person/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Character creation successful:', data);
        history.push('/explore');  // Redirect to home or another page after successful creation
      } else {
        console.error('Character creation failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="character-creation-container">
      <Helmet>
        <title>Character-Creation - ServeQuest</title>
        <meta property="og:title" content="Character-Creation - ServeQuest" />
      </Helmet>
      <div className="character-creation-name-creation">
        <select
          multiple={true}
          required={true}
          autoFocus={true}
          size="3"
          className="character-creation-select"
          onChange={handleCharacterSelection}
        >
          <option value="Wild Boar">Wild Boar</option>
          <option value="Myna Bird">Myna Bird</option>
          <option value="Monitor Lizard">Monitor Lizard</option>
        </select>
        <img
          alt="wildboarwhitebg13512"
          src="/wildboarwhitebg13512-h9h7-200w.png"
          className="character-creation-wildboarwhitebg1"
        />
        <img
          alt="lizardbg13513"
          src="/lizardbg13513-r9z-300w.png"
          className="character-creation-lizardbg1"
        />
        <input
          type="text"
          placeholder="Age"
          className="character-creation-textinput input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div
          data-thq="thq-dropdown"
          className="character-creation-aow-dropdown list-item"
          onClick={toggleAowDropdown}
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="character-creation-dropdown-toggle"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="character-creation-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="character-creation-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
            <span className="character-creation-text">Area of work/study</span>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className={`character-creation-dropdown-list ${aowDropdownVisible ? 'visible' : ''}`}
          >
            <li data-thq="thq-dropdown" className="character-creation-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle01"
                onClick={() => handleAowSelection('Education')}
              >
                <span className="character-creation-text01">Education</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown01 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle02"
                onClick={() => handleAowSelection('Technology')}
              >
                <span className="character-creation-text02">Technology</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown02 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle03"
                onClick={() => handleAowSelection('Business')}
              >
                <span className="character-creation-text03">Business</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown03 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle04"
                onClick={() => handleAowSelection('Art/Humanities')}
              >
                <span className="character-creation-text04">Art/Humanities</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown04 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle05"
                onClick={() => handleAowSelection('Others')}
              >
                <span className="character-creation-text05">Others</span>
              </div>
            </li>
          </ul>
        </div>
        <div
          data-thq="thq-dropdown"
          className="character-creation-aoi-dropdown list-item"
          onClick={toggleAoiDropdown}
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="character-creation-dropdown-toggle06"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="character-creation-dropdown-arrow1"
            >
              <svg viewBox="0 0 1024 1024" className="character-creation-icon2">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
            <span className="character-creation-text06">Area of interest</span>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className={`character-creation-dropdown-list1 ${aoiDropdownVisible ? 'visible' : ''}`}
          >
            <li data-thq="thq-dropdown" className="character-creation-dropdown05 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle07"
                onClick={() => handleAoiSelection('Environment')}
              >
                <span className="character-creation-text07">Environment</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown06 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle08"
                onClick={() => handleAoiSelection('Animal')}
              >
                <span className="character-creation-text08">Animal</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown07 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle09"
                onClick={() => handleAoiSelection('Less-Priviliged')}
              >
                <span className="character-creation-text09">Less-Priviliged</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown08 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle10"
                onClick={() => handleAoiSelection('Natural Disaster')}
              >
                <span className="character-creation-text10">Natural Disaster</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="character-creation-dropdown09 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="character-creation-dropdown-toggle11"
                onClick={() => handleAoiSelection('Others')}
              >
                <span className="character-creation-text11">Others</span>
              </div>
            </li>
          </ul>
        </div>
        <Link to="#" className="character-creation-sign-up-button" onClick={handleConfirm}>
          <span className="character-creation-text12">
            <span>Confirm</span>
          </span>
        </Link>
        <span className="character-creation-text14">
          <span>Choose your </span>
          <span>starter character:</span>
        </span>
        <span className="character-creation-text17">ServeQuest</span>
        <span className="character-creation-text18">Tell us about yourself!</span>
        <span className="character-creation-text19">
          <span>
            A native animal of Singapore,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>the Wild Boar can weigh up to 100kg</span>
          <br></br>
          <span> and has a lifespan of over 20 years.</span>
        </span>
        <span className="character-creation-text25">
          <span>
            The Common Myna is known
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>for scavenging food scraps and insects.</span>
        </span>
        <span className="character-creation-text29">
          <span>
            The Singaporean Monitor Lizard
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span> is a common sight in various habitats across the island,</span>
          <br></br>
          <span> including parks, reservoirs, and mangrove forests.</span>
        </span>
        <span className="character-creation-boar">Wild Boar</span>
        <span className="character-creation-bird">Myna Bird</span>
        <span className="character-creation-lizard">Monitor Lizard</span>
        <span className="character-creation-text35">What is your age?</span>
        <img
          alt="MynaBirdSpritebg25112"
          src="/mynabirdspritebg25112-4ii5-300h.png"
          className="character-creation-myna-bird-spritebg2"
        />
      </div>
    </div>
  );
};

export default CharacterCreation;
