import React from 'react'
import './searchFilterUrutan.css'
import { Close } from '@mui/icons-material'



const SearchFilterUrutan = () => {

  return (
    <div className="searchFilterUrutanItemModal">
        <div className="searchFilterUrutanCloseBtn" >
        <Close/> 
        </div>
        <div className="searchFilterUrutanItemModalContainer">
            <p className='searchFilterUrutanItemModalText'>
            <span className="searchFilterUrutanItemModalTextBold">Harga</span>
                - Termurah
            </p>
        </div>
        <div className="searchFilterUrutanItemModalContainer">
            <p className='searchFilterUrutanItemModalText'>
            <span className="searchFilterUrutanItemModalTextBold">Durasi</span>
                - Terpendek
            </p>
        </div>
        <div className="searchFilterUrutanItemModalContainer">
            <p className='searchFilterUrutanItemModalText'>
            <span className="searchFilterUrutanItemModalTextBold">Keberangkatan</span>
                - Paling awal
            </p>
        </div>
        <div className="searchFilterUrutanItemModalContainer">
            <p className='searchFilterUrutanItemModalText'>
            <span className="searchFilterUrutanItemModalTextBold">Keberangkatan</span>
                - Paling akhir
            </p>
        </div>
        <div className="searchFilterUrutanItemModalContainer">
            <p className='searchFilterUrutanItemModalText'>
            <span className="searchFilterUrutanItemModalTextBold">Kedatangan</span>
                - Paling awal
            </p>
        </div>
        <div className="searchFilterUrutanItemModalContainer">
            <p className='searchFilterUrutanItemModalText'>
            <span className="searchFilterUrutanItemModalTextBold">Kedatangan</span>
                - Paling akhir
            </p>
        </div>
        
        <div className="searchFilterUrutanItemBtnContainer">
            <button className='searchFilterUrutanItemBtn'>Pilih</button>
        </div>
    </div>
  )
}

export default SearchFilterUrutan