import React from 'react'
import "./LandingPage.css"

import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://media.istockphoto.com/photos/food-and-accessories-for-the-dog-and-chihuahua-on-table-picture-id1341957270?b=1&k=20&m=1341957270&s=170667a&w=0&h=jNpI_9fB4RcBjPZ7Xj2AO6p1KO7bAhqudn3FQ85tvFM=" },

    // { url: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwY2FyZXxlbnwwfHwwfHw%3D&w=1000&q=80" },
    // { url: "https://images.unsplash.com/photo-1548423469-3dcc5c4ccd65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwYm9hcmRpbmd8ZW58MHx8MHx8&w=1000&q=80" },
    { url: "https://www.pngitem.com/pimgs/m/49-490920_a-group-of-various-pets-pet-care-service.png" },
    { url: "https://media.istockphoto.com/photos/asian-chinese-female-pet-groomer-with-apron-grooming-a-brown-color-picture-id969094132?b=1&k=20&m=969094132&s=170667a&w=0&h=9Dy3MWMWsJHX22jlq9TKvtA8zUr6FzInJtYXh6Fz3CM=" },
    { url: "https://dt2n0xjvnpvnu.cloudfront.net/assets/product_images/zpc_og_article_prepare-dog-boarding.jpg" },
    { url: "https://i.pinimg.com/originals/4a/91/77/4a9177da7f9b07bc55d0e57386e68b02.jpg" },
  ];

export default function LandingPage() {
  return (
    <div>

<div className='landingDiv'>
      <SimpleImageSlider
        width={1150}
        height={440}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
      />
    </div>
      
    </div>
  )
}
