import React from 'react';

const Register = () => {

const handleRegister = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
   console.log( email, password);
}


    return (
        <div>
       <div className="max-auto md:w-1/2">
       <h2 className="text-3xl mb-8">Please Register</h2>
<form onSubmit={handleRegister}>
 <input className="mb-4 w-3/4 bg-stone-600 px-4, py-2" type="email"
  placeholder='E-mail Adress' name="email" id="" />
 <br />
 <input className='mb-4 w-3/4 bg-stone-600 px-4, py-2' type="password"
 placeholder='Password' name="password" id="" />
 <br />
 <input className='btn btn-secondary' type="submit" value="Register" />
</form>
       </div>
        </div>
    );
};

export default Register;