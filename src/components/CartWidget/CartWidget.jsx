// components/CartWidget.jsx

function CartWidget({cantidad}) {
 return (
    <button style={{ fontSize: "1.2rem" }}>
      🛒 ({cantidad})
    </button>
  );
};
export default CartWidget;
