import clglogo1 from '../../assets/Homepage/Collegesection/clg-logo1.png'
import clglogo2 from '../../assets/Homepage/Collegesection/clg-logo2.png'
import clglogo3 from '../../assets/Homepage/Collegesection/clg-logo3.png'
import clglogo4 from '../../assets/Homepage/Collegesection/clg-logo4.png'
import clglogo5 from '../../assets/Homepage/Collegesection/clg-logo5.png'
import clglogo6 from '../../assets/Homepage/Collegesection/clg-logo6.png'
import clglogo7 from '../../assets/Homepage/Collegesection/clg-logo7.png'
import clglogo8 from '../../assets/Homepage/Collegesection/clg-logo8.png'
import clglogo9 from '../../assets/Homepage/Collegesection/clg-logo9.png'
import clglogo10 from '../../assets/Homepage/Collegesection/clg-logo10.png'
import clglogo11 from '../../assets/Homepage/Collegesection/clg-logo11.png'
import clglogo12 from '../../assets/Homepage/Collegesection/clg-logo12.png'
import clglogo13 from '../../assets/Homepage/Collegesection/clg-logo13.png'
import clglogo14 from '../../assets/Homepage/Collegesection/clg-logo14.png'
import clglogo15 from '../../assets/Homepage/Collegesection/clg-logo15.png'
import clglogo16 from '../../assets/Homepage/Collegesection/clg-logo16.png'
import clglogo17 from '../../assets/Homepage/Collegesection/clg-logo17.png'
import clglogo18 from '../../assets/Homepage/Collegesection/clg-logo18.png'
import clglogo19 from '../../assets/Homepage/Collegesection/clg-logo19.png'
import clglogo20 from '../../assets/Homepage/Collegesection/clg-logo20.png'


const ClgLogoOne = [
    { image: clglogo1 },
    { image: clglogo2 },
    { image: clglogo3 },
    { image: clglogo4 },
    { image: clglogo5 },
    { image: clglogo6 },




]

const ClgLogoTwo = [
    { image: clglogo7 },
    { image: clglogo8 },
    { image: clglogo9 },
    { image: clglogo10 },
    { image: clglogo11 },
    { image: clglogo12 },
    { image: clglogo13 },
    { image: clglogo14 },

]

const ClgLogoThree = [
    { image: clglogo15 },
    { image: clglogo16 },
    { image: clglogo17 },
    { image: clglogo18 },
    { image: clglogo19 },
    { image: clglogo20 },
]


const Universitysection = () => {
    return (
        <>
          <div className='flex flex-col gap-[2rem]'>
          <div className='flex flex-row justify-start gap-[1.75rem] animate-loop-scroll-left'>
                {ClgLogoOne.map((data) => (
                    <div className="inline college-logo-div">
                        <img src={data.image} alt="" />
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-end gap-[1.75rem] animate-loop-scroll-right'>
                {ClgLogoTwo.map((data) => (
                    <div className="right college-logo-div">
                        <img src={data.image} alt="" />
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-start gap-[1.75rem] animate-loop-scroll-left'>
                {ClgLogoThree.map((data) => (
                    <div className="left college-logo-div">
                        <img src={data.image} alt="" />
                    </div>
                ))}
            </div>
          </div>
        </>
    )
}

export default Universitysection