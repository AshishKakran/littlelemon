import logo from '../assets/monochrome_logo.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>Contact Us:</p>
                    <p>Email: <a href="mailto:admin@littlemon.co"> admin@littlelemon
                        </a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <address>
                        Address: 123 Little Lemon St, Chicago, IL 60601
                    </address>
                </div>
                <div className="footer-socials">
                    <p>Follow us on:</p>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
       
        </footer>
    );
    }
export default Footer;
