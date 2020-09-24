import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Card from './Card'
import { getCategories, filterProducts } from './ApiCore'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'

const Shop = () => {

   const [categories, setCategories] = useState([])
   const [limit] = useState(6)
   const [skip, setSkip] = useState(0)
   const [size, setSize] = useState(0)
   const [productsFiltred, setProductsFiltred] = useState([])

   const [myFilters, setMyFilters] = useState({
       category: [],
       price: []
   })


    useEffect(() => {
        getCategories()
         .then(res => setCategories(res))

        filterProducts(skip, limit, myFilters)
        .then(res => {
            setProductsFiltred(res)
            setSkip(0)
            setSize(res.length)
        })

    }, [myFilters])


    const loadMore = () => {
        
        const toSkip = skip + limit;

        filterProducts(toSkip, limit, myFilters)
        .then(res => {
            setProductsFiltred([...productsFiltred, ...res])
            setSize(res.length)
            setSkip(toSkip)
        })
    }


    const buttonToLoadMore = () => {

        return (
            size > 0 && 
            size >= limit &&
            (
                <div className="text-center">
                     <button onClick={loadMore} className="btn btn-outline-dark">Load More</button> 
                </div>
            )
        )

    }

    
    function handleFilters(data, filterBy) {

        setMyFilters({ ...myFilters, [filterBy]: data })

    }

    return (
        <div>
             <Layout 
               title="Shop Page" 
               description="Choice your favorite Product in our Store" 
               className="container"
            >

                <div className="row">
                    <div className="col-md-3">
                        <FilterByCategory 
                            categories={categories} 
                            handleFilters={(data) => handleFilters(data, 'category')}    
                        />
                        <hr/>
                        <FilterByPrice handleFilters={data => handleFilters(data, 'price')}/>
                    </div>
                    <div className="col-md-9">
                       
                        <div className="row mb-5">
                            {productsFiltred.map((product, i) => (
                            <div key={product._id} className="col-md-4">
                                    <Card product={product}></Card> 
                            </div>  
                            ))}
                        </div>
                                { buttonToLoadMore() }
                      
                    </div>
                </div>

            </Layout> 
        </div>
    )
}

export default Shop
