import react from "react";

function Characters(props){
    return(
        <div >
            <img className="characterIMG" src={props.img} height="300px"></img>

        </div>
    )
}
export default Characters;