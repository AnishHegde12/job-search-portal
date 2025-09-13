import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
    const select = fields;
    const [checked, setChecked] = useState(false);
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);
    const [desc, setDesc] = useState(props.description);
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.addExp?"Add":"Edit"} Experience</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
        </div>
        <SelectInput {...select[2]} />
        <Textarea withAsterisk label="Summary" value={desc} autosize minRows={3} placeholder="Enter Job Description" onChange={(event) => setDesc(event.currentTarget.value)} />
        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={endDate || new Date()} label="Start date" placeholder="Pick date" value={startDate} onChange={setStartDate} />
            <MonthPickerInput withAsterisk disabled={checked} minDate={startDate || undefined} maxDate={new Date()} label="End date" placeholder="Pick date" value={endDate} onChange={setEndDate} />
        </div>
        <Checkbox autoContrast label="Current Working" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
        <div className="flex gap-2">
            <Button onClick={() => props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
            <Button onClick={() => props.setEdit(false)}  color="red.8" variant="light">Cancel</Button>
        </div>
    </div>
}
export default ExpInput;