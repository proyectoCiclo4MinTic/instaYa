import "./OrderDestination.css";

function OrderDestination(props) {
  const address = props.address;
  const city = props.city;
  return (
    <div className="order-item__destination">
      <div className="order-item__address">{address}</div>
      <div className="order-item__city">{city}</div>
    </div>
  );
}
export default OrderDestination;
