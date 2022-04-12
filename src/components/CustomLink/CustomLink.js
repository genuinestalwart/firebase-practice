import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={match ? 'border-b-2 border-indigo-400 px-4 py-2 hover:text-amber-400' : 'px-4 py-2 hover:text-amber-400'} to={to}><div>{children}</div></Link>
    );
}

export default CustomLink;