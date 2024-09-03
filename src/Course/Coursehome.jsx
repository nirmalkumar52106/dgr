import { courceData } from "../webdata/courcehomedata";
import { Link } from "react-router-dom";

function Courcehome() {
    return (
        <>
            <section className="container pop-course-bx pb-5">
                <div className="con-title">
                    <h2> Our <span> Programs</span></h2>
                    <h4>We focus on the bright future of students, Deliver courses with several features </h4>
                </div>
                <ul className="cards">
                    {
                        courceData.map((items) => {
                            return (
                                <li key={items.id}>
                                    <Link to={`/subcourse/${items.id}`} className="card-pop">
                                        <img src={items.cardimg} className="card__image" alt={items.cardtitle} />
                                        <div className="card__overlay">
                                            <div className="card__header">
                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                    <path />
                                                </svg>
                                                <div className="card__header-text">
                                                    <h3 className="card__title">{items.cardtitle}</h3>
                                                    <div> <i className="fa-solid fa-circle-check"></i>
                                                        <span className="card__status">{items.cardstatus}</span>
                                                    </div>
                                                    <div> <i className="fa-solid fa-circle-check"></i>
                                                        <span className="card__status">{items.cardstatus2}</span>
                                                    </div>
                                                    <div> <i className="fa-solid fa-circle-check"></i>
                                                        <span className="card__status">{items.cardstatus3}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card__description">Free Certified Internship: <span className='text-warning'> 6 months</span><br />
                                                <button className="course-btn">
                                                    View Course
                                                </button>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default Courcehome;
