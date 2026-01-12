import { jobList } from "../Data/JobsData";
import JobCards from "../FindJobs/JobCards";

const CompanyJobs=()=>{
    return <div className="flex mt-10 flex-wrap gap-5">
        {
            jobList.map((job, index)=><JobCards key={index} {...job}/>)
        }
    </div>
}
export default CompanyJobs;