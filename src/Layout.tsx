import Footer from "./component/Footer/footer"

// import Headerhome from "./component/Header/Header"
import { Outlet } from 'react-router-dom'
import Header from "./component/Header/Header"
const Layout = () => {
    // const location = useLocation()
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout