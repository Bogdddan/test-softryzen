import React, { useState } from 'react';
import css from './mindMap.module.css';

function MindMap() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    <div className={css.card}>
      <p>All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own</p>
      <p>Yape Drop</p>
    </div>,
    <div className={css.card}>
      <p>Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game</p>
      <p>New Collection</p>
    </div>,
    <div className={css.card}>
      <p>Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it</p>
      <p>Token</p>
    </div>,
    <div className={css.card}>
      <button>Learn morein mind map</button>
    </div>,
  ];

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className={css.mindMapCont}>
      <h2>MIND MAP</h2>
      <ul className={css.mindMapList}>
        {cards.map((card, index) => (
          <li key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
            <div className={css.mindMapItem}> {card} </div>
          </li>
        ))}
      </ul>
      <span className={css.mindMapBtns}>
        <button className={css.mindMapPrevBtn} disabled={currentSlide === 0} onClick={handlePrevClick}>
          <p>Prev</p>
        </button>
        <button className={css.mindMapNextBtn} disabled={currentSlide === cards.length - 1} onClick={handleNextClick}>
          <p>Next</p>
        </button>
      </span>
    </div>
  );
}

export default MindMap;
