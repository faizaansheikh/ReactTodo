import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

function Todo() {
    const [input, setinput] = useState("")
    const [items, setitems] = useState([])
    const [toggle, setToggle] = useState(true)
    const[isEdit,setIsEdit] = useState(null)
    const itemEvent = (e) => {
        setinput(e.target.value)
    }
    const listItems = () => {
        if(!input){
            alert("kuch likho to sai")
        }
        else if(input && !toggle){
            setitems(
                items.map((elem)=>{
                    if(elem.id === isEdit){
                        return{...elem, name:input}
                    }
                    return elem;
                
                })
            )
            setinput("")
            setToggle(true)
           
        }else{
            const allInputData = { id: new Date().getTime().toString(), name: input }
            setitems([...items, allInputData])
            setinput("");
        }
    };
    const deleteItems = (id) => {
        // console.log(id);
        const fin = items.filter((elem) => id !== elem.id)
        setitems(fin);
    }
    const deleteAll = () => {
        setitems([]);
    }
    const editItem = (id) => {
        const findId = items.find(elem => elem.id === id)
        // console.log(findId);
        setinput(findId.name)
        setToggle(false)
        setIsEdit(id)
    }

    return (
        <>
            <div className='main'>
                <h1>TODO LIST</h1>
                <input type="text" placeholder='Enter todo'
                    onChange={itemEvent}
                    value={input}
                />
              {
                toggle?    <button className='btn' onClick={listItems}>+</button> : 
                <button className='btn' onClick={listItems}><AiFillEdit size={25} /></button>
              }
              
               
                <button className='btntwo' onClick={deleteAll}>Delete All</button>
                <ul>
                    {/* <li>{input}</li> */}
                    {items.map((elem) => {
                        return <li>
                            {elem.name}
                            <span className='del'><MdDelete size={30} onClick={() => deleteItems(elem.id)} /></span>
                            <span className='edi'><AiFillEdit size={30} onClick={() => editItem(elem.id)} /></span>
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
}

export default Todo;
