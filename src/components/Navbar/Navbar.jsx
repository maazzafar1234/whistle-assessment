import "./Navbar.css";
import { FiPhone } from "react-icons/fi";

function Navbar() {
  const handleCall = () => {
    window.location.href = "tel:+918849978818";
  };
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src="/images/image 1.png" alt="Whistle" className="logo" />

        <button className="call-btn" onClick={handleCall}>
          <FiPhone />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
