import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {testimonials} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Testimonials = () => {
    return (
        <section className="flex-center section-padding" id="testimonial">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="What People Say About Me..." sub="Some of my client's feedback" />

                <div className="lg:columns-3 md:columns-2 columns-1 gap-10 mt-10">
                    {testimonials.map((testimonial) => (
                        <GlowCard card={testimonial}>
                            <div className="flex items-center gap-5">
                                <div>
                                    <img src={testimonial.imgPath} alt={testimonial.name} />
                                </div>
                                <div className="pt-2">
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-blue-400 pt-2">{testimonial.mentions}</p>
                                </div>

                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Testimonials
