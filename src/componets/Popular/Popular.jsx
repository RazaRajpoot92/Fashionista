import React from 'react'
import "./Popular.css"
import products from "../../assets/data"
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1 className='popular-heading'>Popular in Men</h1>

        <hr />

        <div className="item-container">
            {

                products.map((item,i)=>{
                    return <Item
                        key={i}
                        id = {item.id}
                        image={item.image}
                        name = {item.name}
                        old_price = {item.old_price}
                        new_price = {item.new_price}
                    />
                })
            }
        </div>


    </div>
  )
}

export default Popular;
