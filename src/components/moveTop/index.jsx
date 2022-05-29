import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

const MoveTop = () => {
    
    const top = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="moveTop" onClick={() => top()}>
            <FontAwesomeIcon icon={faArrowUp} size="lg"/>
        </div>
    )
}

export default MoveTop