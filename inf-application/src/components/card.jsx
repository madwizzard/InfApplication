import styles from './card.css'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpeg"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.jpeg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpeg"


function Card(props){
    return(<>
    <div className='row'>
       <div className="card">
                <img className="card-image"src={pic1} alt="this is a image of ..."></img>
                <h2 className="card-title">Card1</h2>
                <p className="card-text">info in card</p>
                <button className="card-button"><a href="#">Button</a></button>
       </div>
       <div className="card">
                <img className="card-image"src={pic2} alt="this is a image of ..."></img>
                <h2 className="card-title">Card2</h2>
                <p className="card-text">info in card</p>
                <button className="card-button"><a href="#">Button</a></button>
       </div>
       <div className="card">
                <img className="card-image"src={pic3} alt="this is a image of ..."></img>
                <h2 className="card-title">Card3</h2>
                <p className="card-text">info in card</p>
                <button className="card-button"><a href="#">Button</a></button>
       </div>
       </div>
       <div className='row'>
       <div className="card">
                <img className="card-image"src={pic4} alt="this is a image of ..."></img>
                <h2 className="card-title">Card4</h2>
                <p className="card-text">info in card</p>
                <button className="card-button"><a href="#">Button</a></button>
       </div>
       <div className="card">
                <img className="card-image"src={pic5} alt="this is a image of ..."></img>
                <h2 className="card-title">Card5</h2>
                <p className="card-text">info in card</p>
                <button className="card-button"><a href="#">Button</a></button>
       </div>
       <div className="card">
                <img className="card-image"src={pic6} alt="this is a image of ..."></img>
                <h2 className="card-title">Card6</h2>
                <p className="card-text">info in card</p>
                <button className="card-button"><a href="#">Button</a></button>
       </div>
       </div>
       </>
    )
    
}

export default Card;