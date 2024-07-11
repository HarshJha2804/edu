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
import clglogo21 from '../../assets/Homepage/Collegesection/clg-logo21.png'
import clglogo22 from '../../assets/Homepage/Collegesection/clg-logo22.png'
import clglogo23 from '../../assets/Homepage/Collegesection/clg-logo23.png'
import clglogo24 from '../../assets/Homepage/Collegesection/clg-logo24.png'
import clglogo25 from '../../assets/Homepage/Collegesection/clg-logo25.png'
import clglogo26 from '../../assets/Homepage/Collegesection/clg-logo26.png'
import clglogo27 from '../../assets/Homepage/Collegesection/clg-logo27.png'
import clglogo28 from '../../assets/Homepage/Collegesection/clg-logo28.png'
import clglogo29 from '../../assets/Homepage/Collegesection/clg-logo29.png'
import clglogo30 from '../../assets/Homepage/Collegesection/clg-logo30.png'
import clglogo31 from '../../assets/Homepage/Collegesection/clg-logo31.png'
import clglogo32 from '../../assets/Homepage/Collegesection/clg-logo32.png'


const ClgLogoOne = [
    { image: clglogo1 },
    { image: clglogo2 },
    { image: clglogo3 },
    { image: clglogo4 },
    { image: clglogo5 },
    { image: clglogo6 },
    { image: clglogo7 },
    { image: clglogo8 },
    { image: clglogo9 },
    { image: clglogo10 },



]

const ClgLogoTwo = [

    { image: clglogo11 },
    { image: clglogo12 },
    { image: clglogo13 },
    { image: clglogo14 },
    { image: clglogo15 },
    { image: clglogo16 },
    { image: clglogo17 },
    { image: clglogo18 },
    { image: clglogo19 },
    { image: clglogo20 },
]

const ClgLogoThree = [
    { image: clglogo21 },
    { image: clglogo22 },
    { image: clglogo23 },
    { image: clglogo24 },
    { image: clglogo25 },
    { image: clglogo26 },
    { image: clglogo27 },
    { image: clglogo28 },
    { image: clglogo29 },
    { image: clglogo30 },
    { image: clglogo31 },
    { image: clglogo32 },
]


const Universitysection = () => {
    return (
        <>
            <div className='grid grid-rows-3 gap-[2rem] whitespace-nowrap overflow-hidden'>
                <div className='maxWidth-[80vh] overflow-hidden mask'>
                    <div className='flex flex-row shrink-0 justify-start gap-[1.75rem] animate-loop-scroll-right flex-nowrap overflow-clip'>
                        {ClgLogoOne.map((data) => (
                            <div className='left college-logo-div width'>
                                <img src={data.image} alt="College Logo"  className='h-[38.02px]' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row shrink-0 justify-end gap-[1.75rem] animate-loop-scroll-left '>
                    {ClgLogoTwo.map((data) => (
                        <div className="right college-logo-div ">
                            <img src={data.image} alt="College Logo" className='h-[38.02px]' />
                        </div>
                    ))}
                </div>
                <div className='flex flex-row shrink-0 justify-start gap-[1.75rem] animate-loop-scroll-right overflow-hidden'>
                    {ClgLogoThree.map((data) => (
                        <div className="left college-logo-div">
                            <img src={data.image} alt="College Logo" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Universitysection