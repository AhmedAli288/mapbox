
import React, { useState } from 'react';
import { TextField, Paper, Autocomplete,Typography,Popper,InputAdornment } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import SearchIcon from '@mui/icons-material/Search';
import {SearchDataProperties} from '../../../../Constants/ConstantValues'





function SearchForm() {

    const [inputValue, setInputValue] = useState("");
    const propertiesToSearch = [
      "neighbourhood", "agent", "community", "building", "school", "place"
    ];
  
 
    return (
      <Paper
      className="searchFormPaper"

        component="form"
      >
 <Autocomplete
 className='landingPageSearchAutocomplete'
 
  fullWidth
  freeSolo
  id="free-solo-2-demo"
  disableClearable
  inputValue={inputValue}
  onInputChange={(event, newInputValue) => {
    setInputValue(newInputValue);
  }}
  options={SearchDataProperties}

  getOptionLabel={(option) => {
    const matchedProperties = new Set();
    const propertyValues = propertiesToSearch.map((property) => {
      const values = option[property]
        .map((propertyValue) => {
          const propertyMatches = match(propertyValue, inputValue, {
            insideWords: true,
          });
          if (propertyMatches.length > 0) {
            matchedProperties.add(property);
            return `${property}: ${propertyValue}`;
          }
          return null;
        })
        .filter(Boolean);
      return values.length > 0 ? values : null;
    }).filter(Boolean);
    return propertyValues.flat().join(", ");
  }}
  renderOption={(props, option, { inputValue }) => {
    const matchedProperties = new Set();
    const propertyElements = propertiesToSearch.map((property) => {
      const values = option[property]
        .map((propertyValue, index) => {
          const propertyMatches = match(propertyValue, inputValue, {
            insideWords: true,
          });
          const propertyParts = parse(propertyValue, propertyMatches);
          if (propertyMatches.length > 0) {
            matchedProperties.add(property);
            return (
              <div key={`${property}-${index}-value`}>
              
                <Typography variant='AlwynNewRoundedRegular12'
                className='searchTypography'
                
                >
                  {propertyParts.map((part, index) => (
                    <Typography variant='AlwynNewRoundedRegular12'
                      key={`${property}-${index}`}
                      className={`searchTypographyChild ${part.highlight ? 'highlighted' : ''}`}
                    
                    >
                      {part.text}
                    </Typography>
                  ))}
                </Typography>
              </div>
            );
          }
          return null;
        })
        .filter(Boolean);
      return values.length > 0 ? (
        <div key={`${property}-values`}>
        
            <Typography variant="AlwynNewRoundedRegular14Bold">
              {values}
            </Typography>
        </div>
      ) : null;
    }).filter(Boolean);
    return propertyElements.length > 0 ? (
      <li {...props}>
        <div className="searchedResultsPropertyElementsOuterDiv">
          {propertyElements}
          {[...matchedProperties].map((property) => (
            <div
              key={`${property}-header`}
              className='searchedResultsPropertyElementsInnerDiv'
            >
              <Typography variant="AlwynNewRoundedRegular14Bold">
                {property}
              </Typography>
            </div>
          ))}
        </div>
      </li>
    ) : null;
  }}

  PopperComponent={(props) => (
    <Popper
      {...props}
      placement="bottom-start"
      

    />
  )}
  renderInput={(params, inputValue) => (
    <TextField
    variant='standard'
      {...params}
      placeholder="City, Neighbourhood, Community, Building, School, Agent"
      InputProps={{
        ...params.InputProps,
        disableUnderline: true,
        endAdornment: (
          <div className='searchIconWrapper'>
               <InputAdornment position="end">
           
           <SearchIcon className='landingPageTextFieldsearchIcon' />
         
       </InputAdornment>

          </div>
       
        ),
      }}
      className='landingAutocompleteTextField'
    />
  )}

 
/>
</Paper>
    );

}

export default SearchForm
