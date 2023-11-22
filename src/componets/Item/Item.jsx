import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, image, old_price, new_price, name}) => {


    return (
    <div className='item'>

       <Link to={`/product/${id}`}><img width={"100%"} src={image} alt="" /></Link>
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
