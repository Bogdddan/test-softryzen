import React, { useState } from 'react';
import css from './header.module.css';
import logo from '../../svg/logo.svg';
import modalLogo from '../../svg/modal-logo.svg';
import logoShip from '../../svg/logo-ship.svg';
import xLogo from '../../svg/xLogo.svg';
import discordLofo from '../../svg/discord_logo.svg';
import modalDiscord from '../../svg/discord-modal.svg';
import xModal from '../../svg/x-modal.svg';
import shipModal from '../../svg/ship-modal.svg';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <ul className={css.headerList}>
        <li><img className={css.logo} src={logo} alt="logo" /></li>
        <li>
          <div className={css.textList}>
            <p className={css.text}>diD yOu seE iT ?</p>
            <h1>YACHT APES</h1>
            <p className={css.text}>Apes aRe eveRywhere</p>
          </div>
          <img className={css.photo} src="https://s3-alpha-sig.figma.com/img/e878/96ec/ecc8928dd98e38ca2991c1f90127dd7c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ku7oLN6GgCaHqqCAkzX8WWJRcYiPKrrDtseCfyBX3kdq~eJKGuB0qljtUHAhPcRJbWyEVUjU5~-A-Oyw--FJnDxYhTOrUiMpsC39ivAKxIc5GwVQZWctA1wB7-TovF9sB5xxe7vYU70ifLwtmcg8eauEjvOTUrMwp1FqnpJkJTZNfq0U6kCqOoFzDlqH2fhLVhUzu3CcWKxuU--CUND1gqUAFK4jK0p564rRt80rwcB7Hl63r4q49sGKXG8-WdTgj35CjMZYRG9~mJ973EuSEVx-slESZ7T6xGuGUinyUsywT0-lEQXC~qL2J~NY9mJpN274dZMcLcTkYCEGTM58tA__" alt="ape" /><br />
          <div className={css.buttonText}>
            <button className={css.headerButton}><p>Meet Apes</p></button>
            <p className={css.apeDescription}>Yacht Ape is a collection of <br /> unique digital apes that you <br /> can own in NFT format</p>
          </div>
        </li>
        <li>
          <ul className={css.nav}>
            <li>
              <div className={css.tablMenu}>
                <button onClick={toggleModal} className={css.menuSchema}>{isModalOpen ? 'CLOSE' : 'OPEN'}</button>
                {isModalOpen && (

                  <ul className={css.modalNavTabl}>
                    <li>ABOUT</li>
                    <li>MIND-MAP</li>
                    <li>FAQ</li>
                    <li>ARTS</li>
                    <li>MINT</li>
                  </ul>

                )}
              </div>
            </li>
            <li>
              <div className={css.menuSchema}><img src={discordLofo} alt="disLogo" /></div>
            </li>
            <li>
              <div className={css.menuSchema}><img src={logoShip} alt="shipLogo" /></div>
            </li>
            <li>
              <div className={css.menuSchema}><img className={css.xlogo} src={xLogo} alt="logoX" /></div>
            </li>
          </ul>
        </li>
      </ul>
      {isModalOpen && (
        <div className={css.modal}>
          <img className={css.modalLogo} src={modalLogo} alt="logo" />
          <ul className={css.modalNav}>
            <li>ABOUT</li>
            <li>MIND-MAP</li>
            <li>FAQ</li>
            <li>ARTS</li>
            <li>MINT</li>
            <li><p className={css.revised}>© Yacht ape 2024 all rights <br /> reserved</p></li>
          </ul>
          <ul className={css.navNav}>
            <li><button onClick={toggleModal} className={css.menuSchemsModal}>Close</button></li>
            <li><div className={css.menuSchemsModal}><img src={modalDiscord} alt="disLogo" /></div></li>
            <li><div className={css.menuSchemsModal}><img src={shipModal} alt="shipLogo" /></div></li>
            <li><div className={css.menuSchemsModal}><img className={css.xlogo} src={xModal} alt="logoX" /></div></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;