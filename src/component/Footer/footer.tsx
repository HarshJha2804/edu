import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"


const Footer = () => {
  const socialMediaIcons = [
    { icon: <Icon icon="ri:twitter-x-fill" className="text-black" fontSize="24px" />, link: "#" },
    { icon: <Icon icon="ri:facebook-fill" className="text-black" fontSize="24px" />, link: "#" },
    { icon: <Icon icon="ri:instagram-line" className="text-black" fontSize="24px" />, link: "#" },
    { icon: <Icon icon="ri:youtube-line" className="text-black" fontSize="24px" />, link: "#" },

  ]

  return (
    <>
      <div className="flex flex-col justify-between items-start px-[4rem] md:px-[8rem] lg:px-[10rem] bg-footerColor md:mt-[8rem] pb-2 md:pb-8">
        {/* <div className="grid grid-rows-[auto auto] lg:grid-cols-2 gap-10 lg:flex-row w-[100%] py-[8rem]"> */}
        <div className="flex flex-col md:flex-row justify-between py-[4rem] md:py-[8rem] w-[100%]">
          <div className=" w-[100%]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Link to="/">
                  {/* <svg height='2rem' viewBox="0 0 869 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#1C2354" clip-rule="evenodd" d="M6.68999 154.34C7.07999 155.05 7.66999 155.4 8.44999 155.4V155.41H114.55L113.85 138.51C113.54 138.82 110.6 140.11 105.05 142.38C99.49 144.65 92.38 147 83.69 149.42C75 151.85 67.69 153.06 61.74 153.06L33.8 153.53L33.33 76.53H57.28C62.13 76.69 66.43 82.09 70.19 92.73L70.89 93.67H71.36C72.14 93.67 72.53 93.2 72.53 92.26V61.27C72.53 60.49 72.14 60.1 71.36 60.1L70.42 60.57L70.19 60.8C66.44 69.57 62.13 73.95 57.28 73.95L33.81 74.42L33.34 2.35001H61.74C67.69 2.35001 74.89 3.51999 83.34 5.87C91.79 8.22 99.07 10.56 105.17 12.91C111.27 15.26 114.4 16.43 114.56 16.43L114.09 0H8.44999C7.66999 0 7.12 0.389999 6.80999 1.17C6.33999 1.8 6.73 2.84999 7.98 4.34C9.23 5.83 10.56 7.63 11.97 9.74001C13.38 11.85 14.08 13.93 14.08 15.96V139.66C14.08 142.64 11.73 146.86 7.03999 152.34C6.40999 152.97 6.29999 153.64 6.68999 154.34ZM643.32 269.851C642.91 269.851 642.6 269.661 642.39 269.291C642.18 268.921 642.25 268.571 642.58 268.241C645.05 265.351 646.29 263.131 646.29 261.561V196.381C646.29 195.311 645.92 194.221 645.18 193.101C644.44 191.991 643.74 191.041 643.08 190.261C642.42 189.481 642.21 188.921 642.46 188.591C642.62 188.181 642.91 187.971 643.33 187.971H698.99L699.24 196.631C699.16 196.631 697.51 196.011 694.29 194.781C691.07 193.551 687.24 192.311 682.79 191.071C678.34 189.831 674.54 189.221 671.41 189.221H656.45L656.7 227.191L669.07 226.941C671.62 226.941 673.89 224.631 675.87 220.011L675.99 219.891L676.49 219.641C676.9 219.641 677.11 219.851 677.11 220.261V236.591C677.11 237.081 676.9 237.331 676.49 237.331H676.24L675.87 236.841C673.89 231.231 671.62 228.391 669.07 228.311H656.45L656.7 268.881L671.42 268.631C674.55 268.631 678.41 267.991 682.98 266.711C687.56 265.431 691.31 264.201 694.23 263.001C697.16 261.811 698.7 261.131 698.87 260.961L699.24 269.861H643.32V269.851ZM704.91 269.851C704.5 269.851 704.19 269.661 703.98 269.291C703.77 268.921 703.84 268.571 704.17 268.241C706.64 265.351 707.88 263.131 707.88 261.561V196.381C707.88 195.311 707.51 194.221 706.77 193.101C706.03 191.991 705.33 191.041 704.67 190.261C704.01 189.481 703.8 188.921 704.05 188.591C704.21 188.181 704.5 187.971 704.92 187.971H727.8C740.09 187.971 750.23 191.541 758.22 198.671C766.22 205.801 770.22 214.851 770.22 225.821C770.22 231.681 769.37 237.071 767.68 242.021C765.99 246.971 763.7 251.111 760.82 254.451C757.93 257.791 754.59 260.661 750.8 263.051C747.01 265.441 743.03 267.171 738.87 268.241C734.7 269.311 730.48 269.851 726.19 269.851H704.91ZM718.27 189.461V268.861L726.31 268.611C736.53 268.611 744.39 265.021 749.87 257.851C755.35 250.681 758.09 240.371 758.09 226.931C758.09 220.751 757.2 215.201 755.43 210.301C753.66 205.401 751.29 201.461 748.32 198.491C745.35 195.521 742.09 193.281 738.55 191.751C735 190.231 731.33 189.461 727.54 189.461H718.27ZM789.81 244.011C789.77 242.941 789.75 241.621 789.75 240.051L789.88 196.151C789.88 194.591 791.12 192.441 793.59 189.721C793.83 189.391 793.87 189.021 793.71 188.611C793.54 188.201 793.25 187.991 792.84 187.991H776.51C776.09 187.991 775.8 188.201 775.64 188.611C775.39 188.941 775.6 189.501 776.26 190.281C776.92 191.061 777.62 192.011 778.36 193.121C779.1 194.241 779.47 195.331 779.47 196.401V240.061C779.47 242.121 779.78 244.411 780.4 246.921C781.02 249.441 782.11 252.121 783.68 254.961C785.25 257.801 787.14 260.381 789.37 262.691C791.6 265.001 794.52 266.921 798.15 268.441C801.78 269.971 805.78 270.731 810.15 270.731H810.27C814.72 270.731 818.74 269.981 822.33 268.501C825.92 267.011 828.82 265.141 831.05 262.871C833.28 260.601 835.14 258.041 836.62 255.201C838.1 252.361 839.15 249.661 839.77 247.101C840.39 244.551 840.7 242.201 840.7 240.051V196.141C840.7 194.581 841.94 192.431 844.41 189.711C844.74 189.381 844.81 189.011 844.6 188.601C844.39 188.191 844.08 187.981 843.67 187.981H835.88C835.46 187.981 835.17 188.191 835.01 188.601C834.84 189.021 835.44 190.081 836.8 191.821C838.16 193.561 838.84 195.081 838.84 196.401V240.061C838.84 242.041 838.58 244.181 838.04 246.491C837.51 248.801 836.56 251.251 835.2 253.851C833.84 256.451 832.17 258.801 830.19 260.901C828.21 263.001 825.62 264.731 822.4 266.091C819.18 267.451 815.64 268.131 811.76 268.131C808.71 268.131 805.99 267.721 803.6 266.891C801.21 266.071 799.25 265.081 797.73 263.921C796.2 262.761 794.9 261.241 793.83 259.341C792.76 257.451 791.97 255.751 791.48 254.271C790.99 252.791 790.6 250.981 790.31 248.831C790.02 246.691 789.85 245.081 789.81 244.011ZM629.79 224.961H0V231.521H629.79V224.961ZM283.79 140.14H283.57C283.57 147.03 285.45 151.41 289.2 153.29V154.23H257.98V153.29C262.05 151.26 264.08 147.03 264.08 140.61L263.85 72.77C263.85 65.26 261.5 58.65 256.81 52.93C252.11 47.22 245.38 44.36 236.62 44.36C229.42 44.36 221.05 48.74 211.5 57.51C214.79 63.93 216.43 71.05 216.43 78.87V140.14C216.43 147.03 218.31 151.41 222.06 153.29V154.23H190.84V153.29C194.75 151.26 196.71 147.03 196.71 140.61V72.77C196.71 64.79 194.36 58.06 189.67 52.58C184.98 47.1 179.11 44.29 172.06 44.13C165.02 43.98 157.43 47.5 149.29 54.69V140.14C149.29 147.03 151.09 151.41 154.69 153.29V154.23H123.47V153.29C127.54 151.41 129.57 147.19 129.57 140.61C129.41 102.74 129.34 77.07 129.34 63.61C129.34 60.01 128.83 56.92 127.81 54.34C126.79 51.76 125.81 50.08 124.88 49.29L123.47 47.88V46.47L149.29 41.77V50.93C157.11 43.11 166.27 39.19 176.76 39.19C192.25 39.19 203.36 44.51 210.09 55.15C221.2 44.51 232.47 39.19 243.89 39.19C257.04 39.19 266.97 42.91 273.7 50.34C280.43 57.78 283.79 67.28 283.79 78.86V140.14ZM390.26 55.98C380.17 44.63 367.84 38.96 353.29 38.96C342.02 38.96 332.79 42.25 325.59 48.81V41.77L299.77 46.47V47.88L301.41 49.29C302.35 50.08 303.29 51.76 304.23 54.34C305.17 56.92 305.64 60.01 305.64 63.61V183.33C305.64 189.91 303.68 194.13 299.77 196.01V197.18H330.99V196.24C327.39 194.2 325.59 189.82 325.59 183.09V147.17C336.23 152.97 346.09 155.86 355.17 155.86C369.72 155.86 381.73 150.39 391.2 139.43C400.66 128.48 405.4 114.63 405.4 97.88C405.4 81.3 400.35 67.33 390.26 55.98ZM372.18 58.45C379.15 68.46 382.63 81.69 382.63 98.12C382.63 105.32 381.54 112.79 379.35 120.55C377.16 128.3 373.28 135.34 367.73 141.68C362.17 148.02 355.64 151.19 348.13 151.19C340.93 151.19 333.41 148.76 325.59 143.91V52.12C330.91 46.33 337.87 43.43 346.48 43.43C356.65 43.43 365.21 48.44 372.18 58.45ZM471.6 39.2C486.62 39.2 499.45 44.87 510.1 56.22C520.74 67.57 526.06 81.3 526.06 97.42C526.06 113.54 520.74 127.31 510.1 138.74C499.46 150.17 486.63 155.88 471.6 155.88C456.42 155.88 443.51 150.17 432.87 138.74C422.23 127.32 416.91 113.55 416.91 97.42C416.91 81.3 422.23 67.57 432.87 56.22C443.51 44.87 456.42 39.2 471.6 39.2ZM471.6 153.05C480.36 153.05 487.87 147.61 494.14 136.74C500.4 125.86 503.53 112.76 503.53 97.42C503.53 82.08 500.4 68.98 494.14 58.1C487.88 47.22 480.37 41.79 471.6 41.79C462.68 41.79 455.09 47.23 448.83 58.1C442.57 68.98 439.44 82.08 439.44 97.42C439.44 112.76 442.57 125.86 448.83 136.74C455.09 147.61 462.68 153.05 471.6 153.05ZM594.26 49.88C596.37 54.18 599.3 62.75 603.06 75.58C597.74 92.49 590.77 114.79 582.16 142.5L557.75 59.17C556.5 56.04 556.11 53.46 556.58 51.42C557.05 49.39 557.56 47.86 558.11 46.84C558.66 45.82 559.56 45.04 560.81 44.49C562.06 43.94 562.92 43.63 563.39 43.55C563.86 43.47 564.24 43.43 564.56 43.43V41.79H523.95V43.43C528.8 43.43 532.72 48.05 535.69 57.28C538.66 66.05 548.68 98.36 565.74 154.23H581.7L585.22 142.73C587.57 134.9 590.65 124.85 594.49 112.56C598.32 100.28 601.73 89.6 604.7 80.52C610.64 99.93 618.23 124.5 627.47 154.23H643.2L674.66 54.7C676.85 48.6 680.84 44.77 686.63 43.2V41.79H665.03V43.2C668.63 43.2 670.78 44.85 671.49 48.13C672.2 51.41 671.76 54.78 670.2 58.22C667.38 66.82 658.54 94.92 643.67 142.49L619.26 59.16C618.01 56.03 617.62 53.45 618.09 51.41C618.56 49.38 619.07 47.85 619.62 46.83C620.17 45.81 621.11 45.03 622.44 44.48C623.77 43.93 624.67 43.62 625.14 43.54C625.61 43.46 625.99 43.42 626.31 43.42V41.78H585.46L585.69 43.42C589.29 43.42 592.15 45.58 594.26 49.88ZM737.57 152.11C743.83 152.11 749.31 150.86 754 148.35C758.69 145.85 762.18 142.87 764.45 139.43C766.72 135.99 768.56 132.51 769.97 128.98C771.38 125.46 772.24 122.45 772.55 119.94L772.78 116.18L784.99 118.06C781.23 129.33 774.9 138.48 765.98 145.53C757.06 152.58 747.04 156.09 735.93 156.09C721.53 156.09 709.25 150.42 699.08 139.07C688.91 127.73 683.82 114.07 683.82 98.11C683.82 82.15 688.94 68.38 699.2 56.79C709.45 45.21 721.7 39.42 735.94 39.42C744.23 39.42 751.67 41.1 758.24 44.47C764.81 47.84 770.01 52.26 773.85 57.73C777.68 63.21 780.62 69.12 782.65 75.45C784.68 81.79 785.7 88.17 785.7 94.58L703.77 94.35V98.34C703.77 113.99 706.62 126.86 712.34 136.96C718.05 147.06 726.46 152.11 737.57 152.11ZM735.93 42.72C727.95 42.72 720.94 47.26 714.92 56.34C708.89 65.42 705.26 76.76 704 90.38H765.03C765.04 58.61 755.33 42.72 735.93 42.72ZM868.79 40.61C864.09 39.67 860.18 39.2 857.05 39.2C853.14 39.2 849.27 39.87 845.43 41.19C841.59 42.52 838.46 43.97 836.04 45.53C833.61 47.1 831.34 48.94 829.23 51.05C827.12 53.16 825.74 54.65 825.12 55.51C824.49 56.38 824.02 57.04 823.71 57.51V41.55L797.89 46.48V47.89L799.3 49.3C800.23 50.09 801.21 51.77 802.23 54.35C803.25 56.93 803.76 60.02 803.76 63.62C803.76 77.08 803.84 102.75 804 140.62C804 147.2 801.97 151.42 797.9 153.3V154.24H829.13V153.3C825.53 151.42 823.73 147.04 823.73 140.15V61.27L825.37 59.16C826.46 57.75 828.18 56.31 830.53 54.82C832.87 53.33 835.49 52.12 838.39 51.18C841.28 50.24 844.85 50.32 849.07 51.41C853.29 52.5 857.6 54.85 861.98 58.45L868.79 40.61Z" />
                </svg> */}

                  <svg height="1.7rem" viewBox="0 0 1127 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M329.42 47.29H348.65L375.22 109.5L404.24 47.29H417.17L443.74 109.5L485.35 17.46H470.31L444.09 76.7599L436.05 57.12L460.52 0H511.57L451.43 134.6H437.45L410.18 72.4L383.26 134.6H368.93L329.42 47.29Z" fill="#161E4A" />
                    <path fill="black" d="M924.811 39.332H925.891V139.112H924.811V39.332ZM636.121 81.5509C636.123 81.2346 636.127 80.8304 636.133 80.3529C636.195 74.5956 636.372 58.1716 634.451 56.3709C630.367 43.912 606.252 45.0698 588.157 45.9385C580.952 46.2845 574.702 46.5846 571.051 45.9609V134.111H582.891L582.981 100.801C591.684 101.258 598.603 101.007 604.086 100.808C623.452 100.107 624.904 100.054 623.751 134.111H636.111C636 131.858 636.075 128.913 636.158 125.646V125.645V125.645V125.644C636.465 113.584 636.884 97.1404 628.481 94.9609C635.941 92.2209 636.121 81.5509 636.121 81.5509ZM623.811 79.8209C624.244 88.5379 615.626 88.9678 611.586 89.1693C611.241 89.1865 610.93 89.202 610.661 89.2209H583.071V57.7409C584.257 57.8067 587.053 57.7758 590.614 57.7366C601.134 57.6207 618.324 57.4312 620.371 59.4409C624.483 62.1656 624.128 68.499 623.827 73.8797C623.7 76.1413 623.583 78.2346 623.811 79.8209ZM296.064 46.0296C299.147 46.1138 302.12 46.195 304.861 46.1518C329.6 46.6323 328.492 73.6031 327.598 95.3598V95.3602V95.3607V95.3612V95.3617C327.338 101.676 327.097 107.551 327.511 112.212C326.655 137.002 304.417 136.395 286.088 135.894C283.005 135.81 280.032 135.729 277.291 135.772C252.544 135.291 253.655 108.309 254.551 86.5466V86.5464V86.5463V86.5461V86.546C254.81 80.2387 255.052 74.3699 254.641 69.7118C255.497 44.9215 277.735 45.5289 296.064 46.0296ZM288.289 124.215C300.109 124.771 315.286 125.486 315.271 111.522V69.9118C315.271 62.9618 309.801 57.2718 303.121 57.2718C300.674 57.5408 297.412 57.3871 293.843 57.219C282.022 56.6623 266.846 55.9476 266.861 69.9118V111.522C266.861 118.472 272.331 124.162 279.011 124.162C281.457 123.893 284.72 124.046 288.289 124.215ZM558.94 57.791V45.9609H497.83V134.111H558.94V122.481H509.58V94.231H557.65V83.0309H509.58V57.791H558.94ZM62.12 46.8203V58.6503H12.75V83.8903H60.82V95.0803H12.75V123.34H62.12V134.97H1V46.8203H62.12ZM960.291 49.1702H952.561V60.1102H959.681V62.4102H952.561V75.7202H949.621V46.9102H960.291V49.1702ZM982.691 73.6802C982.691 74.2802 982.471 74.7701 982.021 75.1501C981.581 75.5301 981.011 75.7202 980.311 75.7202H971.041C970.351 75.7202 969.781 75.5301 969.351 75.1501C968.911 74.7701 968.691 74.2802 968.691 73.6802V48.9501C968.691 48.3501 968.911 47.8602 969.351 47.4802C969.791 47.1002 970.351 46.9102 971.041 46.9102H980.311C981.001 46.9102 981.571 47.1002 982.021 47.4802C982.461 47.8602 982.691 48.3501 982.691 48.9501V73.6802ZM979.751 73.4601V49.1702H971.641V73.4601H979.751ZM1004.59 75.1501C1005.03 74.7701 1005.24 74.2802 1005.24 73.6802V67.0101C1005.24 66.2201 1004.94 65.5002 1004.33 64.8602L995.141 55.2502V49.1702H1002.3V55.6501H1005.24V48.9501C1005.24 48.3501 1005.02 47.8602 1004.59 47.4802C1004.16 47.1002 1003.6 46.9102 1002.91 46.9102H994.571C993.881 46.9102 993.311 47.1002 992.871 47.4802C992.421 47.8602 992.201 48.3501 992.201 48.9501V54.7902C992.201 55.5902 992.521 56.3202 993.151 56.9802L1002.3 66.5901V73.4601H995.141V66.3702H992.201V73.6802C992.201 74.2802 992.421 74.7701 992.871 75.1501C993.311 75.5301 993.881 75.7202 994.571 75.7202H1002.91C1003.6 75.7202 1004.16 75.5301 1004.59 75.1501ZM1026.2 49.1702H1021.08V75.7202H1018.14V49.1702H1012.97V46.9102H1026.2V49.1702ZM1033.99 75.7202H1044.87H1044.88V73.4501H1036.94V62.2202H1044.06V59.9202H1036.94V49.1702H1044.75V46.9102H1033.99V75.7202ZM1067.91 75.7202H1064.82L1058.66 60.2902L1059.06 59.7701H1064.31V49.1602H1056.75V75.7101H1053.81V46.9102H1064.91C1065.6 46.9102 1066.17 47.1002 1066.6 47.4802C1067.04 47.8602 1067.26 48.3501 1067.26 48.9501V59.8901C1067.26 61.2801 1066.19 61.9702 1064.04 61.9702C1063.83 61.9702 1063.52 61.9602 1063.11 61.9402C1062.7 61.9202 1062.4 61.9102 1062.22 61.9102C1064.12 66.5002 1066.02 71.1102 1067.91 75.7202ZM1076.82 75.7202H1079.76V46.9102H1076.82V75.7202ZM1103.28 75.7202H1101.25L1092.4 54.5302V75.7202H1089.63V46.9102H1091.83L1100.51 67.7402V46.9102H1103.28V75.7202ZM1125.66 75.1501C1126.1 74.7701 1126.32 74.2802 1126.32 73.6802V61.2902H1119.82V63.5002H1123.36V73.4601H1115.86V49.1702H1123.36V55.6501H1126.32V48.9501C1126.32 48.3501 1126.1 47.8602 1125.66 47.4802C1125.23 47.1002 1124.66 46.9102 1123.97 46.9102H1115.27C1114.58 46.9102 1114.02 47.1002 1113.58 47.4802C1113.14 47.8602 1112.92 48.3501 1112.92 48.9501V73.6802C1112.92 74.2802 1113.14 74.7701 1113.58 75.1501C1114.01 75.5301 1114.58 75.7202 1115.27 75.7202H1123.97C1124.66 75.7202 1125.22 75.5301 1125.66 75.1501ZM969.39 127.711C969.39 129.851 968.16 130.921 965.7 130.921H952.99C950.6 130.921 949.4 129.851 949.4 127.711V99.0112C949.4 96.8512 950.62 95.7812 953.07 95.7812H965.7C968.16 95.7812 969.39 96.8612 969.39 99.0112V106.511H963.32V100.291H955.44V126.411H963.32V116.571H958.83V112.101H969.39V127.711ZM993.9 130.92H1000.2L993.54 115C995.54 115 996.849 114.88 997.469 114.66C998.62 114.22 999.199 113.26 999.199 111.78V98.9996C999.199 96.8496 997.99 95.7695 995.56 95.7695H979.52V130.92H985.56V100.28H993.18V111.42H987.24V114.59L993.9 130.92ZM1029.56 127.711C1029.56 129.851 1028.34 130.921 1025.89 130.921H1012.77C1010.38 130.921 1009.18 129.851 1009.18 127.711V99.0112C1009.18 96.8512 1010.38 95.7812 1012.77 95.7812H1025.89C1028.33 95.7812 1029.56 96.8612 1029.56 99.0112V127.711ZM1023.52 126.411V100.291H1015.23V126.411H1023.52ZM1063.62 130.97L1069.54 95.7695H1063.41L1060.28 116.61C1060.16 118.03 1060.09 119.1 1060.07 119.82C1060.02 119.096 1059.97 118.464 1059.94 117.922L1059.93 117.828L1059.93 117.811C1059.89 117.338 1059.86 116.937 1059.84 116.61L1056.35 95.7695H1051.39L1047.9 116.61C1047.76 118.03 1047.69 119.1 1047.67 119.82C1047.58 118.4 1047.51 117.33 1047.46 116.61L1044.33 95.7695H1038.21L1044.13 130.97H1050.07L1053.66 111.05C1053.8 109.63 1053.87 108.56 1053.87 107.84C1053.98 109.26 1054.05 110.33 1054.08 111.05L1057.7 130.97H1063.62ZM1095.78 100.42H1089.12V130.92H1083.1V100.42H1076.44V95.7695H1095.79V100.42H1095.78ZM1118.37 130.92H1124.47V95.7695H1118.37V110.26H1110.18V95.7695H1104.14V130.92H1110.18V115.15H1118.37V130.92ZM732.45 45.9609V57.791H683.08V83.0309H731.15V94.231H683.08V122.481H732.45V134.111H671.33V45.9609H732.45ZM74.3711 46.8203V134.97L86.1911 135.02L86.1511 63.4803L112.891 135.02H126.051L152.591 63.3903V135.02H164.361V46.8303H146.851L119.371 120.45L91.7311 46.8203H74.3711ZM235.831 49.7085C224.479 45.9549 212.818 46.3771 201.117 46.8007C194.739 47.0317 188.349 47.2631 181.991 46.8185L181.871 135.029H193.741V101.899H219.991C220.454 101.871 220.971 101.848 221.533 101.824L221.534 101.824L221.534 101.824L221.534 101.824C229.039 101.498 244.512 100.825 244.251 82.3686C243.933 79.8081 244.092 76.8052 244.258 73.6436V73.6434V73.6432V73.643V73.6428V73.6426C244.721 64.8642 245.249 54.8622 235.831 49.7085ZM232.101 67.5385C232.079 68.0778 232.094 69.1401 232.113 70.5054C232.189 76.0524 232.333 86.6001 230.391 87.3785C225.352 90.9902 214.26 90.525 205.029 90.1378C200.484 89.9472 196.39 89.7754 193.691 90.1186V58.5486L221.081 58.6985C229.761 58.4785 232.431 62.2785 232.101 67.5385ZM754.969 45.9073C772.924 45.6306 805.514 45.1286 808.162 51.7109C817.393 60.8437 816.642 76.8962 815.993 90.7628C815.723 96.5282 815.471 101.916 815.962 106.271C816.752 130.221 799.052 134.201 790.012 134.111H744.762V45.9509C746.681 46.0349 750.338 45.9786 754.969 45.9073ZM785.332 122.881C792.052 123.191 804.482 122.901 803.772 105.591C803.771 100.344 803.826 95.6578 803.876 91.4735V91.4706C804.08 74.3228 804.184 65.6027 799.875 61.2265C795.417 56.6985 786.236 56.8209 767.554 57.0701C764.174 57.1151 760.483 57.1644 756.452 57.1909L756.512 122.881H785.332ZM830.081 45.9609H842.01C842.491 49.5607 842.244 58.0681 841.954 68.0795V68.0803V68.0811C841.38 87.8552 840.635 113.497 844.99 118.781C844.99 118.781 847.18 122.341 855.51 122.431C857.621 122.089 860.658 122.257 864.032 122.444C873.083 122.945 884.56 123.58 887.081 114.861C888.18 113.868 888.015 81.0111 887.915 60.9819V60.981C887.875 52.9598 887.845 46.9961 887.911 45.9609H899.911V106.221C899.911 106.221 901.28 128.541 885.24 133.201C880.751 135.455 862.29 135.243 855.631 135.166L855.161 135.161C855.161 135.161 837.01 135.161 832.54 121.531C829.419 117.382 829.813 84.8779 830.07 63.5914V63.59C830.173 55.0719 830.255 48.3502 830.081 45.9609Z" />

                  </svg>
                </Link>

                <Link to="mailto:contact@empoweredu.global">

                  <p className="text-[1.05rem]">contact@empoweredu.global</p>

                </Link>
              </div>




              <div className="flex flex-row gap-2 ">
                {socialMediaIcons.map((data) => (
                  <button className="social-media-icon-box w-[fit-content]  bg-white p-3 rounded-2xl">
                    {data.icon}
                  </button>
                ))}
              </div>

              {/* 
              <div className="bg-white w-[fit-content] rounded-3xl">
                <input type="email" className="p-2 rounded-3xl pl-6 emial-div" placeholder="Enter your email" style={{ border: "0px" }} />
                <button className="primary-button">Subscribe</button>
              </div> */}
            </div>

          </div>


          <div className="grid grid-rows-1 md:grid-rows-1 md:grid-cols-1 md:flex-row gap-16 justify-start align-end">




            <div className="flex flex-col w-[fit-content]">

              <p className="font-semibold md:text-[18px]">Company</p>
              <Link to="/about">
                <p className="font-normal text-textColor md:text-[18px]">About</p>
              </Link>
              <Link to="/services">
                <p className="font-normal text-textColor md:text-[18px]">Services</p>
              </Link>
              <Link to="/blog">
                <p className="font-normal text-textColor md:text-[18px]">Blog</p>
              </Link>
              <Link to="/event">
                <p className="font-normal text-textColor md:text-[18px]">Event</p>
              </Link>
              <Link to="/gallery">
                <p className="font-normal text-textColor md:text-[18px]">Gallery</p>
              </Link>
            </div>





            {/* <div className="flex flex-col">

              <p className="font-semibold md:text-[18px]">Legal</p>
              <Link to="#">
                <p className="font-normal text-textColor md:text-[18px]">Terms</p>
              </Link>
              <Link to="#">
                <p className="font-normal text-textColor md:text-[18px]">Privacy</p>
              </Link>
              <Link to="#">
                <p className="font-normal text-textColor md:text-[18px]">Cookies</p>
              </Link>
              <Link to="#">
                <p className="font-normal text-textColor md:text-[18px]">Licenses</p>
              </Link>
             
            </div> */}

            {/* 
            <div className="flex flex-col">

              <p className="font-semibold md:text-[18px]">Explore</p>

             
              <Link to="/signup">
                <p className="font-normal text-textColor md:text-[18px]">Register as college</p>
              </Link>
              <Link to="/login">
                <p className="font-normal text-textColor md:text-[18px]">Login</p>
              </Link>

            </div> */}

          </div>
        </div>
        <div className="py-4 border-t-[1px] w-[100%] ">
          <p className="">Empower Edu © 2024. All rights reserved.</p>
        </div>
      </div >

    </>
  )
}

export default Footer