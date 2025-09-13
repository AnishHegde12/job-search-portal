import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage=()=>{
    const navigate=useNavigate();
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-libertinus">
            <Divider size="xs" />
            <Button my="md" onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light" >Back</Button>
            <div className="flex gap-5 justify-between">
                <CompanyProfile/>
                <SimilarCompanies/>
            </div>
        </div>
}
export default CompanyPage;