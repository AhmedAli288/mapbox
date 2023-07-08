import React from 'react'
import { Grid } from '@mui/material'
import AmenitiesLists from '../../Pages/ListingDetailPage/ListingAmenities/AmenitiesLists/AmenitiesLists'
import AmenitiesDescription from '../../Pages/ListingDetailPage/ListingAmenities/AmenitiesDescription/AmenitiesDescription'

function ListingAndBuildingFacts({leftData, rightData, text, reactComponent, buildingDividers}) {
  return (
    <>
 <Grid
      container
      flexDirection={"row"}
      className="amenitiesParentContainer"
      mt={2}
      justifyContent={"space-between"}
    >
      <Grid item xs={12} sm={5}>
        <AmenitiesDescription text={text}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <AmenitiesLists
          leftData={leftData}
          rightData={rightData}
          reactComponent={reactComponent}
          buildingDividers={buildingDividers}
        />
      </Grid>
    </Grid>

    </>
  )
}

export default ListingAndBuildingFacts