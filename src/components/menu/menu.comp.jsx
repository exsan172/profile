import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./menu.style.css"

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView()
    }

    return (
        <div className="d-flex w-100 p-2 text-white menu flex-column flex-md-rows justify-content-center sticky-top">
            <div className="container">
                <div className="row mx-0 align-items-center">
                    <div className="col col-md-2 px-2">
                        <b>Exsan Renaldhi</b>
                    </div>
                    <div className="col-md-10 d-none d-md-block">
                        <div className="d-flex flex-fill flex-rows justify-content-end">
                            <div className="d-flex mx-2">
                                <a onClick={() => scrollTo("profile")} className="pointer text-decoration-none text-white" href='#profile'>Profile</a>
                            </div>
                            <div className="d-flex mx-2">
                                <a onClick={() => scrollTo("portofolio")} className="pointer text-decoration-none text-white" href='#Portofolio'>Portofolio</a>
                            </div>
                            <div className="d-flex mx-2">
                                <a onClick={() => scrollTo("skills")} className="pointer text-decoration-none text-white" href='#Kemampuan'>Kemampuan</a>
                            </div>
                            <div className="d-flex mx-2">
                                <a onClick={() => scrollTo("experience")} className="pointer text-decoration-none text-white" href='#Pengalaman'>Pengalaman</a>
                            </div>
                            <div className="d-flex mx-2">
                                <a onClick={() => scrollTo("contact")} className="pointer text-decoration-none text-white" href='#Kontak'>Kontak</a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-block d-md-none">
                        <div className="d-flex flex-fill justify-content-end">
                            {
                                showMenu === false ?
                                <FontAwesomeIcon icon={faBars} size="lg" onClick={() => setShowMenu(true)}/>
                                :
                                <FontAwesomeIcon icon={faTimes} size="lg" onClick={() => setShowMenu(false)}/>
                            }
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-md-10 ${showMenu === true ? "d-block" : "d-none"}`}>
                    <div className="d-flex flex-fill flex-column mt-3">
                        <div className="d-flex m-2">
                            <a onClick={() => scrollTo("profile")} className="pointer text-decoration-none text-white" href='#Profile'>Profile</a>
                        </div>
                        <div className="d-flex m-2">
                            <a onClick={() => scrollTo("portofolio")} className="pointer text-decoration-none text-white" href='#Portofolio'>Portofolio</a>
                        </div>
                        <div className="d-flex m-2">
                            <a onClick={() => scrollTo("skills")} className="pointer text-decoration-none text-white" href='#Kemampuan'>Kemampuan</a>
                        </div>
                        <div className="d-flex m-2">
                            <a onClick={() => scrollTo("experience")} className="pointer text-decoration-none text-white" href='#Pengalaman'>Pengalaman</a>
                        </div>
                        <div className="d-flex m-2">
                            <a onClick={() => scrollTo("contact")} className="pointer text-decoration-none text-white" href='#Kontak'>Kontak</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu