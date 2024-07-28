import react, { useState, useEffect } from "react";
import axios from 'axios';
import Page from "./Page";
import {Link} from "react-router-dom";

import Heading from "./Heading";
import Body from "./body";


function App() {
    const baseUrl = "https://api.jikan.moe/v4";
    const [nextPage, setpage] = useState("");
    const[reset,setreset]=useState(false);
    
    

    const [middle, setmiddle] = useState("/top/anime");
    const [data, setdata] = useState([]);
    useEffect(() => {

        const fun = async () => {
            try {
                const result = await axios.get(baseUrl + middle + nextPage);
                setdata(result.data.data);
            } catch (e) {
                console.log(e);
            }
        };
        fun()
    }, [middle,nextPage])


    function components(val) {
        setmiddle("/top/anime?filter=" + val);
        nextPage==="?page="?setpage(""):setpage("");
        setreset(current=>!current);
        
        
        
        

    }
    function searchAnime(e) {
        setmiddle("/anime?q=" + e + "&sfw");
        nextPage==="?page="?setpage(""):setpage("");
        
        setreset(current=>!current);
    }
    function page(e){
        if(middle==="/top/anime"){
            setpage("?page="+e)

        }else{
            setpage("&page="+e);

        }
        
    }
    


    return (
        <div>
            <Heading
                searchAnime={searchAnime}
                components={components} />
            <div className="card">
                {data.map((pop, index) => {
                    return <Link to='/info' state={{id:pop.mal_id}} ><Body
                        data={data[index]}
                         /></Link>

                })}
               <Page 
               reset={reset}
               
                page={page}/>
                
            </div>

        </div>

    )
}
export default App;