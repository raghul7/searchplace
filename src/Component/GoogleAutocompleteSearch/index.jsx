import {useEffect, useState} from 'react'
import axios from 'axios';
import { AutoComplete  } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';

function GoogleAutocomplete({selectCountryName}) {
    const [countryList,setCountryList] = useState([]);
    const [options,setOptions] = useState([]);        

    useEffect(() =>{
      axios.get(`https://countriesnow.space/api/v0.1/countries/positions`).then(function (response) {        
        setCountryList(response?.data?.data.map(val =>({
          label : val.name,
          value : val.name
        } 
        )))        
        // localStorage.setItem('countries',JSON.stringify(response?.data?.data))
      })
      .catch(function (error) {
        console.log(error);
      });
    },[])
    
    const setCountryOptions=()=>{      
      setOptions([...countryList])
    }

    useEffect(() =>{      
      countryList.length > 0 &&  setCountryOptions()
    },[countryList])

    const onSearch = (searchText) => {
      setOptions(countryList.filter((item) => item['value'].toLowerCase().includes(searchText)))      
    };

    const onSelect = (data) => {
      selectCountryName(data)          
    };

    return ( <div className='search-input'>
    <AutoComplete
        options={options}        
        onSelect={onSelect}
        onSearch={onSearch}
        style={{
          width: 600
        }}
        placeholder="Search country"
      />
        
    </div>  );
}

export default GoogleAutocomplete;