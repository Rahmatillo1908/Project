import React from 'react'
import "./searchItem.css"
import { useNavigate } from "react-router-dom"
const SearchItem = () => {
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate("/hotels/id")
    }
    return (
        <div className='searchItem'>
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/244761737.webp?k=556e3b8dae0fb80c5f55cb3bd9c1703a542617e0419525c70434900b4f2d068f&o=&s=1" alt="" className="siImg" />
            <div className="siDesc">
                <div className="siTitle">Tower Street Apartments</div>
                <span className="siDistance">1km from center</span>
                <span className="siFeatures">Private suite • 1 bedroom • 1 living room </span>
                <span className="siFeatures">   1 bathroom • 15m²
                    1 queen bed</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button onClick={handleSearch} className='siCheckButton'>See availability</button>
                </div>
            </div>

        </div>
    )
}

export default SearchItem