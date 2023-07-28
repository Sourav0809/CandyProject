import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2>Candy Shop</h2>
      <div className="cart-icons-container">
        <h2>Cart</h2>
        <h2>0</h2>
      </div>
    </header>
  );
};

export default Header;
