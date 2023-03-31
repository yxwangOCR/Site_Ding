import { FacebookFilled, MailFilled } from '@ant-design/icons';
import Facebook from '../assets/facebook.svg';
import Red from '../assets/red.svg';

const Link = () => {
    return (
        <ul className='flex justify-center items-center gap-2 mt-4'>
            <li><a href=""><img src={Facebook} alt="" className='w-8' /></a></li>
            <li><a href="https://www.xiaohongshu.com/user/profile/61e5b367000000001000f894?xhsshare=WeixinSession&appuid=5aa3e78c4eacab4e8f1513d6&apptime=1680294301" target='_blank'><img src={Red} alt="" className='w-8' /></a></li>
        </ul>
    )
}

export default Link