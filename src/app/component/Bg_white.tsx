import Image from "next/image";
import money from "../assets/money.webp";
import wsj from "../assets/wsj.svg";
import ent from "../assets/ent.svg";
import cnet from "../assets/cnet.svg";
import benzinga from "../assets/benzinga.svg";

const Bg_white = () => {
    return(
        <div className="py-10 bg-white">
            <div className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 py-12">
                    <div className="flex flex-col items-center justify-center">
                        <div className="2xl:text-[40px] lg:text-[30px] md:text-[32px] text-[28px] leading-[1em] font-[600] py-2">$2B+</div>
                        <div className="2xl:text-[24px] lg:text-[22px] text-[20px] leading-[0.2em] text-[#0000008a]">trading volume</div>
                    </div>
                    <div className="border-dotted border-r-[1px] md:border-b-[1px] border-black self-stretch"></div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="2xl:text-[40px] lg:text-[30px] md:text-[32px] text-[28px] leading-[1em] font-[600] py-2">900,000+</div>
                        <div className="2xl:text-[24px] lg:text-[22px] text-[20px] leading-[0.2em] text-[#0000008a]">orders executed</div>
                    </div>
                    <div className="border-dotted border-r-[1px] md:border-b-[1px] border-black self-stretch"></div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="2xl:text-[40px] lg:text-[30px] md:text-[32px] text-[28px] leading-[1em] font-[600] py-2">5M+</div>
                        <div className="2xl:text-[24px] lg:text-[22px] text-[20px] leading-[0.2em] text-[#0000008a]">backtests run</div>
                    </div>
                </div>
            </div>
            <div className="bg-black h-[1px] w-4/5 mx-auto"></div>
            <div className="flex items-center justify-center">
                <div className="pt-8 pb-14">
                    <div className="text-block-39 text-center py-5">As seen on</div>
                    <div className="flex items-center justify-around gap-10 md:flex-row flex-col">
                        <Image alt="" src={wsj} className="w-[100px]" />
                        <Image alt="" src={money} className="w-[100px]" />
                        <Image alt="" src={benzinga} className="w-[100px]" />
                        <Image alt="" src={cnet} className="w-[100px]" />
                        <Image alt="" src={ent} className="w-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bg_white;