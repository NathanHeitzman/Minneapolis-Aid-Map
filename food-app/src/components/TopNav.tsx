import './topnav.css'
import { Link } from 'react-router-dom' /*this will make loading different components much faster*/

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">Minne-aid</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/restaurant-map">Local Restaurants Nearby</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Food Shelters
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/list-of-food-shelters">List of Food Shelters</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/be-a-volunteer-food-shelters">Be a Volunteer</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Food Drops
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/list-of-food-drops">List of Food Drops</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/create-food-drops">Create a Food Drop</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us"> Contact Us</Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
