const Navbar = ({ onChangePage }) => {

    const handleClick = (event) => {
        event.preventDefault()
        onChangePage(event.target.pathname)
    }
    return (
        <div className="navbar">
            <a onClick={handleClick} href="/" className="link-title">Team</a>
            <a onClick={handleClick} href="/battle" className="link-title">Battle!</a>
            <a onClick={handleClick} href="/store" className="link-title">Store</a>
        </div>
    )
}

export default Navbar