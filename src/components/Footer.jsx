import { FaGithub } from "react-icons/fa";
import Container from "react-bootstrap/esm/Container";

import './style.css';

function Footer() {

    const currentTime = new Date();

    return (
        <footer className='mt-3 bg-dark' id='faq'>
            <div className='text-center text-white'>
                <Container>
                    <p className="display-5 border-bottom p-4">Travel Agency</p>
                </Container>
                <p >Contact: <a href='https://github.com/Jbuenoss'><FaGithub/> Jbuenoss</a></p>
                <p className="pb-3">&copy;{currentTime.getFullYear()} Copyright by Jbuenoss. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer