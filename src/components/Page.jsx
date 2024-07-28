import React,{useEffect, useState}from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Page(props){
    
        const [count, setCount] = useState(1);

        useEffect(()=>{
            if(props.reset){
                setCount(1);
                
            }

        },[props.reset])
    
        function setcountValue(event) {
            const val = event.currentTarget.getAttribute('data-value');
            let newcount=count;
            
           
            
            
    
            switch (val) {
                case 'right':
                    newcount=newcount+1;
                    break;
                case 'left':
                    newcount=newcount-1;
                    break;
                default:
                    break;
            }
            setCount(newcount);
            props.page(newcount);
            window.scroll({
                top:100,
                left:100,
                behavior:'smooth'
            });  
        }


 
    return(
        <div>
            <div className="page">
                {count===1?null:(<button className="left" onClick={setcountValue} data-value="left">
                        <ChevronLeftIcon fontSize="large" />
                    </button>)}
                
                <p>{count}</p>
                
                <button className="left" onClick={setcountValue} data-value="right">
                        <KeyboardArrowRightIcon fontSize="large" />
                    </button>
            </div>
        </div>
    );
}
export default Page;

