import Menu from '../components/menu/menu.comp'
import MoveTop from '../components/moveTop'
import Contact from '../components/contact'
import Profile from '../components/profile'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Portofolio from '../components/portofolio'
import Footer from '../components/footer'

const Home = () => {

    return (
        <div className="d-flex flex-column">
            <Menu/>
            <MoveTop/>
            <Profile/>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-11 col-md-7 col-lg-6">
                    <Portofolio/>
                    <Skills/>
                    <Experience/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home