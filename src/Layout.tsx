import Footer from "./component/Footer/footer"

// import Headerhome from "./component/Header/Header"
import { Outlet } from 'react-router-dom'
// import Header from "./component/Header/header"
// import { Icon } from "@iconify/react/dist/iconify.js"
// import { useState } from "react"
// import brochure from "./assets/Brochure/empower_edu_brochure.pdf"
import Header from "./component/Header/header"
// import Eventpopover from "./component/EventPopover/Eventpopover"
// import dhfj from ""
const Layout = () => {
    // const [hover, setdownloadhover] = useState(false);
    // const [isPopoverVisible, setPopoverVisible] = useState(true);
    // const handlePopoverClose = () => {
    //     setPopoverVisible(false);
    // };
    // const handleDownload = () => {
    //     const link = document.createElement("a")
    //     link.href = brochure
    //     link.download = "empower_edu_brochure.pdf"
    //     document.body.appendChild(link)
    //     link.click();
    //     document.body.removeChild(link)
    // }
    // const location = useLocation()
    return (
        <>
            <Header />

            {/* {isPopoverVisible && (
                <div className="w-[100vw] h-[100vh] fixed top-[64vh] left-[2vw] z-[100000] flex flex-col gap-3 transition-all">
                    <div className="w-[500px]">
                        <Eventpopover onClose={handlePopoverClose} />
                    </div>
                </div>
            )} */}
            {/* <div className="w-[100vw] h-[100vh] fixed top-[84vh] left-[95vw] z-[100000] flex flex-col gap-3">
                <div className="bg-primary rounded-full w-[fit-content] p-3 hover:cursor-pointer flex"
                    onMouseEnter={() => { setdownloadhover(true) }}
                    onMouseLeave={() => { setdownloadhover(false) }}
                    onClick={handleDownload}
                >
                    < div className="tooltip">
                        {hover ? <span className="tooltiptext"> Download Brochure </span> : ""}
                        <Icon icon={hover ? "hugeicons:file-download" : "hugeicons:file-download"} fontSize={24} className="text-[white]" />

                    </div>


                </div>
                <div className="bg-[#4BBF48] rounded-full w-[fit-content] p-3 hover:cursor-pointer flex"
                    onMouseEnter={() => { setdownloadhover(true) }}
                    onMouseLeave={() => { setdownloadhover(false) }}
                >
                    <Link to="https://faq.whatsapp.com/5913398998672934" target="_blank">

                        <Icon icon={hover ? "nimbus:whatsapp" : "nimbus:whatsapp"} fontSize={24} className={`text-[white] icon-transition transition-all duration-300 ease-in-out `} />




                    </Link>
                </div>
            </div > */}
            <Outlet />

            <Footer />
        </>
    )
}

export default Layout