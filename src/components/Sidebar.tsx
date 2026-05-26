import { useState } from "react";
import {
  FaHome,
  FaBriefcase,
  FaMoon,
  FaSun,
  FaUser
} from "react-icons/fa";

const Sidebar = () => {

const [darkMode,setDarkMode]=useState(false);

return(

<div
style={{
width:"260px",
background:darkMode ? "#0f172a" : "#1e293b",
color:"white",
minHeight:"100vh",
padding:"25px",
transition:"0.3s"
}}
>

<h2
style={{
marginBottom:"40px"
}}
>
Job Tracker
</h2>

<div
style={{
display:"flex",
flexDirection:"column",
gap:"25px"
}}
>

<div
style={{
display:"flex",
alignItems:"center",
gap:"10px",
cursor:"pointer"
}}
>
<FaHome/>
<span>Dashboard</span>
</div>

<div
style={{
display:"flex",
alignItems:"center",
gap:"10px",
cursor:"pointer"
}}
>
<FaBriefcase/>
<span>Jobs</span>
</div>

<div
style={{
display:"flex",
alignItems:"center",
gap:"10px",
cursor:"pointer"
}}
>
<FaUser/>
<span>Profile</span>
</div>

<hr/>

<div
onClick={()=>setDarkMode(!darkMode)}
style={{
display:"flex",
alignItems:"center",
gap:"10px",
cursor:"pointer"
}}
>

{darkMode ? <FaSun/> : <FaMoon/>}

<span>

{darkMode ? "Light Mode" : "Dark Mode"}

</span>

</div>

</div>

</div>

)

}

export default Sidebar;