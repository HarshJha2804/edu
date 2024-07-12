import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const handlenav = () => {
    setIsopen(true);
  };
  const handleclose = () => {
    setIsopen(false);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`z-[200000] fixed  w-[100%] ${scrolled? 'bg-white shadow-sm':'bg-transparent'}`}>
        <nav className="flex justify-between px-8 py-4 items-center">
          <div>
            <Link to="/">
              <p className={` text-[18px]  ${scrolled? 'text-black':'text-white'}`}>Empower Edu</p>
            </Link>
          </div>

          <button
            className="flex md:hidden"
            onClick={handlenav}
            aria-label="Open menu"
          >
            <Icon
              icon="tabler:menu-2"
              style={{ color: "white" }}
              fontSize={20}
            />
          </button>

{/* mobile header */}


          <div
            className={`flex flex-row items-start justify-between p-4 pt-6 w-[100vw] md:hidden ${
              isOpen
                ? "absolute top-0 z-[5000] bg-white shadow-md w-[100vw] right-0 h-[100vh] "
                : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-[0.75rem]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: any }) =>
                    ` ${
                      isActive ? "font-normal" : ""
                    } 
                    ${scrolled? 'text-black':'text-white'}
                    hover:text-opacity-70 p-2`
                    
                  }
                >
                  Empower Edu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: any }) =>
                    ` ${
                      isActive ? "font-normal" : ""
                    }
                      ${scrolled? 'text-black':'text-white'}
                       hover:text-opacity-70 p-2 `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }: { isActive: any }) =>
                    ` ${
                      isActive ? "font-normal" : ""
                    }   ${scrolled? 'text-black':'text-white'}
                     hover:text-opacity-70 p-2`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }: { isActive: any }) =>
                    ` ${
                      isActive ? "font-normal" : ""
                    }   ${scrolled? 'text-black':'text-white'}
                      hover:text-opacity-70 p-2`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }: { isActive: any }) =>
                    ` ${
                      isActive ? "font-normal" : ""
                    }   ${scrolled? 'text-black':'text-white'}
                     hover:text-opacity-70 p-2`
                  }
                >
                  <button aria-label="Login" className="p-0">
                    Login
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }: { isActive: any }) =>
                    ` ${isActive ? "font-normal" : ""}   `
                  }
                >
                  <Link to="/signup">
                    <button
                      className={`px-4 py-2 hover:text-black hover:ease-in-out border-[1px] border-black ` }
                      aria-label="Sign up"
                    >
                      Sign up
                    </button>
                  </Link>
                </NavLink>
              </li>
            </ul>
            <Icon
              icon="ion:close"
              style={{ color: "black" }}
              onClick={handleclose}
            />
          </div>


{/* website header */}

          <ul className={`hidden md:flex flex-row gap-[1rem] items-center`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }: { isActive: any }) =>
                  ` ${
                    isActive ? "font-normal" : ""
                  }   ${scrolled? 'text-black':'text-white'}
                   hover:text-opacity-70 p-2 text-[18px]`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }: { isActive: any }) =>
                  ` ${
                    isActive ? "font-normal" : ""
                  }  ${scrolled? 'text-black':'text-white'} hover:text-opacity-70 p-2 text-[18px]`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }: { isActive: any }) =>
                  ` ${
                    isActive ? "font-normal" : ""
                  }   ${scrolled? 'text-black':'text-white'} hover:text-opacity-70 p-2 text-[18px]`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }: { isActive: any }) =>
                  ` ${
                    isActive ? "font-normal" : ""
                  }   ${scrolled? 'text-black':'text-white'} hover:text-opacity-70 text-[18px]`
                }
              >
                <button aria-label="Login">Login</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }: { isActive: any }) =>
                  ` ${isActive ? "font-normal" : ""}   ${scrolled? 'text-black':'text-white'} text-[18px]`
                }
              >
                <Link to="/signup">
                  <button
                 className={`px-4 py-2 hover:ease-in-out border-[1px]  ${scrolled? 'text-black border-black ':'text-white  border-white  hover:text-black hover:bg-white'}` }
                    aria-label="Sign up"
                  >
                    Sign up
                  </button>
                </Link>
              </NavLink>
            </li>
          </ul>

        </nav>

      </header>
    </>
  );
};

export default Header;
