import {useState,useEffect} from 'react'
import GoogleAutocomplete from '../GoogleAutocompleteSearch';
import Map from '../Map';

function Application() {
    const [searchCountryName , setSearchCountryName] = useState('india');

    const selectCountryName = (countryName) =>{        
        setSearchCountryName(countryName)
    }

    return ( <>
        <GoogleAutocomplete selectCountryName = {selectCountryName}/>
        <Map searchCountryName = {searchCountryName}/>
    </> );
}

export default Application;