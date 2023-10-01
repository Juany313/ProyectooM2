/* const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (userData, setErrors, errors) => {
  if(!userData.email){ setErrors({...errors, email: "Email vacío"})}
  else {
    if(regexEmail.test(userData.email)) {setErrors({...errors, email: ""})}
  else {setErrors({...errors, email: "Email inválido"})}
  }; 

  if(!userData.password){ setErrors({...errors, pasword: "Se requiere password"})
} else {
    if(userData.password.length>6 && userData.password.length<10) {setErrors({...errors, password: ""})
  } else {setErrors({...errors, password: "El número de caracteres es inválido"})}
  };


};

export default validate; */

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexAlMenosUnNumero = /\d/;
export default function validate(data) {
  let errors = {};
/* Sabri recomienda hacer un if elseif si es necesario por cada campo */
  if (!data.email) {
    errors.email = 'El nombre de usuario no puede estar vacío.';
 } else if (!regexEmail.test(data.email)) {
   errors.email = 'El nombre de usuario tiene que ser un email';
  } else if (data.email.length > 35) {
    errors.email = 'el nombre de usuario no puede tener más de 35 caracteres.';
  }
  
  if (!data.password) {
    errors.password = 'La contraseña es requerida';
 } else if (!regexAlMenosUnNumero.test(data.password)) {
   errors.password = 'La contraseña tiene que tener al menos un número';
  } else if (data.password.length<6 || data.password.length>10) {
   errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres.';
  }

  return errors;
};



