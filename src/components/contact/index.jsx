import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import "./style.css"

const Contact = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-fill flex-column my-5" id="contact">
            <div className="d-flex border-bottom pb-2  w-100 justify-content-center">
                <h4>
                    Hubungi saya disini
                </h4>
            </div>
            <div className="d-flex my-5">
                <div className="d-flex mx-2">
                    <a href="https://srtin.my.id/11830e" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className='rainbowColor'/>
                    </a>
                </div>
                <div className="d-flex mx-2">
                    <a href="https://srtin.my.id/eeaab3" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className='rainbowColor'/>
                    </a>
                </div>
                <div className="d-flex mx-2">
                    <a href="https://srtin.my.id/3b8ea776" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" className='rainbowColor'/>
                    </a>
                </div>
                <div className="d-flex mx-2">
                    <a href="https://srtin.my.id/6192" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTelegram} size="2x" className='rainbowColor'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact