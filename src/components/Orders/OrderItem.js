import Card from "../UI/Card";
import OrderDate from "./OrderDate";
import OrderDestination from "./OrderDestination";
import OrderStatus from "./OrderStatus";
import "./OrderItem.css";
import { Button } from "react-bootstrap";

const OrderItem = (props) => {
  return (
    // <Card className="order-item">
    <div className="order-item">
      <Button className="order-item__id">{props.id}</Button>
      <OrderDate date={props.date} />
      <OrderDestination
        recipientAddress={props.recipientAddress}
        recipientCity={props.recipientCity}
      />
      <OrderStatus status={props.status} />
    </div>
    // </Card>
  );
};

export default OrderItem;
