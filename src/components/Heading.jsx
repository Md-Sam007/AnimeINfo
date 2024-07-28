import react,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

function Heading(props) {
    const[searchVal,setValue]=useState("");
    const [components,getcom]=useState();

    function search(event){
        let val=event.target.value;
        setValue(val);

    }
    function handleevent(e){
        e.preventDefault();
        let val=e.target.value;
        getcom(val);
        
        {props.components(val)};
    }
    return (
        <nav className="Nav">
            <div className="Icon">
                <h1>AmineINfo</h1>
            </div>

            <form>
                <input className="Search" placeholder="Search" onChange={search}/>
                    <button className="Search-but" onClick={(pop)=>{
                        pop.preventDefault();
                        {props.searchAnime(searchVal)}

                    }}
                    
                        

                    ><SearchIcon/></button>
                

                <div className=" favorates">

                </div>

                <div className="fourComponents">
                    <button className="but Bypopularity" onClick={handleevent} value={"Bypopularity"} >popular</button>
                    <button className="but upcoming" onClick={handleevent} value={"upcoming"}>upcoming</button>
                    
                    <button className="but airing" onClick={handleevent} value={"airing"} > &nbsp;     airing    &nbsp;</button>
                    
                    <button className="but favorite" onClick={handleevent} value={"favorite"}>&nbsp;     favorite &nbsp;     </button>
                </div>         
                </form>

        </nav>
    )
}
export default Heading;