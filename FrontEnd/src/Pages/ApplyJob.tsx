import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobCom from "../ApplyJobs/ApplyJobCom";
const ApplyJob = () => {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        
        <div className="min-h-[100vh] bg-mine-shaft-950 font-libertinus">
            <Link className="my-5 inline-block" to="/jobs">
                <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light" >Back</Button>
            </Link>
            <ApplyJobCom/>
        </div>
    )
}
export default ApplyJob;