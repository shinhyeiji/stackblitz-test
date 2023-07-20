import * as React from 'react';
import './style.css';


function Counter(props) {
  const [count, setCount] = React.useState(props.initValue)
  const [step, setStep] = React.useState(2)
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={()=>{
        setCount(count+step);
      }}>+</button>
      <input 
        type="number" 
        value={step}
        onChange={(evt) => {
        setStep(Number(evt.target.value))
      }} />
      {count}
     
    </div>
  );

}


export default function App() {
  return (
    <div>
      <Counter title="카운터" initValue={10}></Counter>
    </div>
  );
}