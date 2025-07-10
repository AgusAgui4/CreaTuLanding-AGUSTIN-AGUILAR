import "./CartWidget.css";

function CartWidget({ cantidad }) {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {cantidad > 0 && <span className="cart-quantity">{cantidad}</span>}
    </div>
  );
}

export default CartWidget;
