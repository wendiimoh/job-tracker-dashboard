type Props={
    company:string;
    position:string;
    status:string;
}

const JobCard=({company,position,status}:Props)=>{

return(

<div className="bg-white p-4 rounded shadow">

<h2 className="font-bold text-lg">
{position}
</h2>

<p>{company}</p>

<span className="bg-blue-100 px-2 py-1 rounded">
{status}
</span>

</div>

)

}

export default JobCard