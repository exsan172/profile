import Profile_pic from '../../assets/profile_pic.jpeg'
import "./style.css"

const Profile = () => {
    return (
        <div className="d-flex flex-fill mb-5 mt-0 flex-column pt-5" id="profile">
            <div className="d-flex flex-fill justify-content-center">
                <img src={Profile_pic} alt="profile" className='rounded-circle profile_pic border shadow'/>
            </div>
            <div className="d-flex flex-fill justify-content-center align-items-center my-3 flex-column">
                <div className="col-11 col-md-7 col-lg-6 text-center text-dark bg-white shadow p-3 rounded">
                    <h2>Exsan Renaldhi</h2>
                    <p className='mt-4'>
                        Hi, saya adalah software engineer saya lulusan SMK jurusan Rekayasa Perangkat Lunak atau RPL. saya bisa membuat aplikasi android, website bagian frontend maupun backend, anda bisa menghubungi saya di bagian kontak pada halaman website ini.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile