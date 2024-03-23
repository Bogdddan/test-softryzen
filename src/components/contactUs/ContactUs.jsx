import css from './contactUs.module.css';

function ContactUs() {
  return (
    <>
      <h2>Are you in?</h2>
      <ul className={css.contactUsList}>
        <li><div>x</div></li>
        <li><p>JOIN THE YACHT APE COMMUNITY TO BE ONE OF THE FIRST TO RECIVE OUR LIMITED EDITION NFT</p></li>
        <li><form className={css.contactUsForm}>
          <input type="text" placeholder='@USERNAME' />
          <input type="text" placeholder='WALLET ADDRESS' />
          <button className={css.contactUsFormButton}><p>Mint</p></button>
        </form></li>
      </ul>
    </>
  )
};

export default ContactUs;