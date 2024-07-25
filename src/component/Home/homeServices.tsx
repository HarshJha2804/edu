import { Icon } from "@iconify/react/dist/iconify.js"

const Servicedata = [
    {
        icon: <Icon icon="streamline:global-learning" fontSize={48} className="text-primary" />,
        title: "Establish a global presence",
        description: "Effortlessly establish an international office on your campus, enhancing global partnerships and educational opportunities"
    },
    {
        icon: <Icon icon="nimbus:university" fontSize={48} className="text-primary" />,
        title: "Collaboration with esteemed universities",
        description: "Enabling schools, colleges, and learning centres to establish direct relationships with esteemed education providers worldwide,promoting global collaboration to enhance academic endeavours"
    },
    {
        icon: <Icon icon="ri:article-line" fontSize={48} className="text-primary" />,
        title: "Streamlined enrollment and career prospects",
        description: "We streamline enrollment procedures and maximise career prospects, ensuring a smooth transition into higher education"
    },
    {
        icon: <Icon icon="streamline:graph-arrow-increase" fontSize={48} className="text-primary" />,
        title: "Industry-leading insights and strategies",
        description: "We provide access to industry-leading insights and develop customized educational strategies aligned with your institution’s vision, ensuring competitiveness in the education sector."
    },

    {
        icon: <Icon icon="ri:shake-hands-line" fontSize={48} className="text-primary" />,
        title: "Comprehensive support and training",
        description: "We provide administrative and operational support to optimize efficiency, along with customised training for team members to meet market demands and enhance educational delivery."
    },
    {
        icon: <Icon icon="iconoir:privacy-policy" fontSize={48} className="text-primary" />,
        title: "Ensure data privacy integrity",
        description: "We uphold confidentiality through robust encryption and adherence to strict protocols, fostering a secure environment for stakeholders to confidently engage with our services"
    },
]

const HomeServices = () => {
    return (
        <>
            <div className="container mx-auto px-8 md:px-16 flex flex-col justify-center items-center gap-4 md:gap-[1rem]">
                <h3 className="text-[1.75rem] md:text-[3rem] lg:text-[3.5rem] font-medium">Our Services</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-8 xl:mr-auto xl:ml-auto ">
                    {/* <div className="bg-white hover:shadow-md border-[1px] border-borderColor rounded-2xl px-8 py-16 flex flex-col gap-4">
                        <Icon icon="streamline:global-learning" />
                        <p className="text-[2rem] font-medium leading-[2rem] ">Establish a Global Presence</p>

                        <p className="text-[1.25rem]">Effortlessly establish an international university office on your campus, enhancing global partnerships and educational opportunities.</p>

                    </div> */}
                    {Servicedata.map((data) => (
                        <div className=" custom-hover-effect bg-white border-[1px] border-borderColor rounded-2xl px-8 py-12 md:px-8 md:py-16 flex flex-col gap-4 hover:shadow-md">
                            {data.icon}
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[1.5rem] md:text-[1.75rem] font-medium leading-[1.5rem] md:leading-[2rem] ">{data.title}</p>
                                <p className="text-[1.2rem] text-textColor font-light leading-tight">{data.description}</p>
                            </div>

                        </div>
                    ))}




                </div>
            </div>

        </>
    )
}

export default HomeServices