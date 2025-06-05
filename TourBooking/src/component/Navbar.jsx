import "./NavBarStyle.css";
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [iconClassName, setIconClassName] = useState("fas fa-bars")

    function handleNavIconClicked(){
        setIconClassName(iconClassName => iconClassName === "fas fa-bars" ? "fas fa-times":"fas fa-bars");

    }

    useEffect(()=>{
        function handleScreenResize(){
            if(window.innerWidth > 850){
                setIconClassName("fas fa-bars")
            }
        }
        window.addEventListener('resize',handleScreenResize);
        return () => window.removeEventListener('resize', handleScreenResize);
    }, [])
    
    return (
        <div className="NavbarItems">
        <h1 className="navbar-logo">TuniTour</h1>
        <div className="menu-icons">
            <i className={iconClassName} onClick={handleNavIconClicked}></i>

        </div>
        <ul className={(window.innerWidth <= 850 && iconClassName === "fas fa-times") ? "nav-menu active":"nav-menu"}>
            {MenuItems.map((item) => (
                <li key={item.title} ><Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link></li>
            ))}
        </ul>

        </div>
    );
}