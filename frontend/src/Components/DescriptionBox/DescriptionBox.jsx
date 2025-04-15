import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-navbox">
            Description
          </div>
          <div className="descriptionbox-navbox fade">
            Reviews (1224)
          </div>
        </div>
        <div className="descriptionbox-description">
          <p>
          Welcome to ARTHWEAR - Where Style Meets Confidence.
          Discover the latest in women's fashion with ARTHWEAR, your go-to destination for trendsetting apparel and timeless pieces. From chic casuals to elegant statements, we offer fashion that empowers you to express your individuality. Enjoy easy browsing, secure checkout, and fast delivery — because looking good should always be this effortless.
          </p>
          <p>
          ARTHWEAR offers a seamless online shopping experience with features like user-friendly navigation, secure login/signup, product filtering, wishlists, and a smooth checkout process. Customers can explore detailed product pages, view size options, and track orders in real-time — all designed to make fashion shopping simple, fast, and enjoyable.
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox