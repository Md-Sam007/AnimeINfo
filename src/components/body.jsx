import react from "react";

function Body(props){
    
    return(
        <div className="animePannel">
            
                <div className="IMG">
                    <img src={props.data.images.jpg.image_url}  alt="Anime"/>
                    <div className="title">{props.data.titles[0].title}</div>
                    
                </div>
                    
           
        </div>
    )
}
export default Body;