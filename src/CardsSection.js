// npx create-react-app banking-project
import './CardsSection.css';

function CardsSection(){
    return(
        <section id="cardssection">
            <div className="wrapper">
                <h1> Costumised cash rewards </h1>
                <img src="https://res.cloudinary.com/kisi-kloud/image/upload/c_lfill,dpr_auto,f_auto,q_auto:good,w_1880/c_limit,w_500/v1/collections/academy/lessons/how-to-differentiate-between-different-access-cards/how-to-differentiate-between-different-access-cards-5c9d2f2f70687e48c63b418c "/>
                <p className="special"> No annual fee</p>
                <p> $200 </p>
                <p> Online bonus offer </p>
                <p> 3% cash back in the category of your choice </p>
            </div>
        </section>
    );
}

export default CardsSection;
