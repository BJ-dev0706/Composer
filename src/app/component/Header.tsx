


const Header = () => {

    return(
        <header className="text-black isolate relative z-50 w-full mx-auto">
            <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="inner pt-8 -mb-4">
                <div style={{position:"relative"}}>
                    <ul data-orientation="horizontal" className="flex justify-between w-full text-sm gap-x-2 md:gap-x-4 navigation relative z-[100] text-black" dir="ltr">
                        <li className="grow"><a className="inline-block px-2 -mx-2 pt-2 pb-1.5 -my-2 text-inherit" href="/" data-radix-collection-item=""><svg viewBox="0 0 141 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Composer Logo" className="h-6 logo-animated"><path id="graph-1" d="M4.72867 17.5484H0.599609V21.9355H4.72867V17.5484Z" fill="currentColor"></path><path id="graph-2" d="M10.6642 11.8711H6.53519V21.9356H10.6642V11.8711Z" fill="currentColor"></path><path id="graph-3" d="M16.5998 5.93555H12.4708V21.9355H16.5998V5.93555Z" fill="currentColor"></path><path id="graph-4" d="M22.5354 0H18.4063V21.9355H22.5354V0Z" fill="currentColor"></path><path id="gradient-1" d="M4.72916 11.8711H0.600098V13.6775H4.72916V11.8711Z" fill="currentColor"></path><path id="gradient-2" d="M10.6647 5.93555H0.600098V8.38716H10.6647V5.93555Z" fill="currentColor"></path><path id="gradient-3a" d="M4.72867 0H0.599609V2.83871H4.72867V0Z" fill="currentColor"></path><path id="gradient-3b" d="M16.5998 0H6.53519V2.83871H16.5998V0Z" fill="currentColor"></path><path id="c" d="M27.053 11.148C27.053 5.93595 30.3245 1.96033 35.516 1.96033C37.5262 1.96033 39.1664 2.52061 40.3773 3.45323C41.7906 4.54011 42.627 6.13753 42.8286 7.95846H39.156C38.8531 6.22241 37.5428 5.05968 35.512 5.05968C32.3348 5.05968 30.8198 7.70871 30.8198 11.148C30.8198 14.5873 32.6459 17.2117 35.5365 17.2117C37.6001 17.2117 39.0414 15.9629 39.2583 14.145H42.89C42.7876 15.7253 42.1039 17.2403 40.9206 18.354C39.6924 19.5127 37.9808 20.2415 35.5407 20.2415C30.566 20.2415 27.053 16.4256 27.053 11.148Z" fill="currentColor"></path><path id="o" d="M53.6649 13.5839C53.6649 11.1559 52.5471 9.50587 50.5572 9.50587C48.5672 9.50587 47.4536 11.1559 47.4536 13.5839C47.4536 16.0118 48.5468 17.6372 50.5572 17.6372C52.5675 17.6372 53.6649 16.0117 53.6649 13.5839ZM43.953 13.5839C43.953 9.82114 46.6349 6.92651 50.5613 6.92651C54.4878 6.92651 57.1655 9.82128 57.1655 13.5839C57.1655 17.3464 54.492 20.2412 50.5613 20.2412C46.6307 20.2412 43.953 17.3464 43.953 13.5839Z" fill="currentColor"></path><path id="m" d="M58.682 7.27022H62.0026V8.98162H62.0763C62.7805 7.80241 64.0048 6.92212 65.7612 6.92212C67.3662 6.92212 68.6395 7.80241 69.2577 9.13301H69.3069C70.1872 7.73273 71.5178 6.92212 73.1187 6.92212C75.8045 6.92212 77.2909 8.67853 77.2909 11.4423V19.8684H73.8394V12.0318C73.8394 10.6193 73.1515 9.87409 71.9274 9.87409C70.5476 9.87409 69.7123 10.9509 69.7123 12.5928V19.8685H66.2608V12.0319C66.2608 10.6195 65.5729 9.87423 64.3489 9.87423C63.0141 9.87423 62.1338 10.9511 62.1338 12.5929V19.8686H58.6823L58.682 7.27022Z" fill="currentColor"></path><path id="p" d="M88.3943 13.686C88.3943 11.3399 87.5631 9.71036 85.5568 9.71036C83.5505 9.71036 82.6825 11.4628 82.6825 13.686C82.6825 15.9092 83.7266 17.4119 85.6714 17.4119C87.3378 17.4119 88.3943 16.0279 88.3943 13.686ZM79.3129 7.27022H82.6335V8.83423H82.7072C83.5261 7.7247 84.7135 6.92212 86.4331 6.92212C89.7741 6.92212 91.8949 9.67352 91.8949 13.5795C91.8949 17.4854 89.688 20.241 86.4371 20.241C84.6929 20.241 83.5383 19.5409 82.8136 18.4641H82.7644V23.9995H79.3129V7.27022Z" fill="currentColor"></path><path id="o-2" d="M102.515 13.5839C102.515 11.1559 101.397 9.50587 99.4069 9.50587C97.4169 9.50587 96.3034 11.1559 96.3034 13.5839C96.3034 16.0118 97.3965 17.6372 99.4069 17.6372C101.417 17.6372 102.515 16.0117 102.515 13.5839ZM92.8027 13.5839C92.8027 9.82114 95.4846 6.92651 99.411 6.92651C103.338 6.92651 106.015 9.82128 106.015 13.5839C106.015 17.3464 103.342 20.2412 99.411 20.2412C95.4804 20.2412 92.8027 17.3464 92.8027 13.5839Z" fill="currentColor"></path><path id="s" d="M106.748 15.7907H109.958C110.167 17.2074 111.166 17.8421 112.636 17.8421C114.105 17.8421 114.888 17.2975 114.888 16.4254C114.888 15.234 113.304 15.1071 111.592 14.7754C109.345 14.3401 107.112 13.7354 107.112 10.9513C107.112 8.16722 109.405 6.92249 112.296 6.92249C115.653 6.92249 117.508 8.55202 117.746 11.0742H114.613C114.466 9.7599 113.623 9.29309 112.251 9.29309C111.002 9.29309 110.159 9.76392 110.159 10.6524C110.159 11.7006 111.788 11.8029 113.549 12.159C115.678 12.589 118.057 13.1744 118.057 16.1674C118.057 18.7345 115.85 20.2412 112.681 20.2412C109.016 20.2412 106.932 18.4849 106.748 15.7907Z" fill="currentColor"></path><path id="e" d="M127.978 12.2082C127.871 10.6279 126.835 9.54686 125.349 9.54686C123.621 9.54686 122.774 10.5869 122.483 12.2082H127.978ZM119.04 13.5553C119.04 9.81725 121.586 6.92249 125.296 6.92249C127.396 6.92249 128.987 7.7546 130.038 9.1718C131.049 10.4975 131.564 12.3559 131.56 14.5298H122.438C122.684 16.4296 123.74 17.6088 125.591 17.6088C126.852 17.6088 127.601 17.0396 127.965 16.1103H131.36C131.102 17.3188 130.385 18.4332 129.264 19.1965C128.313 19.8451 127.092 20.2373 125.603 20.2373C121.431 20.2373 119.04 17.3222 119.04 13.5553Z" fill="currentColor"></path><path id="r" d="M136.395 9.27661H136.469C137.251 7.83948 138.139 7.11475 139.621 7.11475C139.99 7.11475 140.215 7.13926 140.407 7.21295V10.2223H140.329C138.098 9.9807 136.526 11.1434 136.526 13.8089V19.8686H133.074V7.27044H136.395V9.27661Z" fill="currentColor"></path></svg></a></li>
                        <li><a className="hidden sm:block py-0.5 px-2 transition duration-300 rounded-full hover:bg-black/10 font-medium focus:bg-black/10 h-min" data-radix-collection-item="" href="/crypto/">Crypto</a></li>
                        <li><a className="hidden sm:block py-0.5 px-2 transition duration-300 rounded-full hover:bg-black/10 font-medium focus:bg-black/10 h-min navigation-item" data-radix-collection-item="" href="/retirement/">Retirement</a></li>
                        <li><a className="hidden sm:block py-0.5 px-2 transition duration-300 rounded-full hover:bg-black/10 font-medium focus:bg-black/10 h-min" data-radix-collection-item="" href="/pricing/">Pricing</a></li>
                        <li className="hidden sm:block py-0.5 px-2 transition duration-300 rounded-full hover:bg-black/10 font-medium focus:bg-black/10 h-min">
                            <button id="radix-:Rp6:-trigger-radix-:Rh6p6:" data-state="closed" aria-expanded="false" aria-controls="radix-:Rp6:-content-radix-:Rh6p6:" data-radix-collection-item="">
                                <span className="pb-0 sm:pb-0 flex items-center justify-between w-full gap-1">
                                    Resources
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-6 md:w-4">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                                    </svg>
                                </span>
                            </button>
                            <div className="opacity-0 hidden sm:flex sm:translate-y-0 pointer-events-none dropdown-content w-full sm:absolute sm:w-64 sm:ml-[-88px] transition-all sm:pt-2 sm:-mt-2">
                                <div data-orientation="horizontal" className="text-black delay-75 transition-all w-full font-normal tracking-wide text-2xl sm:text-sm sm:bg-white sm:border border-black/20 sm:rounded-md sm:px-2 sm:py-2 sm:drop-shadow-md">
                                    <div style={{position:"relative"}}>
                                        <ul data-orientation="horizontal" className="w-full space-y-2 pt-4 sm:pt-0 mt-4 sm:mt-0 border-t sm:border-none border-dashed border-black/20">
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/blog/">Blog</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/etf/">ETF Database</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/etf-comparisons/">ETF Comparisons</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/learn/">Learn</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/all-about-investing/">All About Investing</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/artificial-intelligence/">Artificial Intelligence (AI)</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/comparison/">Comparison</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/trading-strategies/">Trading Strategies</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/algorithmic-trading/">Algorithmic Trading</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/stock-market-and-etfs/">Stock Market &amp; ETFs</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/help/">Help</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="https://composer.trade/help/support">Support</a></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a className="hidden sm:block py-0.5 px-2 transition duration-300 rounded-full hover:bg-black/10 font-medium focus:bg-black/10 h-min" data-radix-collection-item="" href="https://app.composer.trade/login">Login</a></li>
                        <li><a className="py-0.5 px-2 transition duration-300 rounded-full font-semibold hover:bg-green-mid hidden sm:block  text-white bg-black" data-radix-collection-item="" href="https://app.composer.trade/register">Sign Up</a></li>
                        <li className="sm:hidden"><button type="button" aria-pressed="false" data-state="closed" id="radix-:Rp6:-trigger-radix-:R26p6:" aria-expanded="false" aria-controls="radix-:Rp6:-content-radix-:R26p6:" className="py-0.5 px-2 transition duration-300 rounded-full font-semibold hover:bg-green-mid sm:hidden  text-white bg-black"
                                data-radix-collection-item="">Menu</button></li>
                    </ul>
                </div>
                <div className="sm:hidden invisible">
                    <ul className="bg-[#ecedee] overflow-y-auto flex flex-col h-screen top-0 pt-28 pb-8 w-full px-4 transition-all absolute left-0 opacity-0">
                        <li><a className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black" data-radix-collection-item="" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>Home</a></li>
                        <li><a className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black" data-radix-collection-item="" href="/crypto/">Crypto</a></li>
                        <li><a className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black" data-radix-collection-item="" href="/retirement/">Retirement</a></li>
                        <li><a className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black" data-radix-collection-item="" href="/pricing/">Pricing</a></li>
                        <li className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black"><button id="radix-:Rp6:-trigger-radix-:R15ap6:" data-state="closed" aria-expanded="false" aria-controls="radix-:Rp6:-content-radix-:R15ap6:" data-radix-collection-item=""><span className="pb-0 sm:pb-0 flex items-center justify-between w-full gap-1">Resources<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="w-6 md:w-4"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></span></button>
                            <div className="opacity-0 hidden sm:flex sm:translate-y-0 pointer-events-none dropdown-content w-full sm:absolute sm:w-64 sm:ml-[-88px] transition-all sm:pt-2 sm:-mt-2">
                                <div data-orientation="horizontal" className="text-black delay-75 transition-all w-full font-normal tracking-wide text-2xl sm:text-sm sm:bg-white sm:border border-black/20 sm:rounded-md sm:px-2 sm:py-2 sm:drop-shadow-md">
                                    <div style={{position:"relative"}}>
                                        <ul data-orientation="horizontal" className="w-full space-y-2 pt-4 sm:pt-0 mt-4 sm:mt-0 border-t sm:border-none border-dashed border-black/20">
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/blog/">Blog</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/etf/">ETF Database</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/etf-comparisons/">ETF Comparisons</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/learn/">Learn</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/all-about-investing/">All About Investing</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/artificial-intelligence/">Artificial Intelligence (AI)</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/comparison/">Comparison</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/trading-strategies/">Trading Strategies</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/algorithmic-trading/">Algorithmic Trading</a></li>
                                                <li><a className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="/learn/stock-market-and-etfs/">Stock Market &amp; ETFs</a></li>
                                            </div>
                                            <div className="w-full space-y-1">
                                                <li><a className="font-semibold inline-block w-full hover:bg-black/10 rounded transition duration-300 sm:py-1 sm:px-2" data-radix-collection-item="" href="/help/">Help</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" className="inline-block w-full opacity-70 py-1 px-2 hover:bg-black/10 transition rounded duration-300" data-radix-collection-item="" href="https://composer.trade/help/support">Support</a></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black" data-radix-collection-item="" href="https://app.composer.trade/login">Login</a></li>
                        <li><a className="inline-flex items-center flex-wrap w-full py-4 text-4xl font-semibold leading-none text-left border-b gap-x-1 border-black !text-[#1871da]" data-radix-collection-item="" href="https://app.composer.trade/register">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;