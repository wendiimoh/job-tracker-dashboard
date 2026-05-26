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
padding:"25px",
borderRadius:"16px",
marginBottom:"20px",
boxShadow:"0 4px 10px rgba(0,0,0,.1)"
}}
>

<h2>{position}</h2>

<p
style={{
color:"#64748b"
}}
>
{company}
</p>

<div style={{marginTop:"15px"}}>

<button
onClick={()=>onStatusChange(id)}
style={{
background:getStatusColor(),
color:"white",
border:"none",
padding:"10px 15px",
borderRadius:"8px",
marginRight:"10px",
cursor:"pointer"
}}
>
{status}
</button>

<button
onClick={onDelete}
style={{
background:"#dc2626",
color:"white",
border:"none",
padding:"10px 15px",
borderRadius:"8px",
cursor:"pointer"
}}
>
Delete
</button>

</div>

</div>

)

}

export default JobCard;