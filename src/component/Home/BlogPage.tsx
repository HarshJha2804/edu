// import { useParams } from "react-router-dom"
// import { Icon } from "@iconify/react/dist/iconify.js"
import blogFirst from "../../assets/Homepage/Blogs/blog-first-thumbnail.png"
import { useParams } from "react-router-dom"
import blogSecond from "../../assets/Homepage/Blogs/blog-second.jpg"
import blogThird from "../../assets/Homepage/Blogs/blog-third.jpg"
const BlogPage = () => {
    interface Blogdata {
        id: number,
        img: string,
        title: string,
        intro: string,
        description: string
    }
    const { id } = useParams<{ id: string }>();
    // const name = "dfjkhsdfjkl"
    const Blogdata = [
        {
            id: 1,
            img: blogFirst,
            date: '8 August 2024',
            time: '10 min read',
            title: 'Successful SOP for Application',
            intro: "A statement of purpose is a written essay that showcases your academic background, research interests and career goals to the admissions committee. Its main objective is to demonstrate how your skills, experience and aspirations align with the specific program you're applying to, and how the program will help you achieve",
            description: `
    <div class="">
        <h2 class="p3" >What is a statement of purpose?</h2>
        <p>
            A statement of purpose is a written essay that showcases your academic background, research interests and career goals to the admissions committee. Its main objective is to demonstrate how your skills, experience and aspirations align with the specific program you're applying to, and how the program will help you achieve your academic and professional objectives. Essentially, it's your opportunity to tell the admissions committee why you're the right fit for their program and why their program is the right fit for you.
        </p>
    </div>

    <div class="section">
        <h2 class="p3">How to write a statement of purpose?</h2>
        <p>
            Before writing your statement of purpose, thoroughly research your desired programs and schools to:
        </p>
        <ul>
            <li>Understand their mission statements and align your values with theirs.</li>
            <li>Identify faculty members whose research interests match yours, and note their work.</li>
            <li>Show how your goals and values align with the program's, demonstrating a strong fit.</li>
            <li>Consider reaching out to potential faculty mentors for collaboration.</li>
            <li>Carefully follow each school's specific guidelines, prompts, and word counts.</li>
        </ul>
        <p>
            This will help you tailor your statement of purpose to each program, increasing your chances of a successful application.
        </p>
    </div>

    <div class="section">
        <h2 class="p3">How to structure a statement of purpose?</h2>
        <p>
            Before writing your statement of purpose, researching your desired programs and schools to understand their mission statements is essential. Your statement should cover:
        </p>
        <ul>
            <li><strong>WHAT:</strong> Your academic background, accomplishments, research questions and goals.</li>
            <li><strong>WHY:</strong> Your motivations, why this program and why these professors.</li>
            <li><strong>HOW:</strong> Your plan for finding answers, utilizing program resources and contributing to the field.</li>
        </ul>
        <p>
            While there's no one "correct" structure, most statements follow an intro-body-conclusion pattern. The intro should clearly state your intentions, while the body provides specific evidence of your qualifications, fit with the program and goals. Be specific, thorough and show that you've done your homework.
        </p>
        <p>In the main body:</p>
        <ul>
            <li>Address your academic and professional preparation.</li>
            <li>Show your fit with the program's mission and values.</li>
            <li>Discuss your strengths, weaknesses and career plans.</li>
            <li>Specify what you propose to study and with whom.</li>
        </ul>
        <p>
            For doctoral programs, demonstrate your ability to contribute original work to the field. Naming professors whose work aligns with yours is crucial and researching their work thoroughly will help you demonstrate your seriousness about the program.
        </p>
        <p>
            Keep your statement concise, focused and tailored to each program, using your transcript, resume and letters of recommendation to support your application.
        </p>
    </div>

    <div class="section">
        <h2 class="p3">Essential elements of a strong statement of purpose</h2>
        <ul>
            <li><strong>Clear Articulation of Goals and Interests:</strong> Specifically outline your objectives and what drives your passion for the field. Be precise and use examples to demonstrate your enthusiasm.</li>
            <li><strong>Evidence of Past Experience and Success:</strong> Showcase your qualifications by highlighting relevant undergraduate studies, professional experience and achievements. Use concrete examples to demonstrate your ability to succeed in graduate study.</li>
            <li><strong>Interest and Fit with the Program:</strong> Explain why you and the program are a good match. Identify specific professors, methodologies or curriculum aspects that align with your work and interests.</li>
            <li><strong>Strong Writing:</strong> Demonstrate effective communication skills by writing clearly, concisely and logically. Show that you can express your ideas in a descriptive yet succinct manner, within the recommended length.</li>
        </ul>
    </div>

    <div class="section">
        <h2 class="p3">Strategies to Write a Powerful Statement of Purpose</h2>
        <div style="padding-left:2rem; padding-top:0.5rem">
        <ol style="list-style:number">
            <li>Write stories. Not statements</li>
            <li>Quantify your stories</li>
            <li>Be Specific</li>
            <li>Customize your essay</li>
            <li>Use a formal but conversational tone</li>
            <li>Decide how you want to portray yourself and Learn How to Portray Indirectly.</li>
            <li>Don’t Create Stories. Be Yourself</li>
            <li>Address Your Problems</li>
            <li>Do Your Homework</li>
            <li>Proofread, Edit, and Re-edit. Ask Friends and Family To Grade Your Essay</li>
            <li>Take Advice From Professors.</li>
        </ol>
        </div>
    </div>

    <div class="section">
        <h2  class="p3">How Can Your Statement Of Purpose Stand Out From The Crowd?</h2>
        <p>
            Consider the key questions that admissions committees typically want answered. You should clearly explain what you want to study and why, demonstrating a strong motivation for pursuing a graduate degree in your chosen field. Show how your academic and professional background has prepared you for this program and highlight any relevant experience or skills you possess.
        </p>
        <p>
            Explain why you're interested in this specific program and university, and what you hope to achieve by studying there. Describe your career plans after graduation, and how this degree will help you attain your goals. If you're interested in working with a particular professor, explain why their research resonates with you.
        </p>
        <p>
            Showcase your unique strengths, skills and perspectives and demonstrate how you'll contribute to the university community. Share your personal qualities, hobbies and interests to give the committee a sense of who you are beyond your academic credentials. Finally, explain how you think you'll fit in with the university's culture and student community.
        </p>
    </div>

    <div class="section">
        <h2  class="p3">Conclusion</h2>
        <p>
            In conclusion, a statement of purpose is a crucial component of a graduate school application, serving as an opportunity to showcase your academic background, research interests and career goals to the admissions committee. To write a strong statement, research your desired programs and schools, understand their mission statements and identify faculty members whose research interests align with yours. Clearly articulate your goals and interests, provide evidence of past experience and success, demonstrate your fit with the program, and showcase strong writing skills.
        </p>
        <p>
            Ultimately, a well-crafted statement of purpose can increase your chances of a successful application by demonstrating your passion, qualifications and fit with the program. By following these guidelines and strategies, you can create a compelling statement that showcases your potential for success and helps you stand out from the crowd.
        </p>
    </div>`,
        },
        {
            id: 2,
            img: blogSecond,
            date: '22 July 2024',
            time: '10 min read',
            title: 'Career options in commerce without maths',
            intro: "",
            description: "In the realm of commerce, the role of mathematics is undeniably significant, particularly in fields such as finance and accounting. However, the commerce sector is vast and multifaceted, offering numerous career opportunities for those who may not have a strong inclination toward mathematics. Many individuals with diverse skill sets and interests can find fulfilling careers in commerce that do not primarily rely on mathematical prowess.One prominent career path for those less inclined toward math is marketing and sales.This field thrives on creativity, strategic thinking, and strong communication skills.Marketing professionals are responsible for developing strategies to enhance brand awareness, attract customers, and drive sales.They craft compelling campaigns and analyze market trends to tailor their approaches effectively.Sales executives, on the other hand, focus on engaging directly with customers to understand their needs and offer suitable products or services.Both roles emphasize interpersonal skills and strategic planning over numerical analysis.Human Resource(HR) management presents another avenue where mathematical skills are not the central focus.HR professionals are integral to recruiting, training, and managing employees.Their roles involve fostering a positive work environment, handling employee relations, and implementing development programs.An HR manager’s primary responsibilities include overseeing recruitment processes, resolving conflicts, and ensuring employee satisfaction.These tasks require strong organizational and interpersonal skills rather than advanced mathematical knowledge.Business administration is a broad field that encompasses managing business operations and strategy.Business administrators are responsible for overseeing the day- to - day functions of a company, ensuring that operations run smoothly and efficiently.Project managers, who fall under this category, plan and execute projects, ensuring they meet deadlines and stay within budget.Although some aspects of business administration involve financial oversight, the focus is more on organizational skills, strategic planning, and leadership.Public relations(PR) is another dynamic field where mathematical skills are not essential.PR professionals manage and enhance the public image of individuals or organizations through strategic communication.They develop communication strategies, handle media relations, and coordinate events to promote a positive image.The role of a PR specialist requires creativity, effective communication, and media savvy rather than numerical aptitude.Entrepreneurship offers a thrilling career path for those who prefer not to focus heavily on mathematics.Entrepreneurs start and manage their own businesses, which involves a blend of creativity, risk - taking, and business acumen.While some aspects of running a business involve financial management, the core skills needed for entrepreneurship include innovation, problem - solving, and strategic thinking.Entrepreneurs often wear multiple hats, from marketing and sales to operations and customer service.Management consulting is a field that involves providing expert advice to organizations to help them improve performance and solve complex problems.Management consultants analyze business issues, develop solutions, and recommend strategies for improvement.This role relies more on analytical thinking and problem - solving skills than on mathematical calculations.Consultants must understand business dynamics, industry trends, and organizational behavior to offer valuable insights. Finally, international business presents opportunities for those interested in global trade and cross - cultural interactions.This field involves managing and conducting trade between countries, requiring an understanding of global markets and cultural nuances.International business managers oversee operations and strategies for businesses in international markets, while export/import coordinators handle logistics and documentation for cross-border trade. The emphasis here is on global strategy and cultural awareness rather than advanced math.In conclusion, while mathematics is a crucial component in many commerce - related careers, it is not a prerequisite for success in the field.The commerce sector is rich with opportunities that value other skills and attributes, such as creativity, communication, strategic thinking, and interpersonal skills.By exploring these diverse career paths, individuals can find rewarding and fulfilling roles in commerce that align with their strengths and interests, proving that a passion for commerce does not necessarily require a strong focus on mathematics."
        },
        {
            id: 3,
            img: blogThird,
            date: '24 July 2024',
            time: '10 min read',
            title: 'Know everything about student life in australia',
            intro: "",
            description: "Studying in Australia offers a unique and enriching experience, combining high-quality education with vibrant cultural experiences. Known for its welcoming environment, diverse student population, and beautiful landscapes, Australia is a popular destination for international students. This guide provides an in-depth look at various aspects of student life in Australia, from academic experiences to social activities and living conditions.Australian universities are renowned for their academic excellence and innovative teaching methods.With a range of courses and programs offered across numerous disciplines, students have the opportunity to engage in cutting- edge research and practical learning experiences.The academic year in Australia typically runs from late February to November, divided into two semesters with a break in between.Classes in Australian universities often involve a mix of lectures, tutorials, and practical sessions.Students are encouraged to engage actively in their studies, participate in discussions, and work collaboratively on projects.Assessment methods vary but generally include exams, assignments, group work, and presentations.The emphasis on independent learning fosters critical thinking and problem - solving skills.Cultural DiversityOne of the most appealing aspects of studying in Australia is its cultural diversity.With students from all over the world, Australian campuses are melting pots of different cultures, languages, and perspectives.This diversity enriches the learning experience and provides opportunities for students to build global networks and friendships.Australian universities often celebrate this diversity through various cultural events, festivals, and international student support services.Students can participate in cultural clubs, international student organizations, and events that promote cross - cultural understanding and exchange.Student life in Australia is not just about academics; it also offers a rich array of social and recreational activities.Most universities have vibrant student unions or societies that organize events, sports, and social gatherings.These activities range from cultural festivals and music concerts to sports competitions and community service projects.Australia’s natural beauty provides ample opportunities for outdoor activities.Students can explore stunning beaches, national parks, and hiking trails.Popular recreational activities include surfing, swimming, bushwalking, and barbecuing with friends.Major cities like Sydney, Melbourne, and Brisbane also offer a bustling nightlife with cafes, restaurants, theaters, and music venues.Finding suitable accommodation is an important aspect of student life in Australia.Options range from on - campus residences and student apartments to shared houses and private rentals.University accommodation provides a convenient and supportive environment, often including facilities like study rooms, common areas, and social events.Off-campus housing offers more independence and can be more affordable, especially when shared with other students.Many students use online platforms or university housing services to find suitable rental properties.It’s advisable to consider factors such as location, transport links, and proximity to campus when choosing accommodation.Cost of LivingThe cost of living in Australia varies depending on the city and lifestyle.Major cities like Sydney and Melbourne tend to have higher living costs compared to smaller towns.Expenses include rent, utilities, groceries, transportation, and entertainment.International students are allowed to work part - time during their studies, which can help offset living costs.The Australian government also provides various scholarships and financial aid options to support international students.It’s important for students to budget carefully and plan their finances to manage living expenses effectively.Health and WellbeingAustralia places a strong emphasis on student health and wellbeing.Universities offer various health services, including medical centers, counseling, and mental health support.The country’s healthcare system is robust, with international students required to have Overseas Student Health Cover(OSHC) to access medical services.Maintaining a balanced lifestyle is crucial for student wellbeing.This includes eating healthy, staying active, and seeking support when needed.Universities often have programs and resources to help students manage stress, academic pressures, and personal challenges.Travel and ExplorationAustralia’s diverse landscape makes it an ideal destination for travel and exploration.Students have the opportunity to visit iconic landmarks such as the Great Barrier Reef, Uluru, and the Sydney Opera House.Weekend trips and vacation breaks allow students to experience different regions and cultures within Australia.Additionally, Australia’s well - connected transport system makes it easy to travel between cities and explore the country.Students often take advantage of travel discounts and student deals to make the most of their time in Australia. Conclusion Student life in Australia offers a dynamic and rewarding experience that combines high - quality education with a rich cultural and social environment.With opportunities for academic growth, cultural exchange, and personal development, studying in Australia provides a comprehensive and enjoyable experience.Whether exploring vibrant cities, engaging in outdoor adventures, or building lasting friendships, students can look forward to a fulfilling and memorable time in this beautiful country."
        }
    ]
    // console.log(name);

    // console.log(Blogdata, id, "sdfjkhkjasd")
    const blog = id ? Blogdata.find(blog => blog.id === parseInt(id, 10)) : undefined;
    // console.log(Blogdata, id, "sdfjkhkjasd")
    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <>

            <div className="pt-[5rem] md:pt-[10rem] bg-white">
                {/* {Blogdata.map((data) => ( */}
                <div className="flex flex-col gap-16 container p-8 mx-auto">
                    <div className="flex flex-col gap-8">
                        <p className="text-[1.5rem] md:text-[3rem] font-medium leading-[1.5rem] md:leading-[2rem] text-black">{blog.title}</p>
                        <p className="text-[1.2rem]  text-textColor">
                            {blog.intro.substring(0, 300)}...
                            {/* {data.description.length > maxLength ? `${data.description.substring(0, maxLength)}` :} */}
                        </p>
                        <hr />
                    </div>
                    <div className="h-[80vh] overflow-hidden rounded-lg">
                        <img src={blog.img} alt="" className="object-cover w-[100%]" />
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-[2rem]" dangerouslySetInnerHTML={{ __html: blog.description }} />
                        {/* <p className="text-[1.2rem] text-textColor font-light">{blog.description}</p> */}
                    </div>
                </div>


            </div>
        </>
    )
}

export default BlogPage