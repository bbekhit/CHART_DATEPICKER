import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import GlobalStyles from "./styles/GlobalStyles";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerComponent from "./components/DatePickerComponent";
import ChartComponent from "./components/charts/ChartComponent";
import ChartComponentTwo from "./components/charts/ChartComponentTwo";
import ChartComponentThree from "./components/charts/ChartComponentThree";
import ChartAll from "./components/charts/ChartAll";
import LineChart from "./components/charts/LineChart";
import BarChart from "./components/charts/BarChart";
import DoughnutChart from "./components/charts/DoughnutChart";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <DatePickerComponent />
        <ChartComponent />
        <ChartComponentTwo />
        <ChartComponentThree />
        <ChartAll />
        <LineChart />
        <BarChart />
        <DoughnutChart />
      </div>
    </Provider>
  );
}

export default App;
