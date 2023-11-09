import { useState, useEffect } from 'react'
import Logo from "../assets/new_wc_logo_white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSignInAlt, faCertificate, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setIsAuthenticated } from "../redux/actions/AuthAction";
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const pathName = location?.pathname;

    let isAuth = useSelector((state) => state?.auth?.isAuthenticated) || JSON.parse(localStorage.getItem("isAuthenticated"));

    const [user, setUser] = useState();

    useEffect(() => {
        if(isAuth && localStorage.getItem("user")) {
            setUser(localStorage.getItem("user"));
        }
    }, [isAuth]);

    console.log(user);

    const logOut = () => {
        localStorage.removeItem("user");
        dispatch(setIsAuthenticated(false));
        if(pathName) {
            navigate("/", { state: {
                path: pathName
            }});
        } else {
            navigate("/");
        }
        window.location.reload();
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <nav className="container pt-10 bg-transparent p-4 flex items-center justify-between">

            <div className="flex items-center space-x-4">
                <img src={Logo} alt="Logo" className="w-45 h-10" />
            </div>

            {/* Mobile Menu Icon */}
            {!mobileMenuOpen ? (
                <div className="lg:hidden" >
                    <button onClick={closeMenu} className="menu-icon">
                        <FontAwesomeIcon icon={faBars} className='text-white' />
                    </button>
                </div>
            ) : (
                <div className="g:hidden fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transition-transform transform translate-x-0 z-50" >
                    <button onClick={closeMenu} className="close-icon absolute top-4 right-4">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul className="flex flex-col space-y-4 p-4">
                        <li className="text-black font-medium">About Us</li>
                        <li className="text-black font-medium">Pricing</li>
                        <li className="text-black font-medium">How It Works?</li>
                        {/* Add more list items as needed */}
                    </ul>
                    <div className="flex items-center space-x-4 p-4">
                        <button className="text-black font-semibold px-4 py-2 rounded-full">
                            Sign In
                        </button>
                        <a href='/signup' className="bg-blue-500 cursor-pointer text-white font-semibold px-8 py-3 rounded-full">
                            Free Trial
                        </a>
                    </div>
                </div>
            )}


            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex space-x-10">
                <li className="text-white font-medium">About Us</li>
                <li className="text-white font-medium">Pricing</li>
                <li className="text-white font-medium">How It Works?</li>
                {/* Add more list items as needed */}
            </ul>

            <div className="hidden lg:flex items-center space-x-4">
                { isAuth === true ? (
                    <Link to="/" onClick={logOut} className="cursor-pointer flex items-center text-white font-semibold px-4 py-2 rounded-full">
                    <FontAwesomeIcon icon={faSignOutAlt} className='fa-shake mr-2' />
                    Sign Out
                </Link>
                ) : (
                    <Link to='/signin' className="flex items-center text-white font-semibold px-4 py-2 rounded-full">
                    <FontAwesomeIcon icon={faSignInAlt} className='fa-shake mr-2' />
                    Sign In
                </Link>
                )}
                <a href='/signup' className="light-button flex items-center px-8 py-3 text-white font-semibold">
                    <FontAwesomeIcon icon={faCertificate} className='fa-spin mr-2' />
                    Free Trial
                </a>
            </div>
        </nav>
    );
}

export default Navbar
