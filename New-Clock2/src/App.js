import './App.css';
import React, { useState  } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Tilt from 'react-parallax-tilt';


const App = () =>  {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
 setInterval(UpdateTime, 1000)

 const notify = () => toast.success('Digital Clock', {
  position: "top-right",
  autoClose: 3000,
  theme:'dark',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style:{
    backgroundColor:'#404a63'
  }
  });
  return (
    <div className="App">
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


      <Tilt
       className='parallax-effect'
       perspective={500}
       transitionSpeed={1000}
       glareEnable={false}
      >

      <div className='border-gradient border-gradient-purple' onClick={notify}>
       <h1 className = "h1">{ctime}</h1>
      </div>
      
      </Tilt>
    </div>
  );
}

export default App;
