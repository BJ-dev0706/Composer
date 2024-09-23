import Link from "next/link";
import Main from "./component/Main";
import Bg_white from "./component/Bg_white";
import RippleButton from "./component/RippleButton";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="bg-black text-gray-50 text-center tracking-wide py-2.5 text-sm">We just launched Composer for iPhone!
        <Link className="ml-2 items-center justify-center py-1 px-3 leading-none text-black rounded-full bg-[#ffa724] hover:bg-white transition duration-300" href="#">
          Get the app →
        </Link>
      </div>
      <div className="bg-[#ecedee]">
        <Main />
        <Bg_white />
      </div>
      <div className="py-10 text-center">
        <RippleButton>
          Hi LolHP
        </RippleButton>
      </div>
    </div>
  );
}
