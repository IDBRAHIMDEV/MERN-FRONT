
 import React, { useState, useEffect } from 'react'
 import Layout from './../../core/Layout'

 import { API_URL } from './../../config'

 import { isAuthenticated } from './../../auth/helpers'

 import toastr from 'toastr';
import "toastr/build/toastr.css";



 function AddProduct() {

    const { user, token } = isAuthenticated();

     const [product, setProduct] = useState({
         photo: '',
         name: '',
         description: '',
         quantity: 0,
         price: 0,
         category: 0,
         shipping: false
     })

     const [formData, setFormData] = useState(new FormData()); 

     const [categories, setCategories] = useState([]); 

     
     useEffect(() => getCategories(), [])


     const getCategories = () => {

        fetch(`${API_URL}/category`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => setCategories(res.categories))
        .catch(err => console.error(err))

     }

     
     const handleChange = (e) => {

        const value = e.target.id === 'photo' ? e.target.files[0] : e.target.value;

        formData.set(e.target.id, value)

        setProduct({...product, [e.target.id]: value})
        
     }


     const submitProduct = (e) => {
        
        e.preventDefault();

        fetch(`${API_URL}/product/create/${user._id}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                toastr.warning(res.error, 'Please Check form !', {
                    positionClass: "toast-bottom-left",
                })
            }
            else {
                toastr.success(`Product ${product.name} created`, 'new Product', {
                    positionClass: "toast-bottom-left",
                })

                setProduct({
                    photo: '',
                    name: '',
                    description: '',
                    quantity: 0,
                    price: 0,
                    shipping: false,
                    category: 0
                })

                setFormData(new FormData())

            }

        })
        .catch(err =>  toastr.error(err, 'Server error !', {
                    positionClass: "toast-bottom-left",
                }))
  
     }

     return (
         <div>
             <Layout 
               title="Product" 
               description="New product" 
               className="container"
            >
               
               <div className="row">
                   <div className="col-md-6 mx-auto">
                       <form onSubmit={submitProduct}>

                        <div className="form-group">
                            <label htmlFor="photo">Photo product</label>
                            <input onChange={handleChange} id="photo" type="file" className="form-control-file" name="photo"  />
                        </div>

                            <div className="form-group">
                                <label htmlFor="" className="text-muted">name</label>
                                <input value={product.name} onChange={handleChange} id="name" required autoFocus placeholder="Add name of Product" type="text" className="form-control"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">description</label>
                                <textarea value={product.description} onChange={handleChange} id="description" name="description" rows="2" className="form-control"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantity">quantity</label>
                                <input value={product.quantity} onChange={handleChange} type="number" id="quantity" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">price</label>
                                <input value={product.price} onChange={handleChange} type="number" id="price" className="form-control"/>
                            </div>

                            <div className="form-group">
                            <label htmlFor="category">category</label>
                                <select value={product.category} onChange={handleChange} name="category" id="category" className="form-control">
                                    <option value="0">Select a category</option>
                                    { categories && categories.map((category, i) => (
                                        <option key={i} value={category._id}>{category.name}</option>
                                    )) }
                                </select>
                            </div>

                            <div className="form-group">
                            <label htmlFor="shipping">shipping</label>
                                <select value={product.shipping} onChange={handleChange} name="shipping" id="shipping" className="form-control">
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>

                            { JSON.stringify(product) }

                           <button className="my-5 btn-block btn btn-outline-primary">New Product</button>
                       </form>

                   </div>
               </div>
               
            </Layout>
         </div>
     )
 }
 
 export default AddProduct
 