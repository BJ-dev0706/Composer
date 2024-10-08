import Link from "next/link";
// import Main from "./component/Main";
import Bg_white from "./component/Bg_white";
import Bg_soft from "./component/Bg_soft";
import Bg_dark from "./component/Bg-dark";
import Bg_gray from "./component/Bg_gray";
import Customize from "./component/Customize";
import About from "./component/About";
import Footer from "./component/Footer";
import Testimonial from "./component/Testimonials";
import Start from "./component/Start";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="bg-black text-gray-50 text-center tracking-wide py-2.5 text-sm">We just launched Composer for iPhone!
        <Link className="ml-2 items-center justify-center py-1 px-3 leading-none text-black rounded-full bg-[#ffa724] hover:bg-white transition duration-300" href="#">
          Get the app →
        </Link>
      </div>
      <div className="flex relative flex-col min-h-full bg-grey-soft bg-grid [--grid-opacity:0.16] [--grid-size:240px]">
        <Header />
        <main className="min-h-[95vh] overflow-x-clip">
          <Start />
          <Bg_white />
          <Bg_soft />
          <Bg_dark />
          <Bg_gray />
          <Customize />
          <Testimonial />
          <About />
          <Footer />
        </main>
      </div>
    </div>
  );
}
