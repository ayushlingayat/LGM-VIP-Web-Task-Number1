import React from 'react'

import './List.css';


function List(props){
    // console.log('props' , props);

    const deleteItemFromList = (key)=>{
    const newList = props.itemList.filter((itemObj)=>{
            return itemObj.key !== key;
        })
       props.updateItemList(newList);
    };
    return(
      
      <div>
        {props.itemList.map(itemObj=>{
           return <div key={itemObj.key} className="item">
            <p>{itemObj.item}</p>
            <button className='btn-change' onClick={()=>deleteItemFromList(itemObj.key)}>Delete</button>
            </div>
        })}
      </div>
       
    )

     
}

export default List


