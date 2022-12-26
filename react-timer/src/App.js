import './App.css';
import {useEffect, useState} from "react"

function App() {

  const [stop,setStop] = useState(false)
  const [hrs,setHrs] = useState(0)
  const [min,setMin] = useState(0)
  const [sec,setSec] = useState(0)
  const [mili,setMili] = useState(0)
   
    function onStop(){
         setStop(false)
         setHrs(0)
         setMin(0)
         setSec(0)
         setMili(0)
    }

    function onPause(){
        setStop(false)
    }

    function onStart(){
        setStop(true)
    }

  useEffect(() => {
       let interval = null;
       interval = setInterval(()=>{
        if(stop){
          if(min>59){
            setHrs(hrs+1)
            setMin(0)
          }
          if(sec>59){
            setMin(min+1)
            setSec(0)
          }
          if(mili>99){
            setSec(sec+1)
            setMili(0)
          }
          if(mili<=99){
            setMili(mili+1)
          }
          else{
            clearInterval(interval)
          }
        }

       },0.001)
       return ()=>{
        clearInterval(interval)
       }
  })

  return (
    <div className="App">
      <h1>Setup is ready</h1>
      <div style={{display:"flex",flexDirection:"row",textAlign:"center",justifyContent:"center"}}>
          <div>
            <h1>{hrs} :</h1>
          </div>   <div>
            <h1>{min} :</h1>
          </div> 
          <div>
            <h1>{sec} :</h1>
          </div> 
          <div>
            <h1>{mili} </h1>
          </div> 
      </div>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}

export default App;
