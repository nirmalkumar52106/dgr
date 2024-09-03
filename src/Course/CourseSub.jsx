import { homesubcourse } from '../webdata/subcoursedata'
import { Link } from 'react-router-dom'

const CourseSub = () => {

    return (
        <>

            <section className="container-lg allPrograms">
                <div className="con-title">
                    <h2> Our <span> Programs</span></h2>
                    <h4>We focus on the bright future of students, Deliver courses with several features </h4>
                </div> 
                <ul className="cards all-courses-card">
                    {homesubcourse.map((item) => {
                        return (
                            <>
                                <li key={item.id}>
                                    <Link to={`/demo/${item.id}`} className="card-pop">
                                        <img src={item.img1} className="card__image" alt="" />
                                        <div className="card__overlay">
                                            <div className="card__header">
                                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                                    <path />
                                                </svg>
                                                <div className="card__header-text">
                                                    <h3 className="card__title">{item.cardheading}</h3>
                                                    <div> <i className="fa-solid fa-circle-check"></i>
                                                        <span className="card__status">{item.cardstutas1}</span>
                                                    </div>
                                                    <div> <i className="fa-solid fa-circle-check"></i>
                                                        <span className="card__status">{item.cardstutas2}</span>
                                                    </div>
                                                    <div> <i className="fa-solid fa-circle-check"></i>
                                                        <span className="card__status">{item.cardstutas3}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card__description">{item.cardpara}.<br />
                                                <button className="course-btn">
                                                    {item.cardbtn}
                                                </button>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </>
                        )
                    })
                    }
                </ul>
            </section >


        </>
    )
}

export default CourseSub