import React from 'react';
import Countries from './Countries';
import Filter from './Filter';
import './Home.scss';
import Search from './Search';
import { useStateValue } from '../StateProvider';


function Home() {

    const [{ dark } ] = useStateValue();

    const background = {
        backgroundColor: dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'
    }
    
    document.title = "Rest Countries"

    return (
        <div>
            <div className="control-bar" style={background}>
                <Search/>
                <Filter/>
            </div>
            <Countries/>
        </div>
    )
}

export default Home
