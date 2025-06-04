import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><img src={logo} alt="logo"/></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}
export default Nav;