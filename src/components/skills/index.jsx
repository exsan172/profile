const Skills = () => {
    return (
        <div className="d-flex flex-fill flex-column" id="skills">
            <div className="d-flex border-bottom pb-2 w-100 justify-content-center my-5">
                <h4>Kemampuan</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column my-2">
                <h5>Frontend</h5>
                <p>HTML - Javascript - CSS - Bootstrap - Tailwind - React JS - React Native - PUG JS - EJS</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column my-2">
                <h5>Backend</h5>
                <p>Express JS - MongoDB - SQL - PHP - Codeigniter</p>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column my-2">
                <h5>Lainya</h5>
                <p>GIT - Figma</p>
            </div>
        </div>
    )
}

export default Skills