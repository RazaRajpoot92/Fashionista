import React from 'react'
import "./Item.css"

const Item = ({image, old_price, new_price, name}) => {


    return (
    <div className='item'>

        <img width={"100%"} src={image} alt="" />
        <p>{name}</p>

        <div className='price-con'>

            <div className='old-price'>
                ${old_price}
            </div>
            <div className="new-price">
                ${new_price}
            </div>

        </div>


    </div>
  )
}

export default Item
