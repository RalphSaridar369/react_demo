import './Header.scss';
import { getItem } from '../../helpers/storage';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const styles = {
    linkIcon:{
        color: '#FF6863',
        fontSize: 40,
        marginRight:20
    }
}

let LoggedIn = getItem("user")
console.log(LoggedIn)

export const Links = [
    {
        to:"/",
        icon:<HomeOutlinedIcon style={styles.linkIcon} />,
        text:'Home',
        type:'normal'
    },
    {
        to:LoggedIn?"/":"/login",
        icon:LoggedIn? <LogoutOutlinedIcon style={styles.linkIcon} />: <LoginOutlinedIcon style={styles.linkIcon} />,
        text:LoggedIn?'Logout':'Login',
        type:'normal'
    }
]