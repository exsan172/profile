import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <div className="d-flex flex-fill justify-content-center my-5" id="experience">
            <div className="d-flex flex-column w-100">
                <div className="d-flex flex-fill flex-column align-items-center my-3 border-bottom pb-2 w-100 justify-content-center">
                    <h4>Pengalaman</h4>
                </div>
                <div className="d-flex flex-fill flex-column align-items-center my-4">
                    <div className="d-flex flex-column mb-2">
                        <p>PT Indosistem Teknologi Utama sebagai Frontend Engineer</p>
                        <p>Dari Agustus 2020 - Sekarang</p>
                    </div>
                    <div className="d-flex">
                        <a href="https://intama.info/" target="_blank" rel="noreferrer">
                            <button className="px-4 py-2 border rounded text-white" style={{backgroundColor: "#00cba9"}}>
                                Kunjungi
                                &nbsp;
                                <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-fill flex-column align-items-center my-4">
                    <div className="d-flex flex-column mb-2">
                        <p>PT A2Z Solusindo Teknologi sebagai Frontend Engineer</p>
                        <p>Dari September 2018 - Agustus 2020</p>
                    </div>
                    <div className="d-flex">
                        <a href="https://azsolusindo.info/" target="_blank" rel="noreferrer">
                            <button className="px-4 py-2 border rounded text-white" style={{backgroundColor: "#00cba9"}}>
                                Kunjungi
                                &nbsp;
                                <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience