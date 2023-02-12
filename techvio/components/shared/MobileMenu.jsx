const MobileMenu = ({ open, name }) => {
    const ItemStyle = 'p-5 border-b-5 text-lg font-bold'
    const style = {
        transform: `${open ? 'rotateX(0deg)' : 'rotateX(90deg)'}`
    }
    return (
        <div
            className="lg:hidden w-4/5 h-1/2 bg-white absolute top-20 left-0 right-0 mx-auto origin-top transition-all duration-1000"
            style={style}
        >
            <div className={ItemStyle}>{name}</div>
            <div className={ItemStyle}>About</div>

        </div>

    )
}

export default MobileMenu
   