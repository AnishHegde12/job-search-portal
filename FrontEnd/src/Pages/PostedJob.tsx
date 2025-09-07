import { Divider } from "@mantine/core";
import PostedJob from "../PostedJobs/PostedJob";
import PostedJobDesc from "../PostedJobs/PostedJobDesc";

const PostedJobPage = () => {
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-libertinus px-4">
        <Divider size="xs" />
         <div className="flex gap-5">
            <PostedJob/>
            <PostedJobDesc/>
        </div>
    </div>

}
export default PostedJobPage;