import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {
     const [issueDate, setIssueDate] = useState<string | null>(null);
    const select = fields;
    return <div>
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput label="Title" withAsterisk placeholder="Enter Title" />
            <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={new Date()} label="Issue date" placeholder="Pick date" value={issueDate} onChange={setIssueDate} />
            <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID" />
        </div>
        
        <div className="flex gap-2">
            <Button onClick={() => props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
            <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
        </div>
    </div>
}
export default CertiInput;