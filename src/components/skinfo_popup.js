import React from "react";
import "../skinfo_popup.css"
//import CardSlider from "./cardslider";

function SkinfoPopup() {
  return (
        <>
    <div className="condition-popup">
        <div className="condition-title"><h1>Kawazaki Disease</h1>
        </div>
        <div className="info-flash-container">
            <div className="info">
                <p>Kawasaki disease (KD), also known as Kawasaki syndrome or mucocutaneous lymph node syndrome, 
            is the most common cause of acquired heart disease in children in developed countries. 
            KD affects children and a smaller percentage of teens, creating inflammation in the blood vessels, 
            particularly the coronary arteries.
            It's most common in infants and young children.
            Early stages include a rash and fever. 
            Symptoms include high fever and peeling skin. 
            In late stages, there may be inflammation of medium size blood vessels (vasculitis). 
            It also affects lymph nodes, skin, and mucous membranes, such as inside the mouth.
            Kawasaki disease is usually treatable. 
            Initial treatments include aspirin and intravenous immunoglobulin therapy given in a medical facility.
                </p>
            </div>
            {/* <div><CardSlider/></div> */}
        </div>
    </div>
    </>
  )
}

export default SkinfoPopup;
