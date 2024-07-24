import { Icon } from "@iconify/react/dist/iconify.js"
import blogFirst from "../../assets/Homepage/Blogs/blog-first.jpg"
import blogSecond from "../../assets/Homepage/Blogs/blog-second.png"
import blogThird from "../../assets/Homepage/Blogs/blog-third.png"
// import BlogPage from "./BlogPage"
import { Link } from "react-router-dom"

// interface Blogdata {
//     img: string,
//     title: string,
//     description: string
// }
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
            <div className="flex flex-col justify-center items-center gap-4 md:gap-[1rem] font-medium">
                <h5 className="text-[1.75rem] md:text-[3rem]">Blog</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-8 gap-8 justify-center">
                    {Blogdata.map((data) => (
                        <div className="border-[1px] border-borderColor rounded-xl px-4 pt-4 pb-8 box-hover-effect hover:shadow-sm bg-white" >
                            <div className="overflow:hidden max-h-[15.25rem]">
                                <img src={data.img} alt="" className="rounded-xl max-h-[15.25rem] object-cover w-[100%]" />
                            </div>
                            <div className="py-4 flex flex-col gap-2 items-start">
                                <p className="text-[1.5rem] leading-[1.6rem] font-medium text-textColor">{data.title}</p>
                                <p className="text-textColor font-normal overflow-hidden whitespace-nowrap text-ellipsis w-[90%]">{data.description}</p>
                                <Link to='/post'>
                                    <button className="flex flex-row gap-0.5 items-center justify-end primary-button-second p-0 "> Read More
                                        <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Blog