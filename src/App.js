import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from "axios" 
import Row from 'react-bootstrap/Row';
import Validator from "validatorjs";
import "./App.css"

function App() {
const [nextPlayer,setNextPlayer] =useState('x');
const [squareValue,setSquareValue] =useState({1:" ",2:" ",3:" ",4:" ",5:" ",6:" ",7:" ",8:" ",9:" "});

const handleClick =(e)=>{
  console.log(e.target.id);
  if(nextPlayer==='x'){
    setSquareValue({...squareValue,[e.target.id]:"X"});
    console.log(squareValue);
    setNextPlayer('o');
  }else {
    setSquareValue({...squareValue,[e.target.id]:"O"});
    setNextPlayer('x');
  }

}
  
  



// const [formData,setFormData] =useState({
//   name:'',
//   email:'',
//   password:'',
// })
// const [errors,setErrors] = useState([]);


// const hanldeChange =(e)=>{  
//   const {name,value} = e.target;
//   setFormData({...formData,[name]:value})
// };
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); 
//    const headers = {
//     'X-CSRF-TOKEN': csrfToken,
//     'Accept':'application/json'
//    };
//     // Validation rules
//   const rules = {
//     email: 'required|email',
//     password: 'required|min:8',
//     name:'required|min:5'
//   };
//   const validation = new Validator(formData, rules);

//   validation.passes(async() => {
//     // If validation passes, submit form or perform action
//     try {
//       const response = await axios.post('http://localhost:8000/api/login', {email:formData.email,password:formData.password},{ headers });
//       console.log(response.data); // Handle the response accordingly
//       setFormData({email:'',name:'',password:''});
//   } catch (error) {
//       console.error('Login failed:', error);
//   }
//   });

//   validation.fails(() => {
//     // If validation fails, set errors state
//     setErrors(validation.errors.all());
//   });
// };





//   // const [x,setX]= useState();
//   // const [y,setY]= useState();
//   // const handleClick = (event) => {
//   //   // Extracting mouse click coordinates relative to the viewport
//   //    setX (event.clientX);
//   //    setY (event.clientY);

//   //   console.log('Clicked at coordinates: ', { x, y });
//   // };
 
 
return (
  <div>
    <div className="status">dasjnj</div>
    <div className="board-row">
    <button className="square " id="1" onClick={e=>handleClick(e)} >
  {squareValue[1]}
    </button>
    <button className="square " id="2" onClick={e=>handleClick(e)} >
    {squareValue[2]}
    </button>
    <button className="square " id="3" onClick={e=>handleClick(e)}>
    {squareValue[3]}
    </button>
    </div>
    <div className="board-row">
    <button className="square " id="4" onClick={e=>handleClick(e)}>
    {squareValue[4]}
    </button>
    <button className="square "id="5"onClick={e=>handleClick(e)} >
    {squareValue[5]}
    </button>
    <button className="square "  id="6" onClick={e=>handleClick(e)}>
    {squareValue[6]}
    </button>
    </div>
    <div className="board-row">
    <button className="square " id="7"  onClick={e=>handleClick(e)}>
    {squareValue[7]}
    </button>
    <button className="square " id="8"  onClick={e=>handleClick(e)} >
    {squareValue[8]}
    </button>
    <button className="square " id="9"  onClick={e=>handleClick(e)}>
    {squareValue[9]}
    </button>
    </div>
  </div>
);
};


export default App;
