import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Shortin from '../../assets/shortin.png'
import Covid from '../../assets/covid_info.png'
import Telur_rebus_apps from '../../assets/telur_rebus_apps.png'
import Telur_rebus_web from '../../assets/telur_rebus_web.png'
import Laundy from '../../assets/laundry_apps.png'
import WaGen from '../../assets/whatsapp_link_generator.png'
import "./style.css"

const Portofolio = () => {
    return (
        <div className="d-flex flex-fill justify-content-center align-items-center flex-column my-5" id="portofolio">
            <div className="d-flex border-bottom pb-2 w-100 justify-content-center">
                <h4>Portofolio</h4>
            </div>
            <div className="d-flex mt-5">
                <Carousel className='rounded border'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Shortin}
                        alt="short link"
                        />
                        <Carousel.Caption>
                            <a href="https://srtin.my.id/" target="_blank" rel="noreferrer">
                                <button className="px-4 py-2 border-0 rounded text-white shadow" style={{backgroundColor: "#00cba9"}}>
                                    Lihat aplikasi
                                    &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                                </button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={WaGen}
                        alt="whatsapp generator"
                        />
                        <Carousel.Caption>
                            <a href="https://wa.srtin.my.id/" target="_blank" rel="noreferrer">
                                <button className="px-4 py-2 border-0 rounded text-white shadow" style={{backgroundColor: "#00cba9"}}>
                                    Lihat aplikasi
                                    &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                                </button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Telur_rebus_apps}
                        alt="telur rebus app"
                        />

                        <Carousel.Caption>
                            <a href="https://srtin.my.id/13cd389c" target="_blank" rel="noreferrer">
                                <button className="px-4 py-2 border-0 rounded text-white shadow" style={{backgroundColor: "#00cba9"}}>
                                    Lihat aplikasi
                                    &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                                </button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Laundy}
                        alt="laundry android"
                        />

                        <Carousel.Caption>
                            <a href="https://srtin.my.id/23ba" target="_blank" rel="noreferrer">
                                <button className="px-4 py-2 border-0 rounded text-white shadow" style={{backgroundColor: "#00cba9"}}>
                                    Lihat aplikasi
                                    &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                                </button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Telur_rebus_web}
                        alt="timer telur rebus web"
                        />

                        <Carousel.Caption>
                            <a href="https://srtin.my.id/5accb1c8" target="_blank" rel="noreferrer">
                                <button className="px-4 py-2 border-0 rounded text-white shadow" style={{backgroundColor: "#00cba9"}}>
                                    Lihat aplikasi
                                    &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                                </button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Covid}
                        alt="covid information"
                        />

                        <Carousel.Caption>
                            <a href="https://srtin.my.id/9d49" target="_blank"  rel="noreferrer">
                                <button className="px-4 py-2 border-0 rounded text-white shadow" style={{backgroundColor: "#00cba9"}}>
                                    Lihat aplikasi
                                    &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                                </button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Portofolio