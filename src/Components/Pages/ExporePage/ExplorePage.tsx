import React from 'react'
import './ExplorePage.scss'
const ExplorePage = (props:any) => {
  return (
    <div className={`${!props.isExplorePageDisplay ? "active" : ""} main`} >
      explore
      Netra
    </div>
  )
}

export default ExplorePage
