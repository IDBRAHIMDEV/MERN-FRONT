  import { uniqBy } from 'lodash'

  export const addToCart = (item) => {

      let items = JSON.parse(localStorage.getItem('cart')) || [];

      items = uniqBy([item, ...items], '_id');

      localStorage.setItem('cart', JSON.stringify(items));

      return {

        type: 'ADDITEM',
        payload: items
          
      }

  }