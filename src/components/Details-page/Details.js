import React from 'react';
import './Details.scss';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useStateValue } from '../StateProvider';

function Details() {

    const [{ allCountries, currentCountry, dark }, dispatch ] = useStateValue();
    
    const openDetails = (e) =>{
         dispatch({
            type: 'GET_DETAILS',
            name: e.target.textContent,
            allCountries: [...allCountries]
            })
    }

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
        <div style={background}>
            <Link to="/">
                <button className="back-button" style={{...backgroundElements, ...color}}><KeyboardBackspaceIcon className="back-arrow" style={color}/> Back</button>
            </Link>
            <div className="details-container">
                <img src={currentCountry?.flag} alt=""/>
                <div className="info">
                    <h3 style={color}>{ currentCountry?.name }</h3>
                    <div className="more-details">
                    <div className="first-part">
                        <p style={color}>Native Name: <span style={color}>{currentCountry?.nativeName}</span></p>
                        <p style={color}>Population: <span style={color}>{currentCountry?.population}</span></p>
                        <p style={color}>Region: <span style={color}>{currentCountry?.region}</span></p>
                        <p style={color}>Sub Region: <span style={color}>{currentCountry?.subregion}</span></p>
                        <p style={color}>Capital: <span style={color}>{currentCountry?.capital}</span></p>
                    </div>
                        <div className="second-part">
                        <p style={color}>Top Level Domain: <span style={color}>{currentCountry?.topLevelDomain}</span></p>
                        <p style={color}>Currencies: <span style={color}>{currentCountry?.currencies[0]?.name}</span></p>
                        <p style={color}>Languages: <span style={color}>{currentCountry?.languages.map((language)=>{
                            return language.name
                        }).join(', ')}</span></p>
                    </div>
                    </div>
                    <div className="borders">
                        <p style={color}>Borders Countries:</p>
                        <div className="border-countries">
                            {currentCountry?.borders.map((countryCode, i)=>(
                                <Link to="/details" key={i}>
                                    <span onClick={openDetails} style={{...backgroundElements, ...color}}>{allCountries.filter((country)=> country.alpha3Code === countryCode)[0].name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
