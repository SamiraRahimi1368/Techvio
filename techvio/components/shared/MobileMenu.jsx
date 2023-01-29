const MobileMenu = () => {
    const ItemStyle = 'p-5 border-b-5 text-lg font-bold'
    return (
        <div className="lg:hidden w-4/5 h-1/2 bg-white absolute top-20 left-0 right-0 mx-auto">
            <div className={ItemStyle}>Home</div>
            <div className={ItemStyle}>About</div>

        </div>

    )
}

export default MobileMenu