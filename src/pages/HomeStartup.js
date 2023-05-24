import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BannerFour from '../component/banner/BannerFour';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFour from '../component/project/ProjectFour';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

import SectionTitle from '../elements/section-title/SectionTitle';
import ServicePropOne from '../component/service/ServicePropOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import ProcessOne from '../component/process/ProcessOne';




const HomeStartup = () => {

    return (
        <>
        <SEO title="Home Startup"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <HeaderOne />
        <BannerFour />
        <ProjectFour />
        <TestimonialOne />
        <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can help you with"
                        description="Nulla facilisi. Nullam in magna id dolor 
                        blandit rutrum eget vulputate augue sed eu imperdiet."
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div>
        {/* <BrandOne /> */}
        <BlogOne />

        <CounterUpOne />
        <ProcessOne />

        <CtaLayoutOne />
        <FooterOne />
        </main>
        </>
    )
}

export default HomeStartup;

