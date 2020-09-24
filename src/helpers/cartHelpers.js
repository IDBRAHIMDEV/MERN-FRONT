import { uniqBy } from 'lodash'

export const addToCart = (item) => {
    
    let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    currentCart = [{...item, count: 1}, ...currentCart];

    localStorage.setItem('cart', JSON.stringify(uniqBy(currentCart, '_id')));
}

export const totalItem = () => {
     
    let currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    return currentCart.length;
}