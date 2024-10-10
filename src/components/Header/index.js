import { Link, Navigate, withRouter } from "react-router-dom"
import Cookies from 'js-cookie'
import withNavigate from "../WithNavigate"
import './index.css'

const Header = (props) => {
    const {navigate} = props
    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        navigate("/login")
    }
    return (
        <nav className="nav-header">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo"/>
                </div>
                <div className="nav-menu">
                    <ul style={{listStyleType: "none", display: "flex"}}>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/jobs" className="nav-link">Jobs</Link>
                        </li>
                    </ul>
                </div>
                <div className="logout-button">
                <button type="button" className="logout-btn" onClick={onClickLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default withNavigate(Header)