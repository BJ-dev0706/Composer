import Image from "next/image"

const Footer = () => {
    return(
        <footer className="py-14 mt-auto bg-[#1c372a] text-white">
    <div className="inner">
        <div className="flex flex-col items-baseline justify-between tracking-wider gap-y-14 sm:flex-row mb-14">
            <div className="">
                <svg viewBox="0 0 141 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Composer Logo" className="h-6">
                    <path id="graph-1" d="M4.72867 17.5484H0.599609V21.9355H4.72867V17.5484Z" fill="currentColor"></path>
                    <path id="graph-2" d="M10.6642 11.8711H6.53519V21.9356H10.6642V11.8711Z" fill="currentColor"></path>
                    <path id="graph-3" d="M16.5998 5.93555H12.4708V21.9355H16.5998V5.93555Z" fill="currentColor"></path>
                    <path id="graph-4" d="M22.5354 0H18.4063V21.9355H22.5354V0Z" fill="currentColor"></path>
                    <path id="gradient-1" d="M4.72916 11.8711H0.600098V13.6775H4.72916V11.8711Z" fill="currentColor"></path>
                    <path id="gradient-2" d="M10.6647 5.93555H0.600098V8.38716H10.6647V5.93555Z" fill="currentColor"></path>
                    <path id="gradient-3a" d="M4.72867 0H0.599609V2.83871H4.72867V0Z" fill="currentColor"></path>
                    <path id="gradient-3b" d="M16.5998 0H6.53519V2.83871H16.5998V0Z" fill="currentColor"></path>
                    <path id="c"
                        d="M27.053 11.148C27.053 5.93595 30.3245 1.96033 35.516 1.96033C37.5262 1.96033 39.1664 2.52061 40.3773 3.45323C41.7906 4.54011 42.627 6.13753 42.8286 7.95846H39.156C38.8531 6.22241 37.5428 5.05968 35.512 5.05968C32.3348 5.05968 30.8198 7.70871 30.8198 11.148C30.8198 14.5873 32.6459 17.2117 35.5365 17.2117C37.6001 17.2117 39.0414 15.9629 39.2583 14.145H42.89C42.7876 15.7253 42.1039 17.2403 40.9206 18.354C39.6924 19.5127 37.9808 20.2415 35.5407 20.2415C30.566 20.2415 27.053 16.4256 27.053 11.148Z"
                        fill="currentColor"></path>
                    <path id="o"
                        d="M53.6649 13.5839C53.6649 11.1559 52.5471 9.50587 50.5572 9.50587C48.5672 9.50587 47.4536 11.1559 47.4536 13.5839C47.4536 16.0118 48.5468 17.6372 50.5572 17.6372C52.5675 17.6372 53.6649 16.0117 53.6649 13.5839ZM43.953 13.5839C43.953 9.82114 46.6349 6.92651 50.5613 6.92651C54.4878 6.92651 57.1655 9.82128 57.1655 13.5839C57.1655 17.3464 54.492 20.2412 50.5613 20.2412C46.6307 20.2412 43.953 17.3464 43.953 13.5839Z"
                        fill="currentColor"></path>
                    <path id="m"
                        d="M58.682 7.27022H62.0026V8.98162H62.0763C62.7805 7.80241 64.0048 6.92212 65.7612 6.92212C67.3662 6.92212 68.6395 7.80241 69.2577 9.13301H69.3069C70.1872 7.73273 71.5178 6.92212 73.1187 6.92212C75.8045 6.92212 77.2909 8.67853 77.2909 11.4423V19.8684H73.8394V12.0318C73.8394 10.6193 73.1515 9.87409 71.9274 9.87409C70.5476 9.87409 69.7123 10.9509 69.7123 12.5928V19.8685H66.2608V12.0319C66.2608 10.6195 65.5729 9.87423 64.3489 9.87423C63.0141 9.87423 62.1338 10.9511 62.1338 12.5929V19.8686H58.6823L58.682 7.27022Z"
                        fill="currentColor"></path>
                    <path id="p"
                        d="M88.3943 13.686C88.3943 11.3399 87.5631 9.71036 85.5568 9.71036C83.5505 9.71036 82.6825 11.4628 82.6825 13.686C82.6825 15.9092 83.7266 17.4119 85.6714 17.4119C87.3378 17.4119 88.3943 16.0279 88.3943 13.686ZM79.3129 7.27022H82.6335V8.83423H82.7072C83.5261 7.7247 84.7135 6.92212 86.4331 6.92212C89.7741 6.92212 91.8949 9.67352 91.8949 13.5795C91.8949 17.4854 89.688 20.241 86.4371 20.241C84.6929 20.241 83.5383 19.5409 82.8136 18.4641H82.7644V23.9995H79.3129V7.27022Z"
                        fill="currentColor"></path>
                    <path id="o-2"
                        d="M102.515 13.5839C102.515 11.1559 101.397 9.50587 99.4069 9.50587C97.4169 9.50587 96.3034 11.1559 96.3034 13.5839C96.3034 16.0118 97.3965 17.6372 99.4069 17.6372C101.417 17.6372 102.515 16.0117 102.515 13.5839ZM92.8027 13.5839C92.8027 9.82114 95.4846 6.92651 99.411 6.92651C103.338 6.92651 106.015 9.82128 106.015 13.5839C106.015 17.3464 103.342 20.2412 99.411 20.2412C95.4804 20.2412 92.8027 17.3464 92.8027 13.5839Z"
                        fill="currentColor"></path>
                    <path id="s"
                        d="M106.748 15.7907H109.958C110.167 17.2074 111.166 17.8421 112.636 17.8421C114.105 17.8421 114.888 17.2975 114.888 16.4254C114.888 15.234 113.304 15.1071 111.592 14.7754C109.345 14.3401 107.112 13.7354 107.112 10.9513C107.112 8.16722 109.405 6.92249 112.296 6.92249C115.653 6.92249 117.508 8.55202 117.746 11.0742H114.613C114.466 9.7599 113.623 9.29309 112.251 9.29309C111.002 9.29309 110.159 9.76392 110.159 10.6524C110.159 11.7006 111.788 11.8029 113.549 12.159C115.678 12.589 118.057 13.1744 118.057 16.1674C118.057 18.7345 115.85 20.2412 112.681 20.2412C109.016 20.2412 106.932 18.4849 106.748 15.7907Z"
                        fill="currentColor"></path>
                    <path id="e"
                        d="M127.978 12.2082C127.871 10.6279 126.835 9.54686 125.349 9.54686C123.621 9.54686 122.774 10.5869 122.483 12.2082H127.978ZM119.04 13.5553C119.04 9.81725 121.586 6.92249 125.296 6.92249C127.396 6.92249 128.987 7.7546 130.038 9.1718C131.049 10.4975 131.564 12.3559 131.56 14.5298H122.438C122.684 16.4296 123.74 17.6088 125.591 17.6088C126.852 17.6088 127.601 17.0396 127.965 16.1103H131.36C131.102 17.3188 130.385 18.4332 129.264 19.1965C128.313 19.8451 127.092 20.2373 125.603 20.2373C121.431 20.2373 119.04 17.3222 119.04 13.5553Z"
                        fill="currentColor"></path>
                    <path id="r"
                        d="M136.395 9.27661H136.469C137.251 7.83948 138.139 7.11475 139.621 7.11475C139.99 7.11475 140.215 7.13926 140.407 7.21295V10.2223H140.329C138.098 9.9807 136.526 11.1434 136.526 13.8089V19.8686H133.074V7.27044H136.395V9.27661Z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <div className="flex items-center gap-x-4">
                <a target="_blank" rel="noopener noreferrer" className="w-fit" aria-label="Composer on Twitter" href="https://twitter.com/composertrade"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"></path></svg></a>
                <a target="_blank" rel="noopener noreferrer" className="w-fit" aria-label="Composer on LinkedIn" href="https://linkedin.com/company/investcomposer/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"></path></svg></a>
                <a target="_blank" rel="noopener noreferrer" className="w-fit" aria-label="Composer on YouTube" href="https://www.youtube.com/channel/UCH5AhgNlNhAN23Ft6CXNg4Q"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M234.3,69.8a23.5,23.5,0,0,0-14.5-16.3C185.6,40.3,131,40.4,128,40.4s-57.6-.1-91.8,13.1A23.5,23.5,0,0,0,21.7,69.8C19.1,79.7,16,97.9,16,128s3.1,48.3,5.7,58.2a23.5,23.5,0,0,0,14.5,16.3c32.8,12.7,84.2,13.1,91.1,13.1h1.4c6.9,0,58.3-.4,91.1-13.1a23.5,23.5,0,0,0,14.5-16.3c2.6-9.9,5.7-28.1,5.7-58.2S236.9,79.7,234.3,69.8Zm-72.1,61.5-48,32a3.6,3.6,0,0,1-2.2.7,4.5,4.5,0,0,1-1.9-.5A3.9,3.9,0,0,1,108,160V96a3.9,3.9,0,0,1,2.1-3.5,4,4,0,0,1,4.1.2l48,32a3.9,3.9,0,0,1,0,6.6Z"></path></svg></a>
                <a className="text-sm" href="mailto:help@composer.trade">help@composer.trade</a>
            </div>
        </div>
        <div className="flex flex-col items-start justify-between md:flex-row gap-y-">
            <div className="flex flex-col order-last lg:max-w-full text-xs md:text-sm leading-5 tracking-wide gap-y-4 md:order-first text-inherit opacity-40">
                <p>Composer is a registered investment adviser with the US Securities and Exchange Commission (SEC). While such registration does not imply a certain level of skill, it does require us to follow federal regulations that protect you, the investor.
                    By law, we must provide investment advice that is in the best interest of our client. Please refer to {" Composer's "}
                    <a target="_blank" rel="noopener noreferrer" className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=887920">ADV Part 2A Brochure</a>                    for important additional information.</p>
                <p>With any investment, your capital is at risk. The value of your portfolio with Composer can go down as well as up. Past performance is no guarantee of future results. By using this website, you accept our
                    <a className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="/terms-of-service/">Terms of Service</a>,
                    <a className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="/privacy-policy/">Privacy Policy</a>,
                    <a className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="/advisory-agreement/">Advisory Agreement</a> and
                    <a className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="/payment-agreement/">Payment Agreement</a>. Please see our
                    <a target="_blank" rel="noopener noreferrer" className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="https://reports.adviserinfo.sec.gov/crs/crs_311289.pdf">Customer Relationship Summary</a>.</p>
                <p>Market data refreshed at least every 15 minutes unless otherwise indicated. Market data provided by Xignite.</p>
                <p>Please read
                    <a className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="/disclosures/">important legal disclosures</a>.</p>
                <p>Brokerage Services: Securities products and brokerage services are offered by Composer Securities LLC, a broker-dealer registered with the SEC and member of FINRA / SIPC. Composer Securities LLC and Composer Technologies Inc. are separate
                    but affiliated companies. Accounts are carried and securities execution, clearance and settlement services are provided by Alpaca Securities LLC, and Apex Clearing Corporation, SEC-registered broker-dealers and members of FINRA / SIPC.
                    Alpaca Securities is a wholly-owned subsidiary of AlpacaDB, Inc. Apex Clearing Corporation, is a wholly-owned subsidiary of Apex Fintech Solutions Inc. Check the background of Composer Securities LLC, Alpaca Securities LLC, and Apex
                    Clearing Corporation on FINRA BrokerCheck. This is not an offer, solicitation of an offer, or advice to buy or sell securities or open a brokerage account in any jurisdiction where Composer Securities is not registered. Securities
                    products offered by Composer Securities are not FDIC insured.</p>
                <p>The cash sweep program is made available in coordination with Apex Clearing Corporation through Composer Securities. Please read the Important Disclosures for more information. Please read the
                    <a target="_blank" rel="noopener noreferrer" className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="https://live-apexv2-import.pantheonsite.io/wp-content/uploads/2023/11/Apex-FDIC-Sweep-Program-Terms-and-Conditions-1.pdf">Important Disclosures</a>                    for more information.</p>
                <p>Composer Securities is a member of SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at
                    <a target="_blank" rel="noopener noreferrer" className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="https://www.sipc.org">www.sipc.org</a>. SIPC does not protect against
                    market losses.
                </p>
                <p>Securities products are: Not FDIC insured · Not bank guaranteed · May lose value</p>
                <p>Cryptocurrency Services: Composer Crypto LLC is a technology company offering communication and information services for self-directed traders under a software license agreement with Alpaca Crypto LLC. Composer Crypto LLC is a wholly separate
                    affiliate of Composer Technologies Inc. Neither Composer Crypto LLC nor Composer Technologies Inc. are involved with the execution or custody of cryptocurrencies. Composer Crypto, LLC does not act as an exchange. Cryptocurrency trading,
                    execution, and custody services are provided by Alpaca Crypto, LLC (NMLS ID:2160858). Alpaca Crypto is a money services business © InnReg LLC Confidential registered with the Financial Crimes Enforcement Network (“FINCEN”) and a states-licensed
                    money transmitter, but is not a registered broker-dealer or a FINRA member. Cryptocurrencies are held in your Alpaca Crypto LLC account, are not securities, and are not FDIC insured or protected by SIPC. You can find more information
                    about Alpaca Crypto <a target="_blank" rel="noopener noreferrer" className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60" href="https://www.nmlsconsumeraccess.org/">here</a>.
                    Cryptocurrency is highly speculative, involves a high degree of risk, and has the potential for loss of the entire amount of an investment. Please review the <a target="_blank" rel="noopener noreferrer" className="underline hover:bg-black/10 duration-200 decoration-1 underline-offset-2 transition decoration-white/60"
                        href="https://files.alpaca.markets/disclosures/library/CryptoRiskDisclosures.pdf">Risk Disclosures</a> and make sure you fully understand the risks involved before trading cryptocurrencies. Your Alpaca Crypto account is separate from
                    your brokerage account with Composer Securities and Alpaca Securities, which holds US-listed stocks and ETFs.</p>
                <p>Trademarks and logos are the property of their respective owners and do not represent endorsements of any kind. Unless otherwise noted, Composer Technologies Inc., Composer Securities LLC, and its affiliates are not partners, affiliates,
                    or licensees of these companies.</p>
                <p>© 2024 All rights reserved.</p>
                <h5 className="font-semibold tracking-wide">Important Disclosures</h5>
                <p>Naren S. is a client of Composer Technologies Inc. and is not being compensated for sharing their opinion and experience with our firm. Any compensation creates a conflict of interest and Naren S.s comments may not be representative of
                    any other {" person's "} experience with the firm.</p>
                <p>Xuan X.L. is a client of Composer Technologies Inc. and is not being compensated for sharing their opinion and experience with our firm. Any compensation creates a conflict of interest and Xuan X.L.s comments may not be representative
                    of any other {" person's "} experience with the firm.</p>
                <p>Douglas T. is a client of Composer Technologies Inc. and is not being compensated for sharing their opinion and experience with our firm. Any compensation creates a conflict of interest and Douglas T.s comments may not be representative
                    of any other {" person's "} experience with the firm.</p>
            </div>
        </div>
        <div className="mt-4">
            <button id="cpra_button" style={{display: "none"}} className="flex gap-2 items-center mb-2">
                <Image alt="" src="/_next/static/media/privacy-choices-icon.3196c70b.svg" width="30" height="14" decoding="async" data-nimg="future" className="w-8" loading="lazy" style={{color:"transparent"}} />
                <span className="font-medium text-xs text-white tracking-wide font-inter">Your Privacy Choices</span>
            </button></div>
    </div>
</footer>


    )
}

export default Footer;