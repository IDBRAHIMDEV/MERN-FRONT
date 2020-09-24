import React, { useState } from 'react'

function FilterByCategory({ categories, handleFilters }) {


    const [checked] = useState(new Set())

    const handleCategory = (category) => {
       
        if(checked.has(category._id)) {
            checked.delete(category._id)
        }
        else{
            checked.add(category._id)
        }
        
        handleFilters(Array.from(checked))

    }

    return (
        <div>
          <h4 className="mt-3">Filter by Categories</h4>
            <ul>
             { categories && categories.map((category, i) => (

                <li key={category._id} className="list-unstyled my-3">
                    <input onClick={ () => handleCategory(category)} value={category._id} type="checkbox" id={i} className="form-check-input"/>
                    <label htmlFor={i} className="form-check-label ml-3">{ category.name }</label>
                </li>

             )) } 
            </ul>
        </div>
    )
}

export default FilterByCategory
