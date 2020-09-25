  import { uniqBy } from 'lodash'
  

  export const addToCart = (item) => {
    
    let items = JSON.parse(localStorage.getItem('cart')) || [];

      items = uniqBy([{...item, count: 1}, ...items], '_id');

      localStorage.setItem('cart', JSON.stringify(items));

      return {

        type: 'ADDITEM',
        payload: items
          
      }
  }

  export const incProductCount = (item) => {

        let items = JSON.parse(localStorage.getItem('cart'));

        items = items.map(product => product._id === item._id ? {...item, count: product.count + 1} : product)

        localStorage.setItem('cart', JSON.stringify(items));

        return {
            type: 'INCPRODUCTCOUNT',
            payload: items
        }

  }


  export const decProductCount = (item) => {

     if(item.count > 1) {

         let items = JSON.parse(localStorage.getItem('cart'));
    
         items = items.map(product => product._id === item._id ? {...item, count: product.count - 1} : product)
    
         localStorage.setItem('cart', JSON.stringify(items));
    
         return {
             type: 'DECPRODUCTCOUNT',
             payload: items
         }
     }

     return {type: null}
      
}


export const removeProduct = (id) => {

    let items = JSON.parse(localStorage.getItem('cart'));
    
    items = items.filter(product => product._id !== id)

    localStorage.setItem('cart', JSON.stringify(items));

    return {
        type: 'REMOVE_PRODUCT',
        payload: items
    }

}

