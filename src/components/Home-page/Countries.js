import React, { useEffect } from 'react';
import './Countries.scss';
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";


function Countries() {

    const [{ countries, allCountries, dark }, dispatch ] = useStateValue();

    const openDetail = (name) =>{
        return function(){
            dispatch({
            type: 'GET_DETAILS',
            name,
            allCountries: [...allCountries]
            })
        }  
    }

    useEffect(()=>{
        if(allCountries.length === 0){
            fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then((result)=>{
                dispatch({
                    type: 'DEFAULT',
                    countries: result
                })
            },
            (error) => {
                dispatch({
                    type: 'ERROR',
                    countries: []
                })
            }
            );
        }
    }, [allCountries])

  
    const background = {
        backgroundColor: dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'
    }
    const color = {
        color: dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
    }
    const backgroundElements = {
        backgroundColor: dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'
    }
    
    return (
        <div className="countries" style={background}>
            {
                countries.map((country, i)=>(
                    <Link to="/details" key={i}>
                        <div className="country" onClick={openDetail(country.name)} style={backgroundElements}>
                            <img src={country.flag} alt=""/>
                            <div className="info">
                                <h5 style={color}>{country.name}</h5>
                                <p style={color}>Population: <span style={color}>{country.population}</span></p>
                                <p style={color}>Region: <span style={color}>{country.region}</span></p>
                                <p style={color}>Capital: <span style={color}>{country.capital}</span></p>
                            </div>
                        </div>
                    </Link>
                ))
            }
            
            <div className="additionalDiv"></div>
            <div className="additionalDiv"></div>
        </div>
    )
}

export default Countries
