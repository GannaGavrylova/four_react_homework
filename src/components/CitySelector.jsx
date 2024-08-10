// import React from "react";

// import CityCard from "./CityCard";

// function CitySelector({ handleCity }) {
//   const cityCardObject = [
//     {
//       name: "Berlin",
//       imageUrl:
//         "https://www.urlaubstracker.de/wp-content/uploads/2016/11/Berlin-Spree-601x400.jpg",
//       description: "The capital of Germany",
//       interestingFact: "Berlin is a city with an ancient history",
//     },
//     {
//       name: "Hamburg",
//       imageUrl:
//         "https://www.fotowelt-hamburg.de/images/neue-hamburg-bilder-leinwand-acrylglas-poster-2023.jpg",
//       description:
//         "Hamburg is the second largest city in Germany (after Berlin)",
//       interestingFact:
//         "The port of Hamburg is almost as big as the whole of Copenhagen",
//     },
//     {
//       name: "Bremen",
//       imageUrl:
//         "https://medien.bremen.de/media/944/472/btz-7012-bremen-unesco-wfb-melanka-helms-9944.jpg",
//       description: "The city of the bremen musicians",
//       interestingFact:
//         "The 600km long German Fairytale Road, which starts in the birthplace of the Brothers Grimm in Hanau< ends in Bremen.",
//     },
//     {
//       name: "Braunschweig",
//       imageUrl:
//         "https://www.ndr.de/ratgeber/reise/braunschweiger_land/braunschweig8382_v-contentgross.jpg",
//       description:
//         "Braunschweig is a wondeful and picturesque city with a rich medieval flavour.",
//       interestingFact: "The city is history dates back to 861.",
//     },
//   ];

//   function handleSelectChange(event) {
//     const selectedCityName = event.target.value;
//     const selectedCity = cityCardObject.find(
//       (city) => city.name === selectedCityName
//     );
//     handleCity(selectedCity); //передаем выбранный город в родительский компонент
//   }
//   return (
//     <div>
//       <form>
//         <select onChange={handleSelectChange} name="city">
//           <option value=""> Select a city</option>
//           {cityCardObject.map((city) => {
//             return (
//               <option key={city.name} value={city.name}>
//                 {city.name}
//               </option>
//             );
//           })}
//         </select>
//       </form>
//     </div>
//   );
// }

// export default CitySelector;

// Создание компонента CitySelector: Разработайте компонент для выбора города. Этот компонент должен включать в себя форму с выпадающим списком, который позволяет выбирать из предопределенного списка городов.

// Подготовка данных: В компоненте CityCelector определите массив объектов в JavaScript, содержащий информацию о каждом городе, включая название, описание, изображение и факты.
