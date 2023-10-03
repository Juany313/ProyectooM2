import {useState} from 'react';
import style from './Form.module.css'
import validate from './validation.js'




 const Form = ({login})=>{
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange= (event)=>{
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property]: value});
    /* validate({...userData, [property]: value}, setErrors, errors) */

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  }
  const handlersubmit= (event)=>{
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={handlersubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          name="email" 
          value={userData.email} 
          onChange={handleChange} 
          />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          value={userData.password} 
          onChange={handleChange}/>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
      
    </form>
  );
 };

 export default Form;