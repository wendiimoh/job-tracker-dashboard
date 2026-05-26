import JobCard from "../components/JobCard"

const Dashboard=()=>{

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
Dashboard
</h1>

<div className="grid gap-4">

<JobCard
company="Google"
position="Frontend Developer"
status="Interview"
/>

<JobCard
company="Microsoft"
position="React Developer"
status="Applied"
/>

</div>

</div>

)

}

export default Dashboard