import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from "@iconify/react"
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
const Header = () => {
    const [isOpen, setIsopen] = useState(false);
    const handlenav = () => {
        setIsopen(true);
    }
    const handleclose = () => {
        setIsopen(false)
    }


    return (
        <>

            <header className='z-[200000] fixed  w-[100%]'>

                <nav className='flex justify-between px-8 py-4 items-center'>
                    <div >
                        <Link to='/' >
                            <p className='text-white text-[18px]'>Empower Edu</p>
                        </Link>
                    </div>

                    <button className='flex md:hidden' onClick={handlenav} aria-label="Open menu">
                        <Icon icon="tabler:menu-2" style={{ color: 'white', }} fontSize={20} />
                    </button>
                    <div className={`flex flex-row items-start justify-between p-4 pt-6 w-[100vw] md:hidden ${isOpen ? "absolute top-0 z-[5000] bg-white shadow-md w-[100vw] right-0 h-[100vh] " : "hidden"}`} >
                        <ul className='flex flex-col gap-[0.75rem]'>
                        <li>
                                <NavLink to='/' className={({ isActive }: { isActive: any  }) =>
                                    ` ${isActive ? "font-normal" : ""} hover:text-opacity-70 p-2`
                                }>
                                    Empower Edu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/' className={({ isActive }: { isActive: any })  =>
                                    ` ${isActive ? "font-normal" : ""} hover:text-opacity-70 p-2 `
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={({ isActive }: { isActive: any  }) =>
                                    ` ${isActive ? "font-normal" : ""}  hover:text-opacity-70 p-2`
                                }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' className={({ isActive }: { isActive: any  }) =>
                                    ` ${isActive ? "font-normal" : ""}  hover:text-opacity-70 p-2` 
                                }>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/login' className={({ isActive }: { isActive: any  }) =>
                                    ` ${isActive ? "font-normal" : ""}  hover:text-opacity-70 p-2`
                                }>
                                    <button aria-label="Login" className='p-0'>
                                        Login
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/signup' className={({ isActive }: { isActive: any }) =>
                                    ` ${isActive ? "font-normal" : ""}  `
                                }>
                                    <Link to='/signup' >
                                        <button className='px-4 py-2 hover:text-black hover:ease-in-out border-[1px] border-black' aria-label="Sign up">
                                            Sign up
                                        </button>
                                    </Link>
                                </NavLink>
                            </li>
                        </ul>
                        <Icon icon="ion:close" style={{ color: 'black', }} onClick={handleclose} />

                    </div>

                    <ul className={`hidden md:flex flex-row gap-[1rem] items-center`} >
                        <li>
                            <NavLink to='/' className={({ isActive }: { isActive: any }) =>
                                ` ${isActive ? "font-normal" : ""} hover:text-opacity-70 text-white p-2 text-[18px]`
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }: { isActive: any }) =>
                                ` ${isActive ? "font-normal" : ""} text-white hover:text-opacity-70 p-2 text-[18px]`
                            }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className={({ isActive }: { isActive: any }) =>
                                ` ${isActive ? "font-normal" : ""} text-white hover:text-opacity-70 p-2 text-[18px]`
                            }>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className={({ isActive }: { isActive: any }) =>
                                ` ${isActive ? "font-normal" : ""} text-white hover:text-opacity-70 text-[18px]`
                            }>
                                <button aria-label="Login">
                                    Login
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup' className={({ isActive }: { isActive: any }) =>
                                ` ${isActive ? "font-normal" : ""}  text-white text-[18px]`
                            }>
                                <Link to='/signup' >
                                    <button className='button-secondary hover:bg-white hover:text-black hover:ease-in-out ' aria-label="Sign up">
                                        Sign up
                                    </button>
                                </Link>
                            </NavLink>
                        </li>
                    </ul>


                </nav>

            </header>
        </>
    )
}

export default Header