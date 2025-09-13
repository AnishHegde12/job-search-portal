import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfiles/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfiles/RecommendTalent";

const TalentProfile=()=>{
   return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-libertinus">
            <Link className="my-5 inline-block" to="/find-talents">
            <Button leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light" >Back</Button>
            </Link>
            <Divider size="xs" />
            <div className="flex gap-5 ">
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
        </div>
    )
}
export default TalentProfile;