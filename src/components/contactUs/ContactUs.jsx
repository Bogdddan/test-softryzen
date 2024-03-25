import React from 'react';
import css from './contactUs.module.css';
// import discordSvg from '../../svg/discord-logo-contactUs.svg';
// import metamaskIcon from '../../svg/metamask.svg';

function ContactUs() {
  return (
    <>
      <h2>Are you in?</h2>
      <ul className={css.contactUsList}>
        <li><div>x</div></li>
        <li><p className={css.contactUsListP}>JOIN THE YACHT APE COMMUNITY TO BE ONE OF THE FIRST TO RECIVE OUR LIMITED EDITION NFT</p></li>
        <li>
          <form className={css.contactUsForm}>
            <input type="text" />
            <input type="text" />
            <button className={css.contactUsFormButton}><p>Mint</p></button>
          </form>
        </li>
      </ul>
    </>
  );
};

export default ContactUs;
