// import css from 'index.css';
import About from './about/About';
import Arts from './arts/Arts';
// import Burger from './burger/Burger';
import ContactUs from './contactUs/ContactUs';
import FAQ from './faq/Faq';
import Footer from './footer/Footer';
import Header from './header/Header';
// import Hero from './hero/Hero';
import MindMap from './mindMap/MindMap';
import css from './App.module.css';


export const App = () => {
  return (
    <div className={css.container}>
      <Header/>
      <About/>
      <MindMap/>
      <Arts/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};
