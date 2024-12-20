import { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState([]);

  let api = "https://hp-api.onrender.com/api/characters";
  useEffect(() => {
    async function fetchData() {
      let res = await fetch(api);
      let data = await res.json();
      //   console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <img src={item.image} alt="something"/>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
