import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
        <Link to="/" className="site-title">JYCMCRG</Link>
        <ul>
            <CustomLink to="/home">HOME</CustomLink>
            <CustomLink to="/about">ABOUT</CustomLink>
            <CustomLink to="/contact">CONTACT</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}