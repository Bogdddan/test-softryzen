import React, { useState } from 'react';
import css from './faq.module.css';

const FAQ = () => {
  const faqData = [
    { question: "WHAT IS AN NFT COLLECTION?", answer: "AN NFT COLLECTION IS A SET OF UNIQUE DIGITAL ITEMS, SUCH AS ARTWORKS OR COLLECTIBLES, THAT ARE TOKENIZED AND SOLD AS NON-FUNGIBLE TOKENS (NFTs) ON A BLOCKCHAIN PLATFORM." },
    { question: "HOW DO I PURCHASE NFTS FROM A COLLECTION?", answer: "LAUNCH YOUR OWN TOKEN, THE PROCEEDS OF WHICH WILL GO TO A GLOBAL FUND TO LAUNCH YACHT CLUB AND PROMOTE IT" },
    { question: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?', answer: "YES! YOU CAN SELL OR TRADE NFTs FROM A COLLECTION ON MOST NFT MARKETPLACES.  JUST DOUBLE-CHECK THE PLATFORM'S RULES FOR ANY COLLECTION RESTRICTIONS." },
    { question: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?', answer: "OWN TOKEN, NOT ALWAYS FULL RIGHTS. CHECK NFT TERMS." },
  ];

  const [openedQuestion, setOpenedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openedQuestion === index) {
      setOpenedQuestion(null);
    } else {
      setOpenedQuestion(index);
    }
  };

  return (
    <div className={css.faqContainer}>
      <h2>FAQ</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={css.dsd} onClick={() => toggleQuestion(index)}>
          <div>
            <div className={css.questionNumber}>[{index + 1}]  </div>
            <div className={css.questionContainer}>
              <div className={css.faqQuestion}>{faq.question}</div>
              <div> {openedQuestion === index && <div className={css.faqAnswer}>{faq.answer}</div>}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
