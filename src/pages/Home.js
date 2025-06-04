import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import MenuItem from '../components/MenuItem';

import heroImage from '../assets/hero_image.jpg';
import dish1Image from '../assets/greek_salad.jpg';
import dish2Image from '../assets/bruchetta.svg';
import dish3Image from '../assets/lemon_dessert.jpg';

import {getReviews} from './Data';


function Home() {

    const dish1 = {
        id: 1,
        name: 'Greek Salad',
        description: 'A fresh salad with tomatoes, cucumbers, olives, and feta cheese, drizzled with olive oil.',
        price: 12.99,
        image: dish1Image,
    };
    const dish2 = {
        id: 2,
        name: 'Bruchetta',
        description: 'Grilled bread topped with a mixture of tomatoes, garlic, basil, and olive oil.',
        price: 10.99,
        image: dish2Image
    };
    const dish3 = {
        id: 3,
        name: 'Lemon Dessert',
        description: 'A refreshing lemon dessert with a hint of mint, perfect for a sweet ending.',
        price: 8.99,
        image: dish3Image
    };
    const dishes = [dish1, dish2, dish3];


    const handleReservationClick = () => {
        // Your custom logic here, e.g., analytics, alert, etc.
        console.log('Reservation button clicked!');
    };

    const renderStars = (rating) => {
      return (
        <span className="review-stars">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </span>
      );
    };

    return (
      <div className="homepage">
        <Header />
        <main>

          <section id="hero" className="hero">
           <h1> Little Lemon</h1>
           <h2> Chicago</h2>
           <p>Welcome to Little Lemon, your favorite place for delicious food in Chicago. We offer a variety of dishes made with fresh ingredients and a touch of love.</p>
           <Button link="/reservations" onClick={handleReservationClick}> Make a Reservation</Button>
           <img src={heroImage} alt="Delicious food" className="hero-image" />
          </section>


          <section id="menu" className="menu">
            <h2>Today's Specials</h2>
            <Button link="/menu">Online Menu</Button>

            <ul className="menu-list">
                {dishes.map(dish => (
                    <MenuItem
                    key={dish.id}
                    name={dish.name}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    />
                ))}
            </ul>
          </section>
          <section id="testimonials" className="testimonials">
            <h2>What Our Customers Say</h2>

            <ul className="reviews-list">
                {getReviews().map(review => (
                    <li key={review.id} className="review-item">
                      <div className="review-author">
                          <img src={review.image} alt={review.author} className="review-image" />
                            <span className="author-name">{review.author}</span>
                            {renderStars(review.rating)}
                        </div>
                        
                        <p className="review-text">{review.text}</p>
                        
                    </li>
                ))}
            </ul>
            
          </section>

        </main>
        <Footer />
      </div>
    )
}
export default Home;