import Link from "next/link";

const Main = () => {
    return(
        <div className="
            relative h-[90vh] min-h-[896px] max-h-[896px] lg:h-[80vh] md:h-[75vh] 
        ">
            <div className="
                    w-full text-[56px] leading-[60px] absolute left-0 top-0 bottom-auto flex h-full min-h-auto pt-[56px] pr-[24px] pl-[24px] justify-center items-center font-[400]
                    max-[479px]:p-0 max-[479px]:flex-col max-[479px]:justify-start max-[479px]:items-center
                    max-[991px]:pb-[56px] max-[991px]:items-end    
                ">
                <div className="
                        relative mx-auto px-[24px] 
                        max-[1440px]:max-w-[1600px] max-[1440px]:px-[32px]
                        max-[479px]:px-[16px] 
                        max-[991px]:px-[32px]
                    ">
                    <div className="
                        relative top-[50px] flex-col justify-center
                        max-[479px]:relative  max-[479px]:top-0
                    ">
                        <h1 className="inline-block text-[64px] leading-[.5em] font-[700] !z-1001 max-[479px]:text-[40px]">
                            Meet
                            <br />
                            <span className="
                                inline-block my-0 text-[13vw] leading-[1em] font-[700]
                                max-[479px]:text-[12vw]
                            ">
                                Composer
                            </span>
                        </h1>
                        <div className="
                            w-1/2 max-w-[740px] mb-[56px] text-[36px] leading-[1.2em]
                            max-[991px]:w-full max-[991px]:text-[32px]
                            max-[479px]:relative max-[479px]:z-[10] max-[479px]:w-full max-[479px]:text-[24px] max-[479px]:tracking-[0.02em]
                        ">
                            Build trading algorithms with AI, backtest them, then execute—all in one platform. No coding skills required.
                            <br />
                            <br />
                            Trading. Built better.
                        </div>
                        <div className="
                            md:border border-black rounded-full flex flex-col md:flex-row items-center w-full md:w-fit md:bg-white
                        ">
                            <Link
                                href={"#"} 
                                className="
                                    link-arrow-group flex items-center justify-between leading-none text-left max-md:py-2 py-4 px-9 md:w-fit bg-black text-white rounded-full text-2xl md:text-[30px] link-with-arrow-container
                                "
                            >
                                Get started
                                <div className="flex items-center justify-center">
                                    <span className="link-arrow-left">
                                        <svg width="192" height="192" viewBox="0 0 16 14" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                                            style={{width:"28px", height:"28px"}}>
                                            <g clipPath="url(#a)">
                                                <path
                                                    d="m8.49 13.263-1.278-1.264 4.439-4.44H.5V5.714h11.15L7.213 1.281 8.49.01l6.627 6.626-6.627 6.627Z"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="link-arrow-right">
                                        <svg width="192" height="192" viewBox="0 0 16 14" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                                            style={{width:"28px", height:"28px"}}>
                                            <g clipPath="url(#a)">
                                                <path
                                                    d="m8.49 13.263-1.278-1.264 4.439-4.44H.5V5.714h11.15L7.213 1.281 8.49.01l6.627 6.626-6.627 6.627Z"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-start justify-start overflow-hidden pointer-events-none min-[1440px]:pb-[56px]">
                <div 
                    className="relative flex overflow-visible w-[2500px] h-[700px] flex-col 
                        block-container min-[1440px]:top-0 min-[1440px]:w-[3000px] min-[1440px]:h-[700px] min-[1440px]:flex-col">
                        <div className="grid grid-cols-2 grid-rows-2 w-[100px] h-[100px] max-lg:hidden">
                            <div className="bg-[#f6609f] mix-blend-hard-light"></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className="bg-[#1ec072]"></div>
                        </div>
                        <div className="flex w-full h-[600px] max-[479]:h-[400px]">
                            <div className="flex flex-col w-[100px]">
                                <div className="w-full h-[200px] bg-transparent"></div>
                                <div className="w-full h-[200px] bg-[#f6609f]"></div>
                                <div className="w-full h-[200px] bg-transparent"></div>
                            </div>
                            <div className="flex flex-col w-[500px]">
                                <div className="w-full h-[200px] custom-bg-green animate-block-ani animation-delay-15 z-0 mix-blend-multiply"></div>
                                <div className="w-full h-[200px] bg-transparent"></div>
                                <div className="w-full h-[200px] bg-transparent"></div>
                            </div>
                            <div className="flex flex-col w-[500px]">
                                <div className="w-full h-[200px] bg-transparent"></div>
                                <div className="w-full h-[200px] flex flex-col self-start">
                                    <div className="h-[100px] w-full custom-bg-pink animate-block-ani animation-delay-0 mix-blend-hard-light"></div>
                                    <div className="w-1/2 h-[100px] self-end bg-[#1871da] animate-block-ani-half animation-delay-15 mix-blend-hard-light"></div>
                                </div>
                                <div className="w-full h-[200px] bg-transparent flex flex-col">
                                    <div className="w-full h-[100px]"></div>
                                    <div className="w-full h-[100px] flex  flex-row">
                                        <div className="w-full h-[50px]"></div>
                                        <div className="w-full h-[50px] flex">
                                            <div className="w-1/2"></div> 
                                            <div className="w-1/2 h-full bg-[#1871da] mix-blend-hard-light"></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[500px] self-start">
                                <div className="w-full h-[200px] bg-[#1ec072] animate-block-ani self-end animation-delay-05"></div>
                                <div className="w-full h-[200px] bg-transparent">
                                    <div className="w-full h-[100px]"></div>
                                    <div className="w-full h-[100px] flex flex-col self-start"> 
                                        <div className="w-1/2 h-full custom-bg-yellow animate-block-ani-half self-end animation-delay-1  mix-blend-multiply"></div>
                                    </div>
                                </div>
                                <div className="w-full h-[200px] bg-transparent">
                                    <div className="w-full h-[100px]">
                                        <div className="w-1/2  custom-bg-pink mix-blend-hard-light h-full"></div>
                                        <div className="w-1/2 h-full"></div>
                                    </div>
                                    <div className="w-full h-[100px] flex">
                                        <div className="w-1/2 h-full">
                                            <div className="h-full">
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2"></div>
                                                    <div className="w-1/2 bg-[#1ec072]"></div>
                                                </div>
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2 bg-[#ffbb38]"></div>
                                                    <div className="w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="h-full">
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2"></div>
                                                    <div className="w-1/2 bg-[#1ec072]"></div>
                                                </div>
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2 custom-bg-pink mix-blend-hard-light"></div>
                                                    <div className="w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[500px]">
                                <div className="w-full h-[200px]"></div>
                                <div className="w-full h-[200px]">
                                    <div className="w-full h-[100px] custom-bg-pink  animate-block-ani animation-delay-15  mix-blend-multiply"></div>
                                    <div className="w-full h-[100px] flex">
                                        <div className="w-1/2"></div>
                                        <div className="w-1/2 bg-[#1ec072]"></div>
                                    </div>
                                </div>
                                <div className="w-full h-[200px] bg-transparent">
                                    <div className="w-full h-[100px]">
                                        <div className="w-1/2 bg-[#1871da] mix-blend-hard-light h-full"></div>
                                        <div className="w-1/2 h-full"></div>
                                    </div>
                                    <div className="w-full h-[100px] flex">
                                        <div className="w-1/2 h-full">
                                            <div className="h-full">
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2"></div>
                                                    <div className="w-1/2 bg-[#1ec072]"></div>
                                                </div>
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2 bg-[#ffbb38]"></div>
                                                    <div className="w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="h-full">
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2"></div>
                                                    <div className="w-1/2 bg-[#1ec072]"></div>
                                                </div>
                                                <div className="flex h-1/2">
                                                    <div className="w-1/2 bg-[#ffbb38]"></div>
                                                    <div className="w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Main;