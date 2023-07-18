// 7 4 video okk samja naa bhai 


import React from 'react'
import { useState } from 'react';
import './App.css';
import List from './List';
const App = () => {


  const [currentItem , setCurrentItem] = useState(null);
  const [itemList , updateItemList] = useState([]);

  const onChangeHandler = (e) =>{
      // console.log("current value" , e.target.value);
      setCurrentItem(e.target.value);
  }


  const onAddItemToList = ()=>{
    updateItemList([...itemList,{item:currentItem,key:Date.now()}]);
    // console.log("List Items" , itemList);
    setCurrentItem(" ");
  }
  return (
    <>
    <div className='App'>
      <header className="App-header">
        <h3 className='h3-heading'>My Todo List :)</h3>
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input type="text" value={currentItem} onChange={onChangeHandler}/>
            <button className="btn-change"onClick={onAddItemToList}>Add Item</button>
            
              
            
          </div>
          <List  itemList={itemList} updateItemList={updateItemList}/>
        </div>
      </header>
    </div>
    </>
    
  )
}

export default App



