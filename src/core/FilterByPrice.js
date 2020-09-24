import React from 'react'

const FilterByPrice = ({ handleFilters }) => {
    
    const prices = [
        {
            _id: 1,
            name: "Any",
            value: []
        },
        {
            _id: 2,
            name: "0$ to 39$",
            value: [0, 39]
        },
        {
            _id: 3,
            name: "40$ to 79$",
            value: [40, 79]
        },
        {
            _id: 4,
            name: "80$ to 119$",
            value: [80, 119]
        },
        {
            _id: 5,
            name: "120$ to 160$",
            value: [120, 160]
        },
        {
            _id: 6,
            name: "More",
            value: [161, 9999999]
        }
    ]


    const handlePrice = (e) => {

        handleFilters(prices[e.target.value]['value'])
    }

   
    return (
        <div>
            
            <h4 className="mt-5">Filter By Price</h4>
            
            {prices.map((price, i) => (

                <div key={i} className="my-3">
                    <label  htmlFor={`${i}-${price.name}`}>
                        <input
                            onChange={handlePrice}
                            className="mx-3" 
                            type="radio"
                            name="price" 
                            id={`${i}-${price.name}`} 
                            value={i}
                        />
                        {price.name}
                    </label>
                </div>

            ))}

        </div>
    )
}

export default FilterByPrice
