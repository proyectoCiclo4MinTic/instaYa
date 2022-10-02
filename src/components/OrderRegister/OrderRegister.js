import "./OrderRegister.css";
import Card from "../UI/Card.js";
import OrderRegisterForm from "./OrderRegisterForm";

const OrderRegister = () => {
  return (
    <div className="order-register">
      <h2>Registro de Órden</h2>
      <OrderRegisterForm></OrderRegisterForm>
    </div>
  );
};

export default OrderRegister;
