import CityCard from "./components/cityCard/index";
import CitySelector from "./components/citySelector/index";
import { useState } from "react";

function App() {
  const [selectedCity, setSelectsdCity] = useState(null);

  function handleCity(city) {
    setSelectsdCity(city);
  }
  return (
    <div className="App">
      <CitySelector handleCity={handleCity} />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default App;

// Управление состоянием: В компоненте App спользуйте хук состояния useState, чтобы отправлять данные о выбранном городе в отображаемую карточку.

// Динамическое отображение: Напишите логику, которая позволит при выборе города в CitySelector отображать соответствующую CityCard.
