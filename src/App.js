import Top from "./components/header/Top"
import Contact from "./components/contact/contact"
import Portfolio from "./components/portfolio/portoflio"
import Projects from "./components/projects/projects"
import Testimonials from "./components/testimonials/testimonials"
import Intro from "./components/intro/intro"
import Menu from "./components/menu/menu"
import "./app.scss" 
import { useState } from "react"



function App() {

  const[menuOpen,setmenuOpen] = useState(false)     //initizaling the state hook as false 
  return (
    <div className="app">
      
     <Top menuOpen = {menuOpen} setmenuOpen = {setmenuOpen}></Top>   {/*setting them up for usage in top.jsx* */}
     <Menu menuOpen = {menuOpen} setmenuOpen = {setmenuOpen}></Menu>
     <div className="sections">
      <Intro></Intro>
      <Portfolio/>
      <Projects/>

     <Testimonials/>
     <Contact></Contact>
     </div>

     
    </div>
  );
}

export default App;
