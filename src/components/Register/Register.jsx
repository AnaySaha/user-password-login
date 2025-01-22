import { createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../firebase/firebase.confi";
import { useState } from "react";

// register error
const Register = () => {

    const [registerError, setRegisterError] = useState('');

    // set success 
    const [success, setSuccess] = useState('');

const handleRegister = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
   console.log( email, password);
//    reset error
setRegisterError('');
setSuccess('');

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
 <input className="mb-4 w-3/4 bg-stone-600 px-4 py-2" type="email"
  placeholder='E-mail Adress' name="email" id="email" />
 <br />
 <input className='mb-4 w-3/4 bg-stone-600 px-4 py-2' type="password"
 placeholder='Password' name="password" id="password" />
 <br />
 <input className='btn btn-secondary' type="submit" value="Register" />
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


          
       </div>
        </div>
    );
};

export default Register; 