import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
function Todo() {
    const [input, setinput] = useState("")
    const [items, setitems] = useState([])
    const itemEvent  = (e)=>{
        setinput(e.target.value)
    }
    const listItems = ()=>{
        setitems((olditems)=>{
          return[...olditems,input];
        });
        setinput("");
    };
    const deleteItems = (ind)=>{
        items.splice(ind, 1);
        setitems([...items]);
    }
    const deleteAll = ()=>{
        setitems([]);
    }
    
  return (
     <>
   <div className='main'>
       <h1>TODO LIST</h1>
  <input type="text" placeholder='Enter todo' 
  onChange={itemEvent}
  value = {input}
  />
  <button className='btn' onClick={listItems}>+</button>
  <button className='btntwo' onClick={deleteAll}>Delete All</button>
  <ul>
      {/* <li>{input}</li> */}
      {items.map((itemval)=>{
          return <li><span><MdDelete size={30} onClick={deleteItems}/></span>{itemval}</li>
      })}
  </ul>
   </div>
   </>
  );
}

export default Todo;
