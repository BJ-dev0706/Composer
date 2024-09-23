import Image from "next/image";


const Customize = () => {
    return(
<div className="bg-grey-light">
    <div className="text-white bg-blue create">
        <div className="div-block-124">
            <h2 className="text-white headline-1 create-header">Customize and <br />Create</h2>
            <div className="text-white div-block-119">
                <p className="text-white paragraph-1 md:pr-6 _w-50 opacity-80">Every strategy on Composer is fully editable. Swap out assets, adjust programmatic logic, and tweak parameters.</p>
                <p className="text-white paragraph-1 md:pl-6 _w-50 opacity-80">Use our no-code, visual editor to modify symphonies or create your own from scratch.</p>
            </div>
        </div>
        <div className="div-block-158 bg-pink hardlight z-50"></div>
    </div>
    <div className="text-white div-block-120">
        <span className="flex items-center text-xs font-medium sm:hidden text-inherit opacity-40 gap-x-1">
            scroll
            <div className="flex items-center gap-x-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="rotate-180">
                    <rect width="256" height="256" fill="none"></rect>
                    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                </svg> 
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                </svg>
            </div>
        </span>
        <Image alt="A mockup of the strategy editor, showing how a strategy is built with a mix of specified and dynamic weights, filters and conditional statements, along with a preview of the backtest results." 
            src="/editor-preview.webp" width="2880" height="2376" decoding="async"
            data-nimg="future" className="relative shadow image-22 shadow-home" loading="lazy" style={{color:"transparent"}} />
    </div>
    <div className="text-black editor-features">
        <div className="editor-features-grid">
            <div className="inner">
                <div className="w-layout-grid grid-10 grid">
                    <div id="w-node-a0eda0a2-f762-ebaa-9b39-4aaad6074ce1-1f680737" className="editor-feature block-1">
                        <Image alt="UI element showing specified weighting: 70% to ICLN, 20% to FSLR and 10% to TSLA" src="/editor-weights.webp" width="946" height="534" decoding="async" data-nimg="future" loading="lazy" style={{color:"transparent"}} />
                        <div className="editor-feature-desc">
                            <p className="font-semibold paragraph-2">Apply weighting</p>
                            <p className="paragraph-2 soft">Custom weight, inverse volatility, market cap or balance equally.</p>
                        </div>
                    </div>
                    <div id="w-node-fd2efaaa-0996-0e0b-a2d2-6987b0a05703-1f680737" className="editor-feature">
                        <Image alt="" src="/editor-if.webp" width="948" height="534" decoding="async" data-nimg="future" loading="lazy" style={{color:"transparent"}} />
                        <div className="editor-feature-desc">
                            <p className="font-semibold paragraph-2">If this, then that</p>
                            <p className="paragraph-2 soft">Add conditionals to control the flow of logic.</p>
                        </div>
                    </div>
                    <div id="w-node-e82bb45f-5257-48d7-63f6-0bcf7f88ed9d-1f680737" className="editor-feature block-3">
                        <Image alt="" src="/editor-filter.webp" width="932" height="534" decoding="async" data-nimg="future" loading="lazy" style={{color:"transparent"}} />
                        <div className="editor-feature-desc">
                            <p className="font-semibold paragraph-2">Sort, filter, select</p>
                            <p className="paragraph-2 soft">Start with a pool of candidates and dynamically select those that meet your criteria.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="div-block-121">
            <div className="inner adjust">
                <div className="div-block-122">
                    <div className="div-block-129">
                        <span className="flex items-center text-xs font-medium sm:hidden text-inherit opacity-40 gap-x-1">
                            scroll
                            <div className="flex items-center gap-x-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="rotate-180">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                    <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                </svg> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                    <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                </svg>
                            </div>
                        </span>
                        <Image alt="" src="" width="2090" height="1472"
                            decoding="async" data-nimg="future" className="shadow image-23 shadow-home" loading="lazy" style={{color:"transparent"}} />
                    </div>
                    <div className="div-block-123">
                        <p className="text-3xl font-semibold mb-2">Learn and adapt</p>
                        <p className="paragraph-2 soft">Backtest your strategy. Compare it to a benchmark or to another strategy.<br /><br />Learn from what you see. Tinker and try it out again. And again.</p>
                        <Image alt="A stacked graph of the changes in strategy holdings over time" src=""
                            width="970" height="544" decoding="async" data-nimg="future" className="shadow allocationsgraph shadow-home" loading="lazy" style={{color:"transparent"}} />
                        <p className="caption-reg soft">The Historical Allocation Graph visualizes movements in a symphony’s holdings over time.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="editor-features-grid">
            <div className="inner">
                <div className="w-layout-grid grid-11">
                    <div id="w-node-f41bb856-555a-f003-1d9e-53ba11ac4c83-1f680737" className="editor-feature block-4">
                        <Image alt="UI element showing an example of strategy value: initial symphony value ($10,000), total fees ($14.02), total slippage ($1,684.08) and final value ($26,205.69)"
                            src="" width="746" height="344" decoding="async" data-nimg="future" className="shadow modelfees-mobile shadow-home rounded-4" loading="lazy"
                            style={{color:"transparent"}} />
                        <Image alt="UI element showing an example of strategy value: initial symphony value ($10,000), total fees ($14.02), total slippage ($1,684.08) and final value ($26,205.69)"
                            src="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Feditor-modelfees.63bd6f17.png&amp;w=3840&amp;q=75" width="1250" height="174" decoding="async" data-nimg="future" className="shadow _w-9-12 shadow-home rounded-4 modelfees" loading="lazy"
                            style={{color:"transparent"}} />
                        <div className="editor-feature-desc">
                            <p className="font-semibold paragraph-2">Model the value of your symphony</p>
                            <p className="paragraph-2 soft">Fees, slippage and final value are calculated for you.</p>
                        </div>
                    </div>
                    <div id="w-node-f41bb856-555a-f003-1d9e-53ba11ac4c88-1f680737" className="editor-feature share">
                        <Image alt=""  src=""
                            width="342" height="417" decoding="async" data-nimg="future" className="w-40" loading="lazy" style={{color:"transparent"}} />
                        <div className="_w-50 sm-w-100">
                            <p className="font-semibold paragraph-2">Share what you build</p>
                            <p className="paragraph-2 soft">Share your strategy with others. They’ll be able to test it and even invest in it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Customize;