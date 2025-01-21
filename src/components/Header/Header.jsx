import { NavLink } from "react-router-dom";


const Header = () => {
const links = <>
<li>
<button className="join-item btn"><NavLink to="/">Home</NavLink></button>
  <button className="join-item btn"><NavLink to= "/login">Login</NavLink></button>
  <button className="join-item btn"><NavLink to= "/register">Register</NavLink></button>
  <button className="join-item btn"><NavLink to= "/Heroregister"> Hero Register </NavLink></button>

</li>
</>

    return (
        <div className="join">


  {links}
</div>
    );
};

export default Header;