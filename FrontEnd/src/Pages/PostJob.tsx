import { Divider } from "@mantine/core";
import PostJobs from "../PostJob/PostJobs";

const PostJob=()=>{
   return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-libertinus">
            <Divider size="xs" mx="md"/>
            <PostJobs/>
            </div>
    )
}
export default PostJob;