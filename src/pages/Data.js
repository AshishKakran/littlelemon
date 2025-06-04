import review1image from '../assets/nina.jpg';
import review2image from '../assets/alex.jpeg';
import review3image from '../assets/queen.jpeg';
import review4image from '../assets/yuri.jpeg';

const review1 = {
    id: 1,
    text: 'Amazing food and great service!',
    rating: 5,
    author: 'Nina',
    image: review1image
}

const review2 = {
    id: 2,
    text: 'Best dining experience I\'ve ever had.',
    rating: 4,
    author: 'Alex',
    image: review2image
}
const review3 = {
    id: 3,
    text: 'I love the atmosphere and the food is delicious!',
    rating: 5,
    author: 'Queen',
    image: review3image
}
const review4 = {
    id: 4,
    text: 'The staff is friendly and the food is always fresh.',
    rating: 5,
    author: 'Yuri',
    image:  review4image
}   

const reviews = [review1, review2, review3, review4];

export const getReviews = () => {
    return reviews;
}





