import './CartWidget.css';

function CartWidget({cantidad}) {
 return (
    <button className="cart-widget">
      🛒 ({cantidad})
    </button>
  );
};
export default CartWidget;
