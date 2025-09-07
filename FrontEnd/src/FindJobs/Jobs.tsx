import { jobList } from "../Data/JobsData"
import JobCards from "./JobCards"
import Sort from "./Sort"

const Jobs = () => {
    window.scrollTo({top:0, behavior:"smooth"})
    return (
        <div className="px-10 py-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                    Recommended Jobs
                </div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
                {
                    jobList.map((job, index) => <JobCards key={index} {...job} />)
                }
            </div>
        </div>
    )
}
export default Jobs