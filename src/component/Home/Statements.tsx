// import { Icon } from "@iconify/react/dist/iconify.js"

const Statements = () => {
    return (
        <>
            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8 md:justify-between">

                    <div className="flex flex-col gap-4 p-8 border-[1px] border-[borderColor] w-[fit-content ] rounded-lg">
                        <div className="flex gap-2 items-center">
                            {/* <Icon icon="octicon:goal-16" className="text-textColor" fontSize={24} /> */}
                            <p className="title">Our Mision</p>
                        </div>
                        <h2 className="">Building community and <br /> fostering growth</h2>
                    </div>
                    <div className="flex flex-col gap-4 p-8 border-[1px] border-[borderColor] w-[fit-content ] rounded-lg">
                        <p className="title">Our Vision</p>
                        <h2>EmpowerEdu enables you to envision possibilities beyond your current perspective</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Statements