import { NavLink } from "react-router-dom";

function Navbar() { 
    return ( 
      <nav>         
          <NavLink className='links' to={"/"}>Home</NavLink>
          <NavLink className='links' to={"/About"}>About</NavLink>
          <NavLink className='links' to={"/Contact"}>Contact</NavLink>
          <NavLink className='links' to={"/Hire"}>Hire</NavLink>
      </nav>
    );
  }
  
  export default Navbar;