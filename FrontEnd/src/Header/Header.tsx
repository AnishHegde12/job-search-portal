import { Avatar, Indicator} from '@mantine/core';
import { IconAnchor} from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import NavLinks from "../Header/NavLinks";
import { useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
const Header = () => {
    const location=useLocation();
    return (
        location.pathname!=="/signup" && location.pathname!=="/login"?<div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-libertinus">
            <div className='flex gap-1 items-center text-bright-sun-400'>
                <IconAnchor stroke={2} className='h-8 w-8' />
                <div className='text-3xl font-semibold'>JobHooks</div>
            </div>
            {NavLinks()}
            <div className='flex gap-5 items-center'>
                <ProfileMenu/>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator color="brightSun.5" size={7} processing offset={6}><IconBell stroke={1.5} /></Indicator>
                </div>
                
            </div>
        </div>:<></>
    );
}
export default Header;