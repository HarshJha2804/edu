import star from "../../assets/Homepage/Numbers/star.png"
import numberFirst from "../../assets/Homepage/Numbers/number-first.png"
import numberSecond from "../../assets/Homepage/Numbers/number-second.png"
import numberThird from "../../assets/Homepage/Numbers/number-third.png"
import numberFourth from "../../assets/Homepage/Numbers/number-fourth.png"
const Numbers = () => {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-[2fr_10rem_10rem] lg:px-72 gap-[1rem]">
                <div className="bg-primary flex flex-col gap-2.5 px-8 py-6 rounded-[1.75rem]">
                    <img src={star} alt="star" style={{ width: "64px" }} />
                    <p className="text-[0.75] md:text-[1.5rem] text-white">Universities</p>
                    <p className="text-[1] md:text-[5rem] text-white leading-[4.5rem] font-medium">100+</p>
                    <p className="text-white text-[1.25rem] leading-6">Collaborations with top-tier global universities</p>

                </div>
                <div className="relative rounded-[1.75rem]" >
                    <img src={numberFirst} alt="" className="rounded-[1.75rem] object-fill h-[100%]" />
                    <div className="absolute top-8 left-6">
                        <button className="primary-button">Top Trending Courses</button>
                    </div>
                </div>

                <div className="relative rounded-[1.75rem]" >
                    <img src={numberSecond} alt="" className="rounded-[1.75rem] object-fill h-[100%]" />
                    <div className="absolute bottom-6 left-6">
                        <button className="primary-button">Get into top university</button>
                    </div>
                </div>
                <div className=" flex flex-col gap-2.5 px-8 py-6 rounded-[1.75rem] row-span-2 bg-secondaryColor justify-end">
                    <p className="text-[0.75] md:text-[1.5rem] text-white">countries available</p>
                    <p className="text-[1] md:text-[5rem] text-white leading-[4.5rem] font-medium">15+</p>
                    <p className="text-white text-[1.25rem] leading-6">Experience education in vibrant cultures</p>

                </div>

                <div className="relative rounded-[1.75rem] w-[100%]" >
                    <img src={numberThird} alt="" className="rounded-[1.75rem] object-cover " />
                  
                </div>

                <div className=" flex flex-col gap-2.5 px-8 py-6 rounded-[1.75rem] row-span-2 bg-secondaryColorSecond justify-end">
                    <p className="text-[0.75] md:text-[1.5rem] text-white">Courses</p>
                    <p className="text-[1] md:text-[5rem] text-white leading-[4.5rem] font-medium">7500+</p>
                    <p className="text-white text-[1.25rem] leading-6">Discover countless academic opportunities</p>

                </div>
                <div className="relative rounded-[1.75rem] w-[100%]" >
                    <img src={numberFourth} alt="" className="rounded-[1.75rem] object-cover" />
             
                </div>

            </div>
        </>
    )
}

export default Numbers