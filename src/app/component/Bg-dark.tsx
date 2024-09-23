import Image from "next/image";

const Bg_dark = () => {
    return(
        <div className="bg-black" id="ira-block">
            <div className="inner pt-4 pb-20 md:py-8 md:pb-32 lg:py-32">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 md:items-center lg:items-start justify-between gap-4 lg:gap-0 xl:gap-16">
                    <div className="w-full md:max-lg:flex md:flex-row md:items-center md:gap-12">
                        <h2 className="headline-1 text-[#e3bc99] font-semibold md:max-lg:w-1/2 2xl:w-10/12">Tax-smart active trading in your retirement account</h2>
                        <div className="mt-6 md:mt-2 lg:mt-6">
                            <ul className="text-base md:text-xl text-white">
                                <li className="tracking-wide flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="shrink-0"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>Traditional
                                    IRA
                                </li>
                                <li className="tracking-wide flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="shrink-0"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>Roth
                                    IRA
                                </li>
                                <li className="tracking-wide flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="shrink-0"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>{"We'll"}
                                    cover your transfer fees</li>
                            </ul>
                            <a
                                className="link-arrow-group flex items-center justify-between leading-none mt-8 py-4 px-9 w-full md:w-fit bg-pink-1 text-black rounded-full text-xl font-medium link-with-arrow-container"
                                href="/retirement/">Learn more<div className="flex items-center justify-center">
                                    <span className="link-arrow-left">
                                        <svg width="192" height="192" viewBox="0 0 16 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" style={{width:"16px",  height:"16px"}}>
                                            <g clip-path="url(#a)">
                                                <path
                                                    d="m8.49 13.263-1.278-1.264 4.439-4.44H.5V5.714h11.15L7.213 1.281 8.49.01l6.627 6.626-6.627 6.627Z"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="link-arrow-right">
                                        <svg width="192" height="192" viewBox="0 0 16 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" style={{width:"16px",  height:"16px"}}>
                                            <g clip-path="url(#a)">
                                                <path
                                                    d="m8.49 13.263-1.278-1.264 4.439-4.44H.5V5.714h11.15L7.213 1.281 8.49.01l6.627 6.626-6.627 6.627Z"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="relative bg-black transition-all duration-300 w-full h-full">
                        <Image alt="Composer Retirement Image" src="/ira-clouds.webp" width="1000" height="674" decoding="async" data-nimg="future" className="h-full object-cover transition-all duration-300 rounded" loading="lazy" style={{color:"transparent"}} />    
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 md:w-3/12 transition-all duration-300" id="ira-star" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 169.711 98.9951)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 141.427 70.7109)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 141.427 98.9951)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 141.427 127.279)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 113.142 42.4268)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 113.142 70.7109)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 113.142 98.9951)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 113.142 127.279)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 113.142 155.563)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 14.1426)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 42.4268)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 70.7109)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 98.9951)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 127.279)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 155.563)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 84.8579 183.848)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 56.5737 42.4268)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 56.5737 70.7109)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 56.5737 98.9951)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 56.5737 127.279)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 56.5737 155.563)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 28.2893 70.7109)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 28.2893 98.9951)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 28.2893 127.279)" fill="#F6F2EE"></rect>
                            <rect width="20" height="20" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.00512695 98.9951)" fill="#F6F2EE"></rect>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bg_dark;