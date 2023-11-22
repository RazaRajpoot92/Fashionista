import React from 'react'
import "./NewCollections.css"
import newcollection from "../../assets/new_collections"
import Item from "../../componets/Item/Item.jsx"

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr className='col-hr' />

        <div className='collections'>

            {
                newcollection.map((item, i)=>(
                    <Item

                    key={i}
                    id = {item.id}
                    image={item.image}
                    name = {item.name}
                    old_price = {item.old_price}
                    new_price = {item.new_price}

                    />
                ))
            }

        </div>
    </div>
  )
}

export default NewCollections
