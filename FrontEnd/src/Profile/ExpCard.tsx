<<<<<<< HEAD
import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {
    const [edit, setEdit]=useState(false);
    return !edit ? <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.role}</div>
                    <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300">
                {props.startDate}-{props.endDate}
            </div>
        </div>
        <div className="text-sm text-mine-shaft-300 text-justify">
            {props.description}
        </div>
        {props.edit && <div className="flex gap-2">
            <Button onClick={()=>setEdit(true)} color="brightSun.4" variant="outline">Edit</Button>
            <Button color="red.8" variant="light">Delete</Button>
        </div>
        }
            
    </div>:<ExpInput setEdit={setEdit}/>
=======
const ExpCard=(props:any)=>{
    return <div className="flex flex-col gap-2">
        <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt=""/>
                    </div>
                    <div>
                        <div className="font-semibold">{props.role}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                    </div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                    {props.startDate}-{props.endDate}
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">
                    {props.description}
                </div>
    </div>
>>>>>>> 3845d4cb729b3521947acbb361a77ab91d297bc5
}
export default ExpCard;