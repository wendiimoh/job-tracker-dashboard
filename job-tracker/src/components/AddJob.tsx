import { useState } from "react";

type Props = {
  onAddJob: (job: {
    id: number;
    company: string;
    position: string;
    status: string;
  }) => void;
};

const AddJob = ({ onAddJob }: Props) => {

const [company,setCompany]=useState("");
const [position,setPosition]=useState("");

const handleSubmit=(e:React.FormEvent)=>{

e.preventDefault();

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
padding:"20px",
borderRadius:"10px",
marginBottom:"20px"
}}
>

<h2>Add Job</h2>

<input
type="text"
placeholder="Company"
value={company}
onChange={(e)=>setCompany(e.target.value)}
style={{
display:"block",
marginBottom:"10px",
padding:"8px",
width:"100%"
}}
/>

<input
type="text"
placeholder="Position"
value={position}
onChange={(e)=>setPosition(e.target.value)}
style={{
display:"block",
marginBottom:"10px",
padding:"8px",
width:"100%"
}}
/>

<button type="submit">

Add Job

</button>

</form>

)

};

export default AddJob;