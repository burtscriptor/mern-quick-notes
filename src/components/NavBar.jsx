import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service"

const NavBar = ({ user, setUser }) => {

    function handleLogOut () {
        userService.logOut();
        setUser(null);
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <span class="navbar-brand">Welcome {user.name}</span>
            &nbsp; &nbsp; <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
    );
};



export default NavBar;