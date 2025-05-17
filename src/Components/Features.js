import React from "react";
import FeaturesData from "../Data/FeaturesData";


function Feature() {
    function CreateFeature(Feature) {
        return (
            <div class="col d-flex align-items-start" dir="rtl">
                {Feature.icon}
                <div>
                    <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">{Feature.name}</h3>
                    <p>{Feature.content}</p>
                </div>
            </div>

        )
    }

    return <>
        <div class="container px-4 py-5" id="icon-grid" dir="rtl">
            <h2 class="pb-2 border-bottom">خدماتنا</h2>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {
                    FeaturesData.map(CreateFeature)
                }
            </div>
        </div>
    </>
}

export default Feature;
