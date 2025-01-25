import { createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../firebase/firebase.confi";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

// register error
const Register = () => {

    const [registerError, setRegisterError] = useState('');

    // set success 
    const [success, setSuccess] = useState('');

    // show password
    const [showPassword, setShowPassword] = useState(false);


const handleRegister = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
   console.log( email, password, accepted);
   
   //    reset error & Success
setRegisterError('');
setSuccess('');


   if(password.length <6){
    setRegisterError('Password should be at least 6 characters or longer')
   }

   else if(!/[A-Z]/.test(password)){
    setRegisterError('Your password should have at least one upper case characters.')
    return;

   }

   else if (!accepted){
    setRegisterError('Please accept our terms and conditions!')
    return;
   }

//    create user
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
    console.log(result.user);
    setSuccess('User Create Successfully.')
})
.catch(error =>{
    console.error(error);
    setRegisterError(error.message);
})
}


    return (
        <div>
       <div className="max-auto md:w-1/2">
       <h2 className="text-3xl mb-8">Please Register</h2>
<form onSubmit={handleRegister}>
 <input className="mb-4 w-full bg-stone-600 px-4 py-2" type="email"
  placeholder='E-mail Adress' name="email" id="email" required/>
 <br />
 <div className="mb-4 relative border">
 <input className='w-full bg-stone-600 px-4 py-2' 
 type={showPassword ? 'text' : "password"}
 placeholder='Password' name="password" 
 id="password" required />
 <span className="absolute top-3 right-2" onClick={ () => setShowPassword(!showPassword)}>
 {
    showPassword ? <FaEyeSlash></FaEyeSlash> :
     <FaEye></FaEye>
 }

 </span>
 </div>
 <br />
 <input type="checkbox" name="terms" id="terms" />
 <label htmlFor="terms">Accept all terms and  Conditions</label>
 <br />
 <input className='btn btn-secondary mb-4 w-full' type="submit" value="Register" />
</form>


     {
        registerError && <p className="text-red-700"> 
       {registerError} </p>
        }

        {
            success && <p className="text-green-700"> 
                {success}
            </p>
        }

        <p>Already have an Account? Please <Link to="/login">Login</Link></p>


          
       </div>
        </div>
    );
};

export default Register; 