import BlogHeroImg from "../../assets/Blog/blog-heroimg.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"
import blogFirst from "../../assets/Homepage/Blogs/blog-first.jpg"
import blogSecond from "../../assets/Homepage/Blogs/blog-second.png"
import blogThird from "../../assets/Homepage/Blogs/blog-third.png"
import { Link } from "react-router-dom"
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
            <div className="relative w-[100%] h-[100%] bg-white">
                <img src={BlogHeroImg} alt="" className="object-cover brightness-[40%] h-[100vh] w-[100%] " />
                <h1 className="absolute top-[46%] left-[49%] text-[1.75rem] text-white md:text-[2rem] lg:text-[4rem]">Blog</h1>
            </div>
            <div className="container mx-auto px-8 md:px-16 flex flex-col my-16 md:my-32 blog-div">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 justify-center bg-white">
                    {Blogdata.map((data) => (
                        <Link to="/post">
                            <div className="border-[1px] border-borderColor rounded-md md:rounded-xl px-4 pt-4 pb-8 box-hover-effect hover:shadow-sm bg-white">
                                <div className="overflow:hidden max-h-[15.25rem]">
                                    <img src={data.img} alt="" className="rounded-xl max-h-[15.25rem] object-cover w-[100%]" />
                                </div>
                                <div className="py-4 flex flex-col gap-1 items-start">
                                    <p className="text-[1.25rem] leading-[1.25rem] md:text-[1.5rem] md:leading-[1.6rem] font-medium text-textColor">{data.title}</p>
                                    <p className="text-textColor font-normal overflow-hidden whitespace-nowrap text-ellipsis w-[90%]">{data.description}</p>
                                    <Link to="/post">
                                        <button className="flex flex-row gap-0.5 items-center justify-end primary-button-second p-0 "> Read More
                                            <Icon icon="ci:arrow-up-md" className="text-textColor rotate-45" fontSize={20} />
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Blog