import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () =>{
  const[inputList,setInputList]=useState("");
  const[Items, setItems]=useState([]);

  const itemEvent=(event)=>{
   setInputList(event.target.value);
  };
  const listofitems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList('')

  };
  const deleteItems = (id) =>{
      console.log("deleted");
      setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
         return index !== id;
        });

      });
  };

  return(
    <>
    <div className='main'>
      <div className='center'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add Items' onChange={itemEvent} value={inputList} />
        <button className='plus' onClick={listofitems}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval, index)=>{
            // return <li>{itemval}</li>;
           return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>;
          })}
        </ol>
      </div>

    </div>
    
    </>


  );

};
export default App;