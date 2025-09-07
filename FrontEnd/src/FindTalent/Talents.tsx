import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort"
import TalentCards from "./TalentCard"

const Talents = () => {
    return (
        <div className="px-10 py-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                    Talents
                </div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-10 justify-between">
                {
                    talents.map((talent, index)=>
                         <TalentCards key={index} {...talent}/>                       
                    )
                }
            </div>
        </div>
    )
}
export default Talents;