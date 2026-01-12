import { Divider, NumberInput, Textarea, TextInput,FileInput, Button, Notification, rem, LoadingOverlay } from "@mantine/core";
import { IconCheck, IconPaperclip } from '@tabler/icons-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ApplyJobCom = () => {
    const [preview, setPreview]=useState(false);
    const [submit, setSubmit]=useState(false);
    const [sec, setSec]=useState(5);
    const navigate=useNavigate();
    const handleSubmit=()=>{
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x===0)navigate('/find-jobs');
        },1000)

    }
    const handlePreview=()=>{
        setPreview(!preview);
        window.scrollTo({top:0, behavior:"smooth"})
    }
    return <><div className="w-2/3 mx-auto">
        <LoadingOverlay className="!fixed" visible={submit} zIndex={1000} overlayProps={{radius:'sm', blur:2}} loaderProps={{color:'brightSun.4', type:'bars'}}/>
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={`Icons/Google.png`} alt="Google" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engr</div>
                    <div className="text-lg text-mine-shaft-300">Google &#x2022; 3days ago &#x2022; 123 Applicants</div>
                </div>
            </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">Submit your Application</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Full Name" withAsterisk placeholder="Enter Name" />
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Email" withAsterisk placeholder="Enter Email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls clampBehavior="strict" min={0} max={9999999999} />
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Personal Website" withAsterisk placeholder="Enter URL" />
            </div>
            <FileInput readOnly={preview} leftSection={<IconPaperclip stroke={1.5}/>} variant={preview?"unstyled":"default"} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Attach your CV" placeholder="Your CV" leftSectionPointerEvents="none" withAsterisk />
            <Textarea readOnly={preview} placeholder="Tell us something about yourself" variant={preview?"unstyled":"default"} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Cover Letter" autosize minRows={4}/>
            {!preview &&<Button color="brightSun.4" variant="light" onClick={handlePreview} >Preview</Button>}
            {
                preview && <div className="flex gap-10 [&>*]:w-1/2">
                  <Button fullWidth color="brightSun.4" variant="outline" onClick={handlePreview} >Edit</Button>
                  <Button fullWidth color="brightSun.4" variant="light" onClick={handleSubmit} >Submit</Button>  
                </div>
            }
        </div>
    </div>
      <Notification className={`!border-bright-sun-400 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"}`} icon={<IconCheck size={20} style={{width:rem(20), height:rem(20)}} />} color="teal" withBorder title="Application Submitted" mt="md" withCloseButton={false} >
        Redirecting to Find Jobs in {sec} seconds....
      </Notification>
    </>
}
export default ApplyJobCom;