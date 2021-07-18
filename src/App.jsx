import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./index.css";

const App = () => {
  const [inputItem, setInputItem] = useState();
  const [Item, setInput] = useState([]);

  const change = (event) => {
    setInputItem(event.target.value);
  };

  const listOfItems = () => {
    setInput((oldItems) => {
      return [...oldItems, inputItem];
    });
    setInputItem("");
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setInput((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  }; 

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={change}
            value={inputItem}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {Item.map((temp, index) => {
              return (
                <ToDoList
                  text={temp}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
