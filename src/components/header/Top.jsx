import "./Top.scss"
import {Person,Mail} from "@material-ui/icons"



export default function Top({menuOpen,setmenuOpen}){

   


    return (
    <div className = {"Top " +  (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
            
             <a href="#intro" className="logo">Developer</a>
             <div className="itemcontainer">
                <Person className="icon"></Person>
                <span>
                    03182681903
                </span>

                </div>
             <div className="itemcontainer">   
                <Mail className="icon">
                    
                    
                </Mail>
                <span>
                ibroo333@gmail.com
                </span>
                </div>   
                
            

            
             </div>
            <div className="right">
                <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>

                   
                </div>

          
            </div>
        </div>



    </div>
    )
}