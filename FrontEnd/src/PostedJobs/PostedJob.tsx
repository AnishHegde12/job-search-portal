import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostedJobsCard from "./PostedJobCard";
const PostedJob = () => {
    return <div>
        <div className="text-2xl text-semibold mb-5">Job</div>
        <div>
            <Tabs autoContrast radius="sm" variant="pills" defaultValue="active">
                <Tabs.List className="[&_button[aria-selected='false']]: bg-mine-shaft-900 font-medium">
                    <Tabs.Tab value="active">Active[4]</Tabs.Tab>
                    <Tabs.Tab value="draft">Drafts[1]</Tabs.Tab>
                </Tabs.List>
                
                <Tabs.Panel value="active">
                    <div className="flex flex-col gap-3 mt-5">
                        {
                            activeJobs.map((item, index)=><PostedJobsCard key={index} {...item}/>)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="draft">
                    s
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
}
export default PostedJob;