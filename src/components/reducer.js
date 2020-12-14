export const initialState = {
    allCountries: [],
    countries: [],
    currentCountry: '',
    dark: false,
}

function reducer(state, action){
    switch(action.type){
        case 'DEFAULT':
            return {
                allCountries: action.countries,
                countries: action.countries
            }
        case 'FILTER_BY_REGION':
            if(action.region === 'All'){
                return {
                ...state,
                countries: [...action.allCountries]
                }
            }else{
                return {
                ...state,
                countries: [...action.allCountries].filter((country) => country.region === action.region)
                }
            }
        case 'SEARCH':
            return{
                ...state,
                countries: [...action.allCountries].filter((country) => country.name.toLowerCase() === action.name.toLowerCase())
            }
        case 'GET_DETAILS':
            return{
                ...state,
                currentCountry: [...action.allCountries].filter((country)=> country.name === action.name)[0]
            }
        case 'SWITCH_THEME':
            return{
                ...state,
                dark: action.dark
            }
        case 'ERROR':
            return state
        default: 
            return state
    }
}

export default reducer;