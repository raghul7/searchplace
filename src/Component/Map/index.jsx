import React from 'react';
import './style.scss';

 const Map=({searchCountryName})=>{
    return (
        <div className="google-map-code">
          <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKJdprYRNzrXMGlfn_NnscD_c1ZfMGtgE&q=${searchCountryName}`} width="1000" height="500" padding="20px" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    );
 }
 export default Map;