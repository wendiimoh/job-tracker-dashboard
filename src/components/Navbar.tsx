type Props = {
  title:string;
};

const Navbar=({title}:Props)=>{

return(

<div
style={{
background:"white",
padding:"20px",
borderRadius:"16px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"25px",
boxShadow:"0 4px 10px rgba(0,0,0,.1)"
}}
>

<div>

<h2>{title}</h2>

<p
style={{
color:"#64748b"
}}
>
Track your applications
</p>

</div>

<div>

<input
type="text"
placeholder="Search..."
style={{
padding:"10px",
borderRadius:"8px",
border:"1px solid lightgray"
}}
/>

</div>

</div>

)

}

export default Navbar;