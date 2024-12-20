import React, {useEffect, useState} from 'react'

const TodoSelect = () => {
    
    const [data, setData] = useState([]);
    
      let api = "https://jsonplaceholder.typicode.com/todos/";
      useEffect(() => {
        async function fetchData() {
          let res = await fetch(api);
          let data = await res.json();
            console.log(data);
          setData(data);
        }
        fetchData();
      }, []);
    
  return (
    <div>
      {data.map((todos, index)=>{
        return (
            <div key={index}>
                <ul>
                    <li>{todos.title}</li>
                </ul>
            </div>
        )
      })}
    </div>
  )
}

export default TodoSelect;
