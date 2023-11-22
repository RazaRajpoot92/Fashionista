import React, { useContext } from 'react'

import "./CSS/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext"
import drop_icon from "../assets/dropdown_icon.png"
import Item from "../componets/Item/Item"

const ShopCategory = (props) => {

  const {all_products} = useContext(ShopContext)


  return (

    <div className='shop-category'>

      <img className='shop-banner' src={props.banner} alt="" />

      <div className='shopcategory-indexSort'>

        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>


        <div className='shopCategory-sort'>

          Sort by <img src={drop_icon} alt="" />

        </div>


        </div>

        <div className='shopcategory-products'>

          {
            all_products.map((item, i)=>{

              if(item.category === props.category){

                return <Item

                key={i}
                id={item.id}
                image={item.image}
                name = {item.name}
                old_price = {item.old_price}
                new_price = {item.new_price}

                />

              }else{
                  return null
              }

            })
          }

        </div>



      <div className='loadmore'>
          Explore More
      </div>


    </div>
  )



}

export default ShopCategory
