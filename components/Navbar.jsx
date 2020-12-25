import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <a className="navbar-brand" href="">Note app</a>
            </Link>
            <Link href="/newnote">
                <a className="create" href="">Create Note</a>
            </Link>
        </nav>
    )
}

export default Navbar