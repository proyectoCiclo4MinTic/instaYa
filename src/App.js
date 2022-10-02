// import logo from "./logo.svg";
import { logo, password, user } from "./index.js";

import "./App.css";
import LoginItem from "./components/Login/LoginItem";
import RegisterUserItem from "./components/Register/RegisterUserItem";
import OrderItem from "./components/Orders/OrderItem";
import Orders from "./components/Orders/Orders";
import OrderUpdate from "./components/OrderUpdate/OrderUpdate.js";
import OrderRegister from "./components/OrderRegister/OrderRegister.js";

// React Bootstrap
// import { Form, Button, Row, Col } from "react-bootstrap";
function App() {
  const orders = [
    {
      id: "1",
      date: new Date("2022,02 ,16"),
      city: "Barranquilla",
      address: "cra 01 no 23-45",
      status: "Cumplido",
    },
    {
      id: "2",
      date: new Date("2022,05,08"),
      city: "Cali",
      address: "cra 01 no 23-45",
      status: "Cumplido",
    },
    {
      id: "3",
      date: new Date("2022,07,16"),
      city: "Bogotá",
      address: "cra 01 no 23-45",
      status: "Cancelado",
    },
    {
      id: "4",
      date: new Date("2022,08,24"),
      city: "Cartagena",
      address: "cra 01 no 23-45",
      status: "Guardado",
    },
    {
      id: "5",
      date: new Date("2022,08,27"),
      city: "Bucaramanga",
      address: "cra 01 no 23-45",
      status: "Guardado",
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <LoginItem></LoginItem>
      <RegisterUserItem></RegisterUserItem>
      <Orders items={orders}></Orders>
      <OrderUpdate></OrderUpdate>
      <OrderRegister></OrderRegister>
    </div>
  );
}

export default App;
