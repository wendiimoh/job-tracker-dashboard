type Props = {
id:number;
company:string;
position:string;
status:string;
onDelete:()=>void;
onStatusChange:(id:number)=>void;
};

const JobCard=({
id,
company,
position,
status,
onDelete,
onStatusChange
}:Props)=>{

const getStatusColor=()=>{

if(status==="Applied")
return "#3b82f6";

if(status==="Interview")
return "#f59e0b";

if(status==="Rejected")
return "#ef4444";

return "#6b7280";

};

return(

<div
style={{
background:"white",
padding:"20px",
borderRadius:"10px",
marginBottom:"20px"
}}
>

<h2>{position}</h2>

<p>{company}</p>

<div style={{marginTop:"10px"}}>

<button
onClick={()=>onStatusChange(id)}
style={{
background:getStatusColor(),
color:"white",
border:"none",
padding:"8px",
borderRadius:"6px",
marginRight:"10px"
}}
>
{status}
</button>

<button
onClick={onDelete}
style={{
background:"red",
color:"white",
border:"none",
padding:"8px",
borderRadius:"6px"
}}
>
Delete
</button>

</div>

</div>

)

}

export default JobCard;