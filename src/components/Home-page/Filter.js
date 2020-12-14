import React from 'react';
import './Filter.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider';

function Filter() {

    const [{ countries, allCountries, dark }, dispatch ] = useStateValue();

    const showOptions = () =>{
        let elementTransform = document.querySelector(".filter .options").style.transform;
        if(elementTransform === '' || elementTransform !== 'translateY(0%)'){
            document.querySelector(".filter .options").style.transform = `translateY(0%)`;
        }else{
            document.querySelector(".filter .options").style.transform = `translateY(-150%)`;
        }    
    }

    const handleClick = (e) =>{
        document.querySelector(".filter button span").innerHTML= `${e.target.textContent}`;
        document.querySelector(".filter .options").style.transform = `translateY(-150%)`;

        dispatch({
            type: 'FILTER_BY_REGION',
            region: `${e.target.textContent}`,
            allCountries: [...allCountries]
        })
        console.log(countries)
    }

    const color = {
        color: dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    }
    const backgroundElements = {
        backgroundColor: dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
    }

    return (
        <div className="filter">
            <button onClick={showOptions} style={backgroundElements}>
                <span style={color}>Filter by Region</span>
                <ExpandMoreIcon className="expand" style={color}/>
            </button>
            <div className="options" style={backgroundElements}>
                <span onClick={handleClick} style={color}>All</span>
                <span onClick={handleClick} style={color}>Africa</span>
                <span onClick={handleClick} style={color}>Americas</span>
                <span onClick={handleClick} style={color}>Asia</span>
                <span onClick={handleClick} style={color}>Europe</span>
                <span onClick={handleClick} style={color}>Oceania</span>
            </div>
        </div>
    )
}

export default Filter
