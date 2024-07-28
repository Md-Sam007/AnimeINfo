import react, { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./characters";

import { useLocation } from "react-router-dom";

function Info() {
    let { state } = useLocation();
    const [data, setdata] = useState([
    ])
    const [characters,setCharacters]=useState([])
    useEffect(()=>{
        const fun=async()=>{
            try{
                const result=await axios.get(`https://api.jikan.moe/v4/anime/${state.id}/full`);
                setdata(result.data.data);
                const result2=await axios.get(`https://api.jikan.moe/v4/anime/${state.id}/characters`);
                setCharacters(result2.data.data);
                window.scroll({
                    top:10,
                    left:100,
                })
            }catch(e){
                console.log(e);
            }
            
            
        }
        fun();    

    },[state.id])

    

    return (
        <div className="second-board">
            <div className="second-Imag">
            {data.images ?   <img src={data.images.jpg.large_image_url} className="Second-IMG"alt={data.title} height={"480px"}/>:null}

            </div>
            <div className="info-Box">
                <div className="title2">Title : </div>
                <ul className="list">
                    <li>Type </li>
                    <li>Status </li>
                    <li>Airing   </li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>Episodes</li>
                    <li>Studios</li>
                    <li>Score</li>
                    <li>Trailer</li>
                </ul>

            </div>

            <div className="colon">
                
           
                <ul>
                <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    

                </ul>
            </div>

            <div >
            <div className="overflow">
            <div className="title3">{data.title}</div>
            <ul className="values">
                <li>{data.type} </li>
                    <li> {data.status}</li>
                    <li>   {data.aired&&data.aired.string!=='N/A'?data.aired.string:"N/a"}</li>
                    <li> {data.episodes?data.episodes:"N/A"} </li>
                    <li>{data.studios && data.studios[0] ? data.studios[0].name:"N/A <br>"}</li>
                    <li>{data.score}/10</li>
                    <li>{data.trailer?(<a href={data.trailer.url}>{data.trailer.url}</a>):("N/A")}</li>
                    
                </ul>

            </div>
            </div>

           
            <div className="char">Characters</div>
            <div className="roll">ROLL:  MAIN</div>
            <div className="images">
            {characters.filter((val)=>{return val.role==='Main'}).map((val)=>{
                    
                    
                    return(
                    <Characters 
                    img={val.character.images.jpg.image_url}/>)
                })}
                
                
            </div>
            <div className="roll">ROLL:  Supporting</div>
            <div className="images">
            {characters.filter((val)=>{return val.role==='Supporting'&&val.favorites>=20}).map((val)=>{
                    
                    
                    return(
                    <Characters 
                    img={val.character.images.jpg.image_url}/>)
                })}


            </div>
 

        </div>
    )

}
export default Info;
