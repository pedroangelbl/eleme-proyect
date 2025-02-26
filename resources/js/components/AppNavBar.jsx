import { NavLink } from "react-router-dom"

const links = [
    {
        name: 'Home',
        path: '/'
    },
    { 
        name: 'Store', 
        path: '/store' 
    }
]

export default function AppNavBar(){
    return(
        <nav>
            <ul>
                {
                    links.map((link,index) => (
                        <li key={index}>
                            <NavLink to={link.path}>{link.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}