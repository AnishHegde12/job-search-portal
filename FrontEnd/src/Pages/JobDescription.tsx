import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobsDescription/JobDescription";
import RecommJobs from "../JobsDescription/RecommendedJobs";

const JobDescription=()=>{
    window.scrollTo({top:0})
   return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-libertinus">
            <Link className="my-5 inline-block" to="/find-jobs">
            <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light" >Back</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc/>
                <RecommJobs/>
            </div>
        </div>
    )
}
export default JobDescription;