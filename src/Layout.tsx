import Footer from "./component/Footer/footer"
import Header from "./component/Header/header"
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout