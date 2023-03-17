import {useEffect, useState} from 'react'

export default function Counter({title, initValue}) {
  const [count, setCount] = useState(initValue);

  useEffect(()=>{
    fetch('http://localhost:9999/counter')
    .then(res=>res.json())
    .then(result=>{
      setCount(result.value);
    })
  },[]);

  const up = ()=> {
    fetch('http://localhost:9999/counter',{
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({value:count+1})
    })
    .then(res => res.json())
    .then(result=>{
      setCount(result.value);
    })
  }

  const down = ()=> {
    fetch('http://localhost:9999/counter',{
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({value:count-1})
    })
    .then(res => res.json())
    .then(result=>{
      setCount(result.value);
    })
  }

  return <div>
    <h1>{title}</h1>
    <button onClick={up}>🐷➕</button> <button onClick={down}>🐷➖</button> 👉 {count}
  </div>;
}