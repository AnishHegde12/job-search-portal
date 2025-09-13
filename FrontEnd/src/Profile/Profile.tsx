<<<<<<< HEAD
import { ActionIcon, Divider, TagsInput, Textarea, TextInput } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
=======
import { ActionIcon, Divider } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
>>>>>>> 3845d4cb729b3521947acbb361a77ab91d297bc5
import ExpCard from "./ExpCard";
import CertCard from "./CertCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
<<<<<<< HEAD
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = (props: any) => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const select = fields;
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const [skill, setSkill] = useState(props.skills)
=======

const Profile = (props: any) => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const select=fields;
>>>>>>> 3845d4cb729b3521947acbb361a77ab91d297bc5
    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
<<<<<<< HEAD
    const [about, setAbout] = useState(props.about);
=======
>>>>>>> 3845d4cb729b3521947acbb361a77ab91d297bc5
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-8 border-mine-shaft-950" src="/avatar1.png" alt="" />
        </div>
        <div className="px-3 mt-16">
            <div className="text-3xl font-semibold flex justify-between">{props.name}
                <ActionIcon color="brightSun.4" size="lg" onClick={() => handleEdit(0)} variant="subtle">
<<<<<<< HEAD
                    {edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon>
            </div>
            {
                edit[0] ? <>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                    </div>
                    <SelectInput {...select[2]} /></> : <>
                    <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{props.role} &bull; {props.company}</div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300"><IconMapPin className="h-5 w-5" stroke={1.5} />{props.location}</div>
                </>
            }
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                About <ActionIcon color="brightSun.4" size="lg" onClick={() => handleEdit(1)} variant="subtle">
                    {edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon>
            </div>
            {
                edit[1] ? <Textarea
                    value={about} autosize minRows={3} placeholder="Enter about yourself"
                    onChange={(event) => setAbout(event.currentTarget.value)}
                /> : <div className="text-sm text-mine-shaft-300 text-justify">
                    {about}
                </div>
            }
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                Skills <ActionIcon color="brightSun.4" size="lg" onClick={() => handleEdit(2)} variant="subtle">
                    {edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon>
            </div>

            {
                edit[2] ? <TagsInput value={skill} onChange={setSkill} placeholder="Add Skill" splitChars={[',', ' ', '|']} />
                    : <div className="flex flex-wrap gap-2">
                        {
                            skill.map((skill: any, index: any) => <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
                        }
                    </div>
            }
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex justify-between">Experience <div className="flex gap-2"><ActionIcon color="brightSun.4" size="lg" onClick={() => setAddExp(true)} variant="subtle"><IconPlus className="h-4/5 w-4/5" /></ActionIcon> <ActionIcon color="brightSun.4" size="lg" onClick={() => handleEdit(3)} variant="subtle">
                {edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    props.experience.map((exp: any, index: any) =>
                        <ExpCard key={index} {...exp} edit={edit[3]} />
                    )
                }
                {addExp && <ExpInput add setEdit={setAddExp} />}
=======
                    {edit[0]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon>
            </div>

            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
            <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} />{props.role} &bull; {props.company}</div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300"><IconMapPin className="h-5 w-5" stroke={1.5} />{props.location}</div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3">
                About
            </div>
            <div className="text-sm text-mine-shaft-300 text-justify">
                {props.about}
>>>>>>> 3845d4cb729b3521947acbb361a77ab91d297bc5
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
<<<<<<< HEAD
            <div className="text-2xl font-semibold mb-4 flex justify-between">Certifications
                <div className="flex gap-2"><ActionIcon color="brightSun.4" size="lg" onClick={() => setAddCerti(true)}
                    variant="subtle"><IconPlus className="h-4/5 w-4/5" /></ActionIcon> <ActionIcon color="brightSun.4" size="lg"
                        onClick={() => handleEdit(4)} variant="subtle">{edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" />
                            : <IconPencil className="h-4/5 w-4/5" />} </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    props.certifications.map((cert: any, index: any) =>
                        <CertCard key={index} edit={edit[4]} {...cert} />
                    )
                }
                {
                   addCerti && <CertiInput setEdit={setAddCerti}/>
                }
=======
            <div className="text-2xl font-semibold mb-3">
                Skills
            </div>
            <div className="flex flex-wrap gap-2">
                {
                    props.skills.map((skill: any, index: any) => <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
                }
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Experience</div>
            <div className="flex flex-col gap-8">
                {
                    props.experience.map((exp: any, index: any) =>
                        <ExpCard key={index} {...exp} />
                    )
                }
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5">Certifications</div>
            <div className="flex flex-col gap-8">
                {
                    props.certifications.map((cert: any, index: any) =>
                        <CertCard key={index} {...cert} />
                    )
                }
>>>>>>> 3845d4cb729b3521947acbb361a77ab91d297bc5
            </div>
        </div>
    </div>
}
export default Profile;