import React, { useState } from 'react'

export default function AboutUs(props) {

    return (
        <div>
            <div className="main About-main" style={props.style}>
                <div className="container py-3">
                    <h1 className='my-3 mx-3'>About</h1>
                    <div className="accordion" id="accordionExample" style={props.style}>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Section 1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={props.style}>
                                    <strong>This is the first section's content.</strong> You can modify it to include information about your project, services, or anything you'd like to highlight.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Section 2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={props.style}>
                                    <strong>This is the second section's content.</strong> Here you can add more detailed information, FAQs, or other relevant content.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Section 3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={props.style}>
                                    <strong>This is the third section's content.</strong> You can use this section for testimonials, additional services, or contact information.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
