import BlogHeroImg from "../../assets/Blog/blog-heroimg.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"
import blogFirst from "../../assets/Homepage/Blogs/blog-first.png"
import blogSecond from "../../assets/Homepage/Blogs/blog-second.png"
import blogThird from "../../assets/Homepage/Blogs/blog-third.png"
const Blog = () => {
    const Blogdata = [
        {
            img: blogFirst,
            title: 'MBA in UK without work experience',
            description: "Pursuing an MBA (Master of Business Administration) is a significant step in advancing your career and gaining valuable business skills. Traditionally, MBA programs require candidates to have several years of work experience"
        },
        {
            img: blogSecond,
            title: 'Career options in Commerce without Mathematics',
            description: "Commerce is a diverse field offering numerous career opportunities. Many students shy away from commerce due to the misconception that mathematics is a mandatory subject."
        },
        {
            img: blogThird,
            title: 'Know everything about student life in Australia',
            description: "Australia is a popular destination for international students due to its high-quality education system, diverse cultural experiences, and stunning landscapes. Here's everything you need to know about student life in Australia"
        }
    ]
    return (
        <>
            <div className="relative w-[100%] h-[100%]">
                <img src={BlogHeroImg} alt="" className="object-cover brightness-[40%] h-[100vh] w-[100%]" />
                <h1 className="absolute top-[46%] left-[49%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">Blog</h1>
            </div>
            <div className="flex flex-col md:mt-32">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row mx-8 md:mx-[6rem] lg:mx-[9rem] xl:mx-[12rem] md:gap-8 justify-center">
                    {Blogdata.map((data) => (
                        <div className="border-[1px] border-borderColor rounded-xl px-4 pt-4 pb-8 box-hover-effect hover:shadow-sm">
                            <img src={data.img} alt="" className="w-[100%] rounded-xl" />
                            <div className="py-4 flex flex-col gap-2 items-start">
                                <p className="text-[1.5rem] leading-[1.6rem] font-medium text-textColor">{data.title}</p>
                                <p className="text-textColor font-normal overflow-hidden whitespace-nowrap text-ellipsis w-[90%]">{data.description}</p>
                                <button className="flex flex-row gap-0.5 items-center justify-end primary-button-second p-0 "> Read More
                                    <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} />
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Blog