import React from 'react'
import {abilities} from "../constants/index.js";

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg">
            <div className="mx-auto flex grid-cols-3">
                {abilities.map(({imgPath,title,desc}) => (
                    <div className="card-border rounded-xl p-9 flex flex-col gap-4">
                        <div className="size-14">
                            <img src={imgPath} alt={title} />

                        </div>
                        <h3 className="text-2xl text-white font-bold mt-3">
                            {title}
                        </h3>
                        <p className="text-white-50 font-semibold text-lg">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FeatureCards
