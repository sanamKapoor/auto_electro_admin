export const MenuIcon = ({ toggle, setToggle }) => (
    <svg viewBox="0 0 100 80" width="35" height="35" fill='#fff' onClick={() => setToggle(!toggle)} className='pointer'>
        <rect width="100" height="10"></rect>
        <rect y="30" width="70" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
    </svg>
)

export const ArrowUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2B9D13">
        <path d="M12 3l12 18h-24z"/>
    </svg>
)