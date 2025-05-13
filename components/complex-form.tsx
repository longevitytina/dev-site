// import React, {useState} from "react";
// import { debounce } from 'lodash'
/**
 * Build a React form with the following fields:
Full Name – Required; must include at least a first and last name (2+ words).
Email – Required; must be a valid email.
Password – Required; must include:
At least 8 characters
At least one uppercase letter
At least one lowercase letter
At least one number
At least one special character
Confirm Password – Must match the Password field.
Age – Optional; if filled, must be a number between 18 and 100.
Agree to Terms – Required checkbox.
Behavior:
Show inline validation errors (e.g. under each field) as the user types.
Disable the submit button until all required fields are valid.
On submit, simulate a POST request with a 1s delay and display a success message.
Bonus:
Use useReducer or custom hook for form state management.
Debounce validation to avoid validating on every keystroke.
Animate error messages or success transitions.
 *
 */


// export default function ComplexForm (){
//   const [fields, setFields] = useState({
//     fullName:''
//   })
//   const [errors, setErrors] = useState({})


//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setFields((prev) => ({ ...prev, [name]: value }));
//     // debouncedValidate(name, value); // validate, but not control
//   };

//   const validateName= (name)=>{
//     if(name.trim().split(' ').length<2){
//       return "Please enter first and last name."
//     }
//     return true;
//   }


//   return(
//     <form>
//       <div>
//         <label>
//           Full Name:
//         </label>
//         <input required name="fullName" value={fields.fullName} onChange={handleOnChange}/>
//       </div>
//     </form>
//   )

// }
