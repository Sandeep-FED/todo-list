import * as React from 'react';
import './App.css';

function App() {
  // Storing days in a week in a array
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // creating a date function and assigning it to day obj
  const day = new Date()

  // For storing input changes
  const [Input, setInput] = React.useState("")
  const [todos, setTodos] = React.useState([])
  // Handle change for input
  const handlechange = (e) => {
    setInput(e.target.value)
  }
  console.log(Input)

  const handletodo = () => {
    setTodos([...todos, { id: Date.now(), text: Input, status: false }])
    setInput("")
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>My todos</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {weekday[day.getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." onChange={handlechange} value={Input} />
        <i className="fas fa-plus" onClick={handletodo}></i>
      </div>
      <div className="todos">
        {
          todos.map((obj) => {
            return (

              < div className="todo" >
                <div className="left">
                  <input type="checkbox" value={obj.status} onChange={(e) => {
                    console.log(e.target.value)
                    console.log(obj)
                    !obj.status
                  }} />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}

export default App;