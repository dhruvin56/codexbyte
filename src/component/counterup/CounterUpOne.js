import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import CounterUp from '../../component/counterup/CounterUp';


const CounterUpOne = () => {
    return (
        <div className="section section-padding bg-color-dark">
            <div className="container">
            <SectionTitle 
                    subtitle="Featured Case Study"
                    title="Our Achievements"
                    description="We help you achieve the right balance between resolving business challenges, adapting to new demands, & accelerating your digital journey! We build efficient software solutions to help you convert your idea into reality. From Designing to Developing to Testing & Maintaining - We collaborate with you at every stage of your software building or digital transformation journey. With a custom agile approach, we optimize your journey to accelerate business outcomes."
                    textAlignment="heading-light"
                    textColor=""
                />
                <div className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterUpOne;