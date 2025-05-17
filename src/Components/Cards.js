import React from "react";

function Card() {

    return <>
        < div class="row row-cols-1 row-cols-md-2 g-4" >
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
        </div>
    </>
}

export default Card;