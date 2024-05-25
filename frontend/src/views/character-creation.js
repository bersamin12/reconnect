import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './character-creation.css'

const CharacterCreation = (props) => {
  return (
    <div className="character-creation-container">
      <Helmet>
        <title>Character-Creation - ServeQuest</title>
        <meta property="og:title" content="Character-Creation - ServeQuest" />
      </Helmet>
      <div className="character-creation-name-creation">
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
        <Link to="/home" className="character-creation-sign-up-button">
          <span className="character-creation-text">
            <span>Confirm</span>
          </span>
        </Link>
        <span className="character-creation-text02">
          <span>Choose your </span>
          <span>starter character.</span>
        </span>
        <span className="character-creation-text05">ServeQuest</span>
        <span className="character-creation-text07">
          Tell us about yourself!
        </span>
        <span className="character-creation-text08">
          <span>What is your area of work?</span>
        </span>
        <span className="character-creation-text10">
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
        <span className="character-creation-text16">
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
        <span className="character-creation-text20">
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
        <span className="character-creation-text26">Areas of Interest</span>
        <span className="character-creation-text27">What is your age?</span>
        <div className="character-creation-email-field list">
          <span className="character-creation-text28 list">(dropdown box)</span>
        </div>
        <div className="character-creation-email-field1 list">
          <span className="character-creation-text29 list">(dropdown box)</span>
        </div>
        <div className="character-creation-email-field2 list">
          <span className="character-creation-text30 list">(dropdown box)</span>
        </div>
        <span className="character-creation-text31">Wild Boar</span>
        <span className="character-creation-text32">Myna Bird</span>
        <img
          alt="MynaBirdSpritebg25112"
          src="/mynabirdspritebg25112-4ii5-300h.png"
          className="character-creation-myna-bird-spritebg2"
        />
        <span className="character-creation-text33">Monitor Lizard</span>
      </div>
    </div>
  )
}

export default CharacterCreation
