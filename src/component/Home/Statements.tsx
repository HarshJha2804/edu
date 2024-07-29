import { Icon } from "@iconify/react/dist/iconify.js"
import Scrollanimation from "../Scrollanimation/Scrollanimation"

const Statements = () => {
    return (
        <>
            <div className="container mx-auto h-[100%]">
                <div className="mx-8 px-8 py-8 md:px-8 md:py-16  bg-[#690500]">
                    <div className="grid grid-cols-1 lg:grid-cols-[40%_auto] gap-16 md:justify-between lg:gap-0">

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 px-4 w-[fit-content] rounded-lg h-[max-content]">
                            <Scrollanimation>
                                <div className="grid">
                                    <Icon icon="mage:light-bulb" className="text-yellow-500 " fontSize={100} />
                                </div>
                            </Scrollanimation>
                            <div className="flex flex-col gap-2">
                                <p className=" text-white tracking-[0.15rem]">OUR MISION</p>
                                <h3 className="text-white">Building community and fostering growth</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 px-4 w-[fit-content] rounded-lg h-[max-content]">
                            <Scrollanimation>
                                <div className="grid">
                                    <Icon icon="octicon:goal-24" className="text-yellow-500" fontSize={100} />
                                </div>
                            </Scrollanimation>
                            <div className="flex flex-col gap-2">
                                <p className=" text-white tracking-[0.15rem]">OUR VISION</p>
                                <h3 className="text-white">EmpowerEdu enables you to envision possibilities beyond your current perspective</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div>

            </div>
        </>
    )
}

export default Statements