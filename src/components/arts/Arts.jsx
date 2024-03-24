// import React, { useState } from "react";
// import './arts.css';


// function Arts() {

//   const imgs = [
//     { id: 0, value: 'https://s3-alpha-sig.figma.com/img/da93/59aa/ddd4b912a81bc26d56afd25dc581b6c0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYKodCPOSuulXRu1sGkf9kG~yZtvtxo4kGgilJgnTMepTyCUU8Zum89tlrTGNw2kjuplxLPFwMQhCosHLlQp0drzO9iNXZ7anXZgIxBKen91U9zzS0CuSQQe0iHX2xvFl6NpFIuzrukiZQHtuw6oCZYXfooLYdTPtKRUEbCQ5POLWr6LFVRAz9IEV2oxYFCftb2OXY1Is9SjZJsADDXl7fNPEZaKbWugLqaDpJbbHuZ6SzloN2mEnOI6uL5c9~6d1no-O9nrib8yBE-M6hJ0c1Y7KtLSePVZDrMhuKU0IAoZdzjTWlBrFPhXUWwchICrdm02Fc9rLtqabDwo7-sdLA__' },
//     { id: 1, value: 'https://s3-alpha-sig.figma.com/img/903d/e207/ec4e36e5851de9224ab54bbc8b997c82?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CxOLcjflCQW8cGGVXct834R26h71ykSGwk~i4ptvxunQZhd65xBYoWNLYLlZFFlTKbXEX9DuhEof1hzdoEi3Y1J8kx5Px4LE0lSXsNcLTMovA6k1aR-4BEfa~jiv7Up15PGjuO4kfHyFZ6dsnIGi99Dk3vOSGAnC-wmn-0YKm0EUNgGSYpwbEwynNZAPapX3CyDYY3XlPEdFF5AeBkugN8eq~a5AH0ewX4hWqEMi8Qp2jCLoEzzLqorlOE0BFN88GEGYi8ysdEInA585mKd4iwsUq4Wj3xfpR~Q4OXf~HTbo91cRCweDPRVXu9RiH3m6SiCq6k3ru3bT34i-NXNlgw__' },
//     { id: 2, value: 'https://s3-alpha-sig.figma.com/img/46db/6fa9/8168e501d849c8a3aa11ee4383beca6f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ud3YmekJOJ9M5RRoMg6fUskayhZFQB5BRW8A-tTVlLwSYT1Hjwg1MOMRL37uK9~vxqkwzHasHQkCCPw1oL5V2Kxq3f7tGR5ecu~23FQayQcJ4elSsCfkDDIQOvpIF-HeZyPhjLz~~Vc4oFZ5hsMPa4N~Qm4n5CKgZlf8TbohzjM95P9fzYbRrSB3xM3OHl5mBguTE5vGdnAASWSYVYPjbL2A3pEOCltxSr2mmjgMCK2bwzKWm08le99f3HUvxr3Bbdg344JY3geXRGc4I~PmtIjtYe6UxduGA3x5n1I0VRsNCPORc9hzt8So1iXSUfLy~rRIHpFqrmr9huEJUIj1mQ__' },
//     { id: 3, value: 'https://s3-alpha-sig.figma.com/img/fbb0/489b/2846677fc7105581e09d4cab421e4705?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gmq~4AoY2D5tHVqCIn~-IGWtYUArCSH9ajALwTFqmHz4YLQmFATR~ccKwx36rO0oJJqDzMQDs5ebE-xALgZJhXA7rlBKLm0fMGpo2HakfytnnqTn1OSRmAnZOGcf0ADFRXoGemMMsdiYYJIQk7EWixHYqCDBSjXiIZC-QaKHYZsUqrXinXiKI5gA0N3yCSbniD8kDfBEktzCi-H3Hh~HqKM8bkQe~P86f1EHZgHaNpG-SFZ1e-iCBf5gobBdL8NunVWkWRRHP4ZmVj7fsb9jYLXIyQczx98iO1FgDaGcw-rrmlpthOj51KsAaNT7yNi2SbAVUlDHkw1p6ee4XvkfJw__' },
//     { id: 4, value: 'https://s3-alpha-sig.figma.com/img/2a2d/3fce/ace9af4fd0ecbc38c69db961bc51794d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPU-8tB6gWUELLaozZDdtDoeA7Rs0ccbe9jLZTXYq4FL71ALwYTiIGuvhA1jp3gonDBWCFZMJJGKu1B77socq9utkZuwobUTbnbmLDb5M28~PDvNuYAILso-FTPEFyDMmBDbx8gxIN8cQ7PjSX3yGKBr3hvAFwAFp~ckl1pzZTaoe89tCHG2acDND49aW6JE3Q2iAGoIKG8pbxtGD4w47MJxmAfItyt78RV294VPCXZVKDSUQEfJNeixqOFY4QVSblhhzKm3fe8wjwFtg9uPsb6v7iwjCjSHR-CHiOwWIltARcUBNGQXdU4YcK-MOEpPvp8MLDB1Fg-Q2X6f~h4qcg__' },
//   ]
//   const [wordData, setWordData] = useState(imgs[0]);
//   const [val, setVal] = useState(0);
//   const handleClick = (index) => {
//     const wordSlider = imgs[index];
//     setWordData(wordSlider);
//   }

//   const handleNext = () => {
//     let index = val < imgs.length - 1 ? val + 1 : val;
//     setVal(index);
//     const wordSlider = imgs[index];
//     setWordData(wordSlider);
//   };

//   const handlePrevious = () => {
//     let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
//     setVal(index);
//     const wordSlider = imgs[index];
//     setWordData(wordSlider);
//   };

//   return (
//     <div className="main">
//       <img src={wordData.value} alt="pherh" height='200' width='200' />
//       <div>
//         <button className="btns" onClick={handlePrevious}>Previous</button>
//         <button className="btns" onClick={handleNext}>Next</button>
//       </div>
//       <div className="flex_row">
//         <div>arts</div>
//         {imgs.map((data, i) =>
//           <div key={i} className="thumbnail">
//             {/* <img className={wordData.id === i ? 'clicked' : ''} src={data.value} onClick={() => handleClick(i)} alt="qwwq" height='70px' width='120px' /> */}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// };

// export default Arts;

  import SwiperCore from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';

  const MySwiper = () => {
    const imgs = [
          { id: 0, value: 'https://s3-alpha-sig.figma.com/img/da93/59aa/ddd4b912a81bc26d56afd25dc581b6c0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYKodCPOSuulXRu1sGkf9kG~yZtvtxo4kGgilJgnTMepTyCUU8Zum89tlrTGNw2kjuplxLPFwMQhCosHLlQp0drzO9iNXZ7anXZgIxBKen91U9zzS0CuSQQe0iHX2xvFl6NpFIuzrukiZQHtuw6oCZYXfooLYdTPtKRUEbCQ5POLWr6LFVRAz9IEV2oxYFCftb2OXY1Is9SjZJsADDXl7fNPEZaKbWugLqaDpJbbHuZ6SzloN2mEnOI6uL5c9~6d1no-O9nrib8yBE-M6hJ0c1Y7KtLSePVZDrMhuKU0IAoZdzjTWlBrFPhXUWwchICrdm02Fc9rLtqabDwo7-sdLA__' },
          { id: 1, value: 'https://s3-alpha-sig.figma.com/img/903d/e207/ec4e36e5851de9224ab54bbc8b997c82?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CxOLcjflCQW8cGGVXct834R26h71ykSGwk~i4ptvxunQZhd65xBYoWNLYLlZFFlTKbXEX9DuhEof1hzdoEi3Y1J8kx5Px4LE0lSXsNcLTMovA6k1aR-4BEfa~jiv7Up15PGjuO4kfHyFZ6dsnIGi99Dk3vOSGAnC-wmn-0YKm0EUNgGSYpwbEwynNZAPapX3CyDYY3XlPEdFF5AeBkugN8eq~a5AH0ewX4hWqEMi8Qp2jCLoEzzLqorlOE0BFN88GEGYi8ysdEInA585mKd4iwsUq4Wj3xfpR~Q4OXf~HTbo91cRCweDPRVXu9RiH3m6SiCq6k3ru3bT34i-NXNlgw__' },
          { id: 2, value: 'https://s3-alpha-sig.figma.com/img/46db/6fa9/8168e501d849c8a3aa11ee4383beca6f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ud3YmekJOJ9M5RRoMg6fUskayhZFQB5BRW8A-tTVlLwSYT1Hjwg1MOMRL37uK9~vxqkwzHasHQkCCPw1oL5V2Kxq3f7tGR5ecu~23FQayQcJ4elSsCfkDDIQOvpIF-HeZyPhjLz~~Vc4oFZ5hsMPa4N~Qm4n5CKgZlf8TbohzjM95P9fzYbRrSB3xM3OHl5mBguTE5vGdnAASWSYVYPjbL2A3pEOCltxSr2mmjgMCK2bwzKWm08le99f3HUvxr3Bbdg344JY3geXRGc4I~PmtIjtYe6UxduGA3x5n1I0VRsNCPORc9hzt8So1iXSUfLy~rRIHpFqrmr9huEJUIj1mQ__' },
          { id: 3, value: 'https://s3-alpha-sig.figma.com/img/fbb0/489b/2846677fc7105581e09d4cab421e4705?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gmq~4AoY2D5tHVqCIn~-IGWtYUArCSH9ajALwTFqmHz4YLQmFATR~ccKwx36rO0oJJqDzMQDs5ebE-xALgZJhXA7rlBKLm0fMGpo2HakfytnnqTn1OSRmAnZOGcf0ADFRXoGemMMsdiYYJIQk7EWixHYqCDBSjXiIZC-QaKHYZsUqrXinXiKI5gA0N3yCSbniD8kDfBEktzCi-H3Hh~HqKM8bkQe~P86f1EHZgHaNpG-SFZ1e-iCBf5gobBdL8NunVWkWRRHP4ZmVj7fsb9jYLXIyQczx98iO1FgDaGcw-rrmlpthOj51KsAaNT7yNi2SbAVUlDHkw1p6ee4XvkfJw__' },
          { id: 4, value: 'https://s3-alpha-sig.figma.com/img/2a2d/3fce/ace9af4fd0ecbc38c69db961bc51794d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPU-8tB6gWUELLaozZDdtDoeA7Rs0ccbe9jLZTXYq4FL71ALwYTiIGuvhA1jp3gonDBWCFZMJJGKu1B77socq9utkZuwobUTbnbmLDb5M28~PDvNuYAILso-FTPEFyDMmBDbx8gxIN8cQ7PjSX3yGKBr3hvAFwAFp~ckl1pzZTaoe89tCHG2acDND49aW6JE3Q2iAGoIKG8pbxtGD4w47MJxmAfItyt78RV294VPCXZVKDSUQEfJNeixqOFY4QVSblhhzKm3fe8wjwFtg9uPsb6v7iwjCjSHR-CHiOwWIltARcUBNGQXdU4YcK-MOEpPvp8MLDB1Fg-Q2X6f~h4qcg__' },
        ]

    SwiperCore.use();

    return (
      <Swiper
        
        
      >
        {imgs.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.value} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default MySwiper;