import React, { useState, useEffect } from 'react';
import './Search.scss';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../StateProvider';

function Search() {

    const [{ allCountries, dark }, dispatch ] = useStateValue();
    const [searchValue, setSearchValue] = useState('');
    const [autoComplete, setautoComplete] = useState('');
    const [isAutoComplete, setIsAutoComplete] = useState(false);

    const handleSuggetion = (e) =>{
        document.querySelector(".autoComplete").style.display = 'none';
        setSearchValue(e.target.textContent);
        setIsAutoComplete(true);
    }

    useEffect(()=>{
        document.querySelector(".autoComplete").style.display = 'flex';
        let suggetions = [...allCountries].filter((country) => country.name.substring(0, searchValue.length).toLowerCase() === searchValue.toLowerCase());
        setautoComplete(suggetions.map((country, i)=> <span onClick={handleSuggetion} style={color} key={i}>{country.name}</span>))
        if(searchValue === "" || suggetions === []){
            document.querySelector(".autoComplete").style.display = 'none';
        }
        if(isAutoComplete && suggetions !== []){
            search();
            document.querySelector(".autoComplete").style.display = 'none';
            setIsAutoComplete(false);
        }
    }, [searchValue])

    const search = () =>{
        dispatch({
            type: 'SEARCH',
            allCountries: allCountries,
            name: searchValue
        });
        document.querySelector(".autoComplete").style.display = 'none';
    }

    const color = {
        color: dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    }
    const backgroundElements = {
        backgroundColor: dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
    }

    return (
        <div className="search-input">
            <SearchIcon className="search-icon" onClick={search} style={color}/>
            <input type="search" placeholder="Search for country..." value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} style={{...backgroundElements, ...color}} onKeyDown={(e)=> e.code === "Enter" ? search() : ""}/>
            <div className="autoComplete" style={{...backgroundElements}}>
                {autoComplete}
            </div>
        </div>
    )
}

export default Search
