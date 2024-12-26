import "./menu.scss"



export default function Menu({menuOpen,setmenuOpen}) {
  return (
    <div className = {"menu "+ (menuOpen && "active")} >

        <ul>
         <li onClick = {() => setmenuOpen(false)}>
           <a href="#intro">Intro</a>
         </li>
         <li onClick = {() => setmenuOpen(false)}>
             <a href="#portfolio">Portflio</a>
         </li>
         <li onClick = {() => setmenuOpen(false)}> 
           <a href="#projects">Projects</a>
         </li>
         <li onClick = {() => setmenuOpen(false)}>
            <a href="#testimonials">Testimonials</a>
         </li>
         <li onClick = {() => setmenuOpen(false)}>
            <a href="#contact">Contact</a>
         </li>




        </ul>

    </div>
  )
}







