import { useState } from "react";

type Props = {
  onAddJob: (job: {
    id:number;
    company:string;
    position:string;
    status:string;
  }) => void;
};

const AddJob=({onAddJob}:Props)=>{

const [company,setCompany]=useState("");
const [position,setPosition]=useState("");

const handleSubmit=(e:React.FormEvent)=>{

e.preventDefault();

if(!company || !position) return;

const newJob={

id:Date.now(),
company,
position,
status:"Applied"

};

onAddJob(newJob);

setCompany("");
setPosition("");

};

return(

<form
onSubmit={handleSubmit}
style={{
background:"white",
padding:"25px",
borderRadius:"16px",
boxShadow:"0 4px 10px rgba(0,0,0,.1)",
marginBottom:"25px"
}}
>

<h2 style={{marginBottom:"20px"}}>
Add Job Application
</h2>

<div
style={{
display:"flex",
flexWrap:"wrap",
gap:"15px"
}}
>

<input
type="text"
placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
style={{
padding:"12px",
flex:"1 1 250px",
borderRadius:"8px",
border:"1px solid lightgray"
}}
/>

<input
type="text"
placeholder="Position"
value={position}
onChange={(e)=>setPosition(e.target.value)}
style={{
padding:"12px",
flex:"1 1 250px",
borderRadius:"8px",
border:"1px solid lightgray"
}}
/>

<button
type="submit"
style={{
background:"#2563eb",
color:"white",
border:"none",
padding:"12px 20px",
borderRadius:"8px",
cursor:"pointer",
flex:"1 1 150px"
}}
>
Add
</button>

</div>

</form>

)

}

export default AddJob;