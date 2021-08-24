import React,{useState} from 'react'
import './Hero.css';
import CategoriesCard from "../components/Categories/CategoriesCard"
import Login from './Login';
import Signup from './Signup';

const Hero = () => {   
const [modalShow, setModalShow] = useState(false);
const [signup, setSignUp] = useState(false);
    return (
        <section className="hero">
            <nav>
           
            <h1 className="text-white p-3">
            <span style={{ color: "orange" }}></span>Welcome to the world of
            <span style={{ color: "orange" }}> Newsletters!</span>
          </h1>
          <div className="mx-auto">
            <button className="favBtn mx-2" onClick={() => setModalShow(true)}>Login</button>
            <button className="favBtn mx-2" onClick={() => setSignUp(true)}>Signup</button>
            </div>
            <div className="p-5">
            <button className="favBtn">Favourites</button>
            </div>
           
            </nav>
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        <Signup show={signup} onHide={() => setSignUp(false)}/>
          <CategoriesCard/>
        </section>
    )
}

export default Hero;