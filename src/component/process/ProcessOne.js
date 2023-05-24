import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProcesstData from "../../data/process/ProcessData.json";
import Tilty from 'react-tilty';

const getProcesstData = ProcesstData;

const ProcessOne = () => {
    return (
        <>
            <div className="section section-padding bg-color-light pb--70">
                <h1 className='h1'>Our Workflow</h1>
                <ul className='ul'>
                    {getProcesstData.map((data) => (
                   

                    <li style={{ "--accent-color": data.style}}>
                        <div className="date">{data.subtitle}</div>
                        <div className="title">{data.title}</div>
                        <div className="descr">{data.paragraph}</div>
                    </li>
                    ))}
                </ul >
            </div>
        </>
    )
}

export default ProcessOne;