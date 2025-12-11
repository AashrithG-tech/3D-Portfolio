import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons} from "../constants/index.js";
import TechIcon from "../components/Models/Techlogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card',{
            y:50,
            opacity:0

        },
            {
                y:0,
                opacity:1,
                stagger:0.2,
                duration:1,
                ease:"power2.inOut",
                scrollTrigger:{
                    trigger:'#skills',
                    start:"top center"
                }
            })

    })
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="My preferred stack" sub="The skills i bring to the table" />

                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="overflow-hidden card-border tech-card group xl:rounded-full rounded-lg p-10 flex items-center justify-center gap-2">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />

                                </div>

                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default TechStack
