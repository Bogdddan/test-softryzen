import React, { useState } from "react";
import css from './arts.module.css';

function Arts() {
  const [currentSlideApe, setCurrentSlideApe] = useState(0);
  const cards = [
     'https://s3-alpha-sig.figma.com/img/da93/59aa/ddd4b912a81bc26d56afd25dc581b6c0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYKodCPOSuulXRu1sGkf9kG~yZtvtxo4kGgilJgnTMepTyCUU8Zum89tlrTGNw2kjuplxLPFwMQhCosHLlQp0drzO9iNXZ7anXZgIxBKen91U9zzS0CuSQQe0iHX2xvFl6NpFIuzrukiZQHtuw6oCZYXfooLYdTPtKRUEbCQ5POLWr6LFVRAz9IEV2oxYFCftb2OXY1Is9SjZJsADDXl7fNPEZaKbWugLqaDpJbbHuZ6SzloN2mEnOI6uL5c9~6d1no-O9nrib8yBE-M6hJ0c1Y7KtLSePVZDrMhuKU0IAoZdzjTWlBrFPhXUWwchICrdm02Fc9rLtqabDwo7-sdLA__' ,
     'https://s3-alpha-sig.figma.com/img/903d/e207/ec4e36e5851de9224ab54bbc8b997c82?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CxOLcjflCQW8cGGVXct834R26h71ykSGwk~i4ptvxunQZhd65xBYoWNLYLlZFFlTKbXEX9DuhEof1hzdoEi3Y1J8kx5Px4LE0lSXsNcLTMovA6k1aR-4BEfa~jiv7Up15PGjuO4kfHyFZ6dsnIGi99Dk3vOSGAnC-wmn-0YKm0EUNgGSYpwbEwynNZAPapX3CyDYY3XlPEdFF5AeBkugN8eq~a5AH0ewX4hWqEMi8Qp2jCLoEzzLqorlOE0BFN88GEGYi8ysdEInA585mKd4iwsUq4Wj3xfpR~Q4OXf~HTbo91cRCweDPRVXu9RiH3m6SiCq6k3ru3bT34i-NXNlgw__' ,
     'https://s3-alpha-sig.figma.com/img/46db/6fa9/8168e501d849c8a3aa11ee4383beca6f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ud3YmekJOJ9M5RRoMg6fUskayhZFQB5BRW8A-tTVlLwSYT1Hjwg1MOMRL37uK9~vxqkwzHasHQkCCPw1oL5V2Kxq3f7tGR5ecu~23FQayQcJ4elSsCfkDDIQOvpIF-HeZyPhjLz~~Vc4oFZ5hsMPa4N~Qm4n5CKgZlf8TbohzjM95P9fzYbRrSB3xM3OHl5mBguTE5vGdnAASWSYVYPjbL2A3pEOCltxSr2mmjgMCK2bwzKWm08le99f3HUvxr3Bbdg344JY3geXRGc4I~PmtIjtYe6UxduGA3x5n1I0VRsNCPORc9hzt8So1iXSUfLy~rRIHpFqrmr9huEJUIj1mQ__' ,
     'https://s3-alpha-sig.figma.com/img/fbb0/489b/2846677fc7105581e09d4cab421e4705?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gmq~4AoY2D5tHVqCIn~-IGWtYUArCSH9ajALwTFqmHz4YLQmFATR~ccKwx36rO0oJJqDzMQDs5ebE-xALgZJhXA7rlBKLm0fMGpo2HakfytnnqTn1OSRmAnZOGcf0ADFRXoGemMMsdiYYJIQk7EWixHYqCDBSjXiIZC-QaKHYZsUqrXinXiKI5gA0N3yCSbniD8kDfBEktzCi-H3Hh~HqKM8bkQe~P86f1EHZgHaNpG-SFZ1e-iCBf5gobBdL8NunVWkWRRHP4ZmVj7fsb9jYLXIyQczx98iO1FgDaGcw-rrmlpthOj51KsAaNT7yNi2SbAVUlDHkw1p6ee4XvkfJw__' ,
     'https://s3-alpha-sig.figma.com/img/2a2d/3fce/ace9af4fd0ecbc38c69db961bc51794d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPU-8tB6gWUELLaozZDdtDoeA7Rs0ccbe9jLZTXYq4FL71ALwYTiIGuvhA1jp3gonDBWCFZMJJGKu1B77socq9utkZuwobUTbnbmLDb5M28~PDvNuYAILso-FTPEFyDMmBDbx8gxIN8cQ7PjSX3yGKBr3hvAFwAFp~ckl1pzZTaoe89tCHG2acDND49aW6JE3Q2iAGoIKG8pbxtGD4w47MJxmAfItyt78RV294VPCXZVKDSUQEfJNeixqOFY4QVSblhhzKm3fe8wjwFtg9uPsb6v7iwjCjSHR-CHiOwWIltARcUBNGQXdU4YcK-MOEpPvp8MLDB1Fg-Q2X6f~h4qcg__' ,
  ]

  const handlePrevClick = () => {
    setCurrentSlideApe(currentSlideApe - 1);
  };

  const handleNextClick = () => {
    setCurrentSlideApe(currentSlideApe + 1);
  };

  return (
    <>
      <div>
        <h2>COLLECTIONS</h2>
        {/* <ul>
          {cards.map((card, index) => (
            <li key={index} style={{ display: index === currentSlideApe ? 'block' : 'none' }}>
              <div> <img className={css.artsPhoto} src={card} alt="" /> </div>
            </li>
          ))}
        </ul> */}
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <img className={css.artsPhoto} src={card} alt="kjdnk" />
            </li>
          ))}
        </ul>
        <span>
          <button disabled={currentSlideApe === 0} onClick={handlePrevClick}>
            <p>Prev</p>
          </button>
          <button disabled={currentSlideApe === cards.length - 1} onClick={handleNextClick}>
            <p>Next</p>
          </button>
        </span>
      </div>
    </>
  );
};

export default Arts;