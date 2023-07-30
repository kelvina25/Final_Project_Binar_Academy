import React from 'react'
import './searchFilterItem.css'
import {  AttachMoney, FavoriteBorder, NavigateNext, ViewInAr } from '@mui/icons-material'

const SearchFilterItem = () => {
  return (
    <>
    <h3 className="searchItemLeftTitle">
        Filter
    </h3>
    <div className="searchFilterItems">
    <div className="searchFilterItem">
        <span className='searchFilterItemLogo'><ViewInAr/></span>
        <p className='searchFilterItemText'>Transit</p>
        <span className='searchFilterItemArrow'><NavigateNext/></span>
    </div>
    <div className="searchFilterItemsLine">

    </div>
    <div className="searchFilterItem">
        <span className='searchFilterItemLogo'><FavoriteBorder/></span>
        <p className='searchFilterItemText'>Fasilitas</p>
        <span className='searchFilterItemArrow'><NavigateNext/></span>
    </div>
    <div className="searchFilterItemsLine">
        
    </div>
    <div className="searchFilterItem">
        <span className='searchFilterItemLogo'><AttachMoney/></span>
        <p className='searchFilterItemText'>Harga</p>
        <span className='searchFilterItemArrow'><NavigateNext/></span>
    </div>
    </div>
    </>
  )
}

export default SearchFilterItem