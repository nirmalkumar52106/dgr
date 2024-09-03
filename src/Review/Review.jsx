import React, { useState } from 'react';

const StudentReviews = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <section>
            <div className="container com-sp pad-bot-70 pg-inn">
                <div className="row">
                    <div className="cor">
                        <div className="col-md-8">
                            <div className="cor-con-mid">
                                <div>
                                    <h3>Student Reviews</h3>
                                    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a data-toggle="tab" href="#home">
                                                <img src="https://digitalgururavi.com/images/icon/cor4.png" alt="Text Review" />
                                                <span>Text Review</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#menu1">
                                                <img src="https://digitalgururavi.com/images/icon/cor5.png" alt="Video Review" />
                                                <span>Video Review</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="home" className="tab-pane fade in active">
                                            <div className="cor-p6">
                                                <h3>Student Reviews</h3>
                                                <div className="cor-p6-revi">
                                                    <div className="cor-p6-revi-left">
                                                        <img src="https://digitalgururavi.com/images/4.jpg" alt="Manish Singh" />
                                                    </div>
                                                    <div className="cor-p6-revi-right">
                                                        <h4>Manish Singh</h4>
                                                        <span style={{ fontSize: '200%', color: '#ffd900' }}>
                                                            ★★★★★
                                                        </span>
                                                        <p>
                                                            I was impressed with the quality of instruction in DGR
                                                            the best digital marketing course in Jaipur. The
                                                            instructors were experts in their field and provided a
                                                            lot of practical insights and real-world examples. The
                                                            course was well-organized and covered a lot of ground
                                                            in a short amount of time.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Repeat similar blocks for other reviews */}
                                                <div className="cor-p6-revi">
                                                    <div className="cor-p6-revi-left">
                                                        <img src="https://digitalgururavi.com/images/4.jpg" alt="Vijendra Kumar" />
                                                    </div>
                                                    <div className="cor-p6-revi-right">
                                                        <h4>Vijendra Kumar</h4>
                                                        <span style={{ fontSize: '200%', color: '#ffd900' }}>
                                                            ★★★★★
                                                        </span>
                                                        <p>
                                                            DigitalGuruRavi is the best institute for digital marketing in Jaipur. 
                                                            The trainers are very experienced and provide individual attention to each student. 
                                                            The institute has great infrastructure, and the study material is very helpful. 
                                                            I highly recommend this institute for digital marketing training.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="cor-p6-revi">
                                                    <div className="cor-p6-revi-left">
                                                        <img src="https://digitalgururavi.com/images/4.jpg" alt="Vijendra Kumar" />
                                                    </div>
                                                    <div className="cor-p6-revi-right">
                                                        <h4>Vijendra Kumar</h4>
                                                        <span style={{ fontSize: '200%', color: '#ffd900' }}>
                                                            ★★★★★
                                                        </span>
                                                        <p>
                                                            DigitalGuruRavi is the best institute for digital marketing in Jaipur. 
                                                            The trainers are very experienced and provide individual attention to each student. 
                                                            The institute has great infrastructure, and the study material is very helpful. 
                                                            I highly recommend this institute for digital marketing training.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="cor-p6-revi">
                                                    <div className="cor-p6-revi-left">
                                                        <img src="https://digitalgururavi.com/images/4.jpg" alt="Vijendra Kumar" />
                                                    </div>
                                                    <div className="cor-p6-revi-right">
                                                        <h4>Vijendra Kumar</h4>
                                                        <span style={{ fontSize: '200%', color: '#ffd900' }}>
                                                            ★★★★★
                                                        </span>
                                                        <p>
                                                            DigitalGuruRavi is the best institute for digital marketing in Jaipur. 
                                                            The trainers are very experienced and provide individual attention to each student. 
                                                            The institute has great infrastructure, and the study material is very helpful. 
                                                            I highly recommend this institute for digital marketing training.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="cor-p6-revi">
                                                    <div className="cor-p6-revi-left">
                                                        <img src="https://digitalgururavi.com/images/4.jpg" alt="Vijendra Kumar" />
                                                    </div>
                                                    <div className="cor-p6-revi-right">
                                                        <h4>Vijendra Kumar</h4>
                                                        <span style={{ fontSize: '200%', color: '#ffd900' }}>
                                                            ★★★★★
                                                        </span>
                                                        <p>
                                                            DigitalGuruRavi is the best institute for digital marketing in Jaipur. 
                                                            The trainers are very experienced and provide individual attention to each student. 
                                                            The institute has great infrastructure, and the study material is very helpful. 
                                                            I highly recommend this institute for digital marketing training.
                                                        </p>
                                                    </div>
                                                </div>

                                                <center>
                                                    <a href="https://www.google.com/search?q=digital+guru+ravi">
                                                        <button>View More Review</button>
                                                    </a>
                                                </center>
                                            </div>

                                            <div className="cor-p6">
                                                <h3>Write Reviews</h3>
                                                <div className="cor-p7-revi">
                                                    <form className="col s12" onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    className="validate"
                                                                    value={name}
                                                                    onChange={handleNameChange}
                                                                />
                                                                <label>Name</label>
                                                            </div>
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="email"
                                                                    className="validate"
                                                                    value={email}
                                                                    onChange={handleEmailChange}
                                                                />
                                                                <label>Email id</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <textarea
                                                                    className="materialize-textarea"
                                                                    value={message}
                                                                    onChange={handleMessageChange}
                                                                />
                                                                <label>Message</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <input
                                                                    type="submit"
                                                                    value="Submit"
                                                                    className="waves-effect waves-light btn-book"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="menu1" className="tab-pane fade">
                                            <div className="cor-p6">
                                                <h3>Write Reviews</h3>
                                                <div className="cor-p7-revi">
                                                    <form className="col s12" onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="text"
                                                                    className="validate"
                                                                    value={name}
                                                                    onChange={handleNameChange}
                                                                />
                                                                <label>Name</label>
                                                            </div>
                                                            <div className="input-field col s6">
                                                                <input
                                                                    type="email"
                                                                    className="validate"
                                                                    value={email}
                                                                    onChange={handleEmailChange}
                                                                />
                                                                <label>Email id</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <textarea
                                                                    className="materialize-textarea"
                                                                    value={message}
                                                                    onChange={handleMessageChange}
                                                                />
                                                                <label>Message</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <input
                                                                    type="submit"
                                                                    value="Submit"
                                                                    className="waves-effect waves-light btn-book"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="cor-side-com">
                                <div className="ho-ev-latest ho-ev-latest-bg-3">
                                    <div className="ho-lat-ev">
                                        <h4>Student Login</h4>
                                        <p>Student area velit convallis venenatis lacus quis, efficitur lectus.</p>
                                    </div>
                                </div>
                                <div className="ho-st-login">
                                    <div className="col s12">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text" className="validate" />
                                                    <label>Student user name</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="password" className="validate" />
                                                    <label>Password</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="submit" value="Login" className="waves-effect waves-light light-btn" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="cor-side-com">
                                <div className="ho-ev-latest ho-ev-latest-bg-2">
                                    <div className="ho-lat-ev">
                                        <a href="#">
                                            <h4>Job Vacants</h4>
                                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="ho-ev-latest in-ev-latest-bg-1">
                                    <div className="ho-lat-ev">
                                        <a href="#">
                                            <h4>Job Vacants</h4>
                                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="ho-ev-latest in-ev-latest-bg-1">
                                    <div className="ho-lat-ev">
                                        <a href="#">
                                            <h4>Job Vacants</h4>
                                            <p>Nulla at velit convallis, venenatis lacus quis, efficitur lectus.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentReviews;
