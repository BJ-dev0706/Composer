import Image from "next/image";


const Bg_gray = () => {
    return (
        <div className="bg-[#ecedee] text-black">
            <div className="inner pt-16 pb-20 md:py-32 lg:py-40">
                <div className="flex justify-center gap-10 lg:gap-16 items-center lg:items-start flex-col lg:flex-row">
                    <div className="mt-2">
                        <Image alt="Composer Trading Pass" src="/ira-tradingpass.webp" width="801" height="427" decoding="async" data-nimg="future" className="relative shadow-pass rounded-md rotate-[-5deg] md:w-[400px] transition-all transform duration-200 hover:scale-105 hover:rotate-0" loading="lazy" style={{color: "transparent"}} />
                    </div>
                    <div className="md:w-7/12 lg:w-5/12 2xl:w-4/12">
                        <h2 className="headline-1 text-pretty text-center lg:text-left">One Trading Pass, Unlimited Access</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl opacity-50 leading-tight mt-2 text-center lg:text-left">Your Composer Trading Pass unlocks unlimited automated trading</p>
                        <div className="flex flex-col md:flex-row gap-4 xl:gap-12 mt-8 px-4 md:px-0">
                            <div className="tracking-wide flex items-start gap-2 w-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="shrink-0 translate-y-1/2 -mt-2"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>One
                                flat fee, unlimited automated trading across all accounts.</div>
                            <div className="tracking-wide flex items-start gap-2 w-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="shrink-0 translate-y-1/2 -mt-2"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path></svg>
                                <div>Open multiple accounts for no additional cost.</div>
                            </div>
                        </div>
                        <a className="link-arrow-group flex items-center justify-between leading-none mt-8 py-4 px-9 w-full md:w-fit bg-grey-light border border-black text-black rounded-full text-xl font-medium link-with-arrow-container mx-auto md:mx-0" href="/pricing/">
                            See pricing
                            <div className="flex items-center justify-center">
                                <span className="link-arrow-left">
                                    <svg width="192" height="192" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"16px", height:"16px"}}>
                                        <g clipPath="url(#a)">
                                            <path d="m8.49 13.263-1.278-1.264 4.439-4.44H.5V5.714h11.15L7.213 1.281 8.49.01l6.627 6.626-6.627 6.627Z" fill="currentColor"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span className="link-arrow-right">
                                    <svg width="192" height="192" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"16px", height:"16px"}}>
                                        <g clipPath="url(#a)">
                                            <path d="m8.49 13.263-1.278-1.264 4.439-4.44H.5V5.714h11.15L7.213 1.281 8.49.01l6.627 6.626-6.627 6.627Z" fill="currentColor"></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Bg_gray;