import React from 'react'
import {counterItems} from "../constants/index.js";
import CountUp from "react-countup";


const Animatedcounter = () => {
    return (
        <div className="padding-x-lg xl:mt-0 mt-32 flex flex-row" id="counter">
            <div className="mx-auto grid grid-cols-4 gap-10px">
                {counterItems.map((item) => (
                    <div className="bg-zinc-900 flex flex-col rounded-lg p-10 justify-center">
                        <div key={counterItems.label} className="counter-number text-white-500 text-5xl font-bold mb-2">

                            <CountUp suffix={item.suffix} end={item.value} />

                        </div>

                        <div>
                            {item.label}
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
export default Animatedcounter
