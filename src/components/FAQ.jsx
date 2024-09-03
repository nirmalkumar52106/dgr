import React from 'react'

const FAQ = () => {
  return (
    <>
    
    <section class="bg-light py-3 py-md-5">
        <div class="container-lg">
            <div class="con-title">
                <h2> <span> FAQs</span></h2>
            </div>
            <div class="row gy-5 gy-lg-0 align-items-lg-center">
                <div class="col-10 col-lg-5 ">
                    <img class="img-fluid rounded p-4" loading="lazy"
                        src="https://magnifyinstitute.com/images/welcomeimg1.png" alt="How can we help you?"/>
                </div>
                <div class="col-12 col-lg-7">
                    <div class="row justify-content-xl-end">
                        <div class="col-12 col-xl-11 px-5">
                            <h2 class="h2 mb-3">How can we help you?</h2>
                            <p class="lead fs-4 text-secondary mb-5">We hope you have found an answer to your question.
                                If you need any help, please search your query on our Support Center or contact us via
                                email.</p>
                            <div class="accordion accordion-flush" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accor-text" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            How Do I Change My Billing Information?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>To change your billing information, please follow these steps:</p>
                                            <ul>
                                                <li>Go to our website and sign in to your account.</li>
                                                <li>Click on your profile picture in the top right corner of the page
                                                    and select "Account Settings."</li>
                                                <li>Under the "Billing Information" section, click on "Edit."</li>
                                                <li>Make your changes and click on "Save."</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed accor-text " type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            How Does Payment System Work?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            A payment system is a way to transfer money from one person or organization
                                            to another. It is a complex process that involves many different parties,
                                            including banks, credit card companies, and merchants.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed accor-text" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            How Do I Cancel My Account?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>To cancel your account, please follow these steps:</p>
                                            <ul>
                                                <li>Go to our website and sign in to your account.</li>
                                                <li>Click on your profile picture in the top right corner of the page
                                                    and select "Account Settings."</li>
                                                <li>Scroll to the bottom of the page and click on "Cancel Account."</li>
                                                <li>Enter your password and click on "Cancel Account."</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingfour">
                                        <button class="accordion-button collapsed accor-text" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                            aria-expanded="false" aria-controls="collapsefour">
                                            How Do I Cancel My Account?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" class="accordion-collapse collapse"
                                        aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>To cancel your account, please follow these steps:</p>
                                            <ul>
                                                <li>Go to our website and sign in to your account.</li>
                                                <li>Click on your profile picture in the top right corner of the page
                                                    and select "Account Settings."</li>
                                                <li>Scroll to the bottom of the page and click on "Cancel Account."</li>
                                                <li>Enter your password and click on "Cancel Account."</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default FAQ