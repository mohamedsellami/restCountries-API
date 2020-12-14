import React from 'react';
import './Header.scss';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ dark }, dispatch ] = useStateValue();

    const changeTheme = () =>{
        if(!dark){
            dispatch({
                type: 'SWITCH_THEME',
                dark: true
            });
            document.getElementsByTagName("BODY")[0].style.backgroundColor = 'hsl(207, 26%, 17%)';
        }else{
            dispatch({
                type: 'SWITCH_THEME',
                dark: false
            });
            document.getElementsByTagName("BODY")[0].style.backgroundColor = 'hsl(0, 0%, 98%)';
        }
    }
    const background = {
        backgroundColor: dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
    }
    const color = {
        color: dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    }

    return (
        <div className="header" style={background}>
            <h1 style={color}>Where in the world?</h1>
            <div className="theme-switcher" onClick={changeTheme}>
                {dark ? <WbSunnyIcon className="icon-switcher" style={color}/> : <Brightness2Icon className="icon-switcher" style={color}/>}
                <p style={color}>{dark ? "Light" : "Dark"} Mode</p>
            </div>
        </div>
    )
}

export default Header
