

const Expertise = () => {
  return (
   <>
   <div className="flex flex-col justify-center items-center gap-[2rem]">
                <h4 className="text-[4rem] font-medium">Our Services</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mx-4 lg:mx-72">
                    {/* <div className="bg-white hover:shadow-md border-[1px] border-borderColor rounded-2xl px-8 py-16 flex flex-col gap-4">
                        <Icon icon="streamline:global-learning" />
                        <p className="text-[2rem] font-medium leading-[2rem] ">Establish a Global Presence</p>

                        <p className="text-[1.25rem]">Effortlessly establish an international university office on your campus, enhancing global partnerships and educational opportunities.</p>

                    </div> */}
                    {Servicedata.map((data) => (
                        <div className=" custom-hover-effect bg-white border-[1px] border-borderColor rounded-2xl px-8 py-16 flex flex-col gap-6 hover:shadow-md">
                            {data.icon}
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[1.75rem] font-medium leading-[2rem] ">{data.title}</p>

                                <p className="text-[1.1rem] text-textColor font-light leading-tight">{data.description}</p>
                            </div>

                        </div>
                    ))}




                </div>
            </div>

   </>
  )
}

export default Expertise