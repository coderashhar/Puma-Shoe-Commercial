import './Navbar.css';
export default function Navbar(){
    return(
        <div>
            <nav>
                <div className='logo'> 
                    <img src="/images/logo.jpg"className='logoImg'/>
                </div>
                <ul>
                    <li href="=">MENU</li>
                    <li href="=">LOCATION</li>
                    <li href="=">ABOUT</li>
                    <li href="=">CONTACT</li>
                </ul>
                <button>LOGIN</button>
            </nav>
        </div>
    )
}