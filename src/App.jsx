import { useState } from "react"
import "./App.css"
import Navbar from "./Navbar"

function App() {
  const [restaurantData, setRestaurantData] = useState([
    {
      name: "Lapinoz Pizza",
      description: "Pizza, Italian, Fast Food, Pasta",
      address: "Shop 9, Plot 264/A, Ground Floor, Leela Nivas, Laxmi Napoo Road, Matunga East, Mumbai",
      rating: "4.4",
      phone: "7588647905",
      direction: "https://www.google.com/maps/dir/?api=1&destination=19.0266159248,72.8506931663",
      images: ["/Images/TopRes/res1.avif"],
      avg_cost: "200",
      reviews: ["Object with all the details name-comment-rating"],
      category: [
        {
          combo: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod1.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          Veg_Pizza: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod2.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          garlic_bread: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod3.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          sides: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod4.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
        },
      ],
    },
    {
      name: "Lapinoz Pizza",
      description: "Pizza, Italian, Fast Food, Pasta",
      address: "Shop 9, Plot 264/A, Ground Floor, Leela Nivas, Laxmi Napoo Road, Matunga East, Mumbai",
      rating: "4.4",
      phone: "7588647905",
      direction: "https://www.google.com/maps/dir/?api=1&destination=19.0266159248,72.8506931663",
      images: ["/Images/TopRes/res1.avif"],
      avg_cost: "200",
      reviews: ["Object with all the details name-comment-rating"],
      category: [
        {
          combo: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod1.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          Veg_Pizza: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod2.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          garlic_bread: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod3.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          sides: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod4.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
        },
      ],
    },
    {
      name: "Lapinoz Pizza",
      description: "Pizza, Italian, Fast Food, Pasta",
      address: "Shop 9, Plot 264/A, Ground Floor, Leela Nivas, Laxmi Napoo Road, Matunga East, Mumbai",
      rating: "4.4",
      phone: "7588647905",
      direction: "https://www.google.com/maps/dir/?api=1&destination=19.0266159248,72.8506931663",
      images: ["/Images/TopRes/res1.avif"],
      avg_cost: "200",
      reviews: ["Object with all the details name-comment-rating"],
      category: [
        {
          combo: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod1.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          Veg_Pizza: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod2.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          garlic_bread: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod3.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          sides: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod4.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
        },
      ],
    },
    {
      name: "Lapinoz Pizza",
      description: "Pizza, Italian, Fast Food, Pasta",
      address: "Shop 9, Plot 264/A, Ground Floor, Leela Nivas, Laxmi Napoo Road, Matunga East, Mumbai",
      rating: "4.4",
      phone: "7588647905",
      direction: "https://www.google.com/maps/dir/?api=1&destination=19.0266159248,72.8506931663",
      images: ["/Images/TopRes/res1.avif"],
      avg_cost: "200",
      reviews: ["Object with all the details name-comment-rating"],
      category: [
        {
          combo: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod1.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          Veg_Pizza: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod2.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          garlic_bread: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod3.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
          sides: [
            {
              dish_name: "Combo Of Chocolava & Coke",
              dish_pric: "167",
              dish_desc: "Choclate + Cake",
              dish_img: "/Images/hero_prod4.avif",
              dist_rating: "4",
              dish_veg: "true",
            },
          ],
        },
      ],
    },
  ])

  const restaunats = restaurantData.map((data, key) => {
    return (
      <div key={key} className="max-h-40">
        <img src={data.images[0]} className="w-full h-full object-cover rounded-lg" alt="" />
        <h3 className="font-bold pt-1">{data.name}</h3>
        <h4>{data.description}</h4>
        <p>{data.address}</p>
      </div>
    )
  })

  return (
    <>
      <Navbar />

      <div>
        <div className="w-3/4 mx-auto pt-5 pb-10 mb-10 border-b">
          <h1 className="text-2xl font-bold">Whats on you mind?</h1>
          <div className="grid grid-cols-8">
            <img src="/Images/hero_prod1.avif" alt="" />
            <img src="/Images/hero_prod2.avif" alt="" />
            <img src="/Images/hero_prod3.avif" alt="" />
            <img src="/Images/hero_prod4.avif" alt="" />
            <img src="/Images/hero_prod5.avif" alt="" />
            <img src="/Images/hero_prod6.avif" alt="" />
            <img src="/Images/hero_prod7.avif" alt="" />
            <img src="/Images/hero_prod8.avif" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="w-3/4 mx-auto">
          <h1 className="text-2xl font-bold mb-3">Top restaurant chains in Mumbai</h1>
          <div className="grid grid-cols-4 gap-x-8">
            {restaunats}
            {/* <div className="max-h-40">
              <img src="/Images/TopRes/res1.avif" className="w-full h-full object-cover rounded-lg" alt="" />
              <h3 className="font-bold pt-1">Behrouz Biryani</h3>
              <h4>4.2 . 30 mins</h4>
              <p>Chembur</p>
            </div>
            <div className="max-h-40">
              <img src="/Images/TopRes/res2.avif" className="w-full h-full object-cover rounded-lg" alt="" />
              <h3 className="font-bold pt-1">Thambbi</h3>
              <h4>4.2 . 30 mins</h4>
              <p>Mulund</p>
            </div>
            <div className="max-h-40">
              <img src="/Images/TopRes/res3.avif" className="w-full h-full object-cover rounded-lg" alt="" />
              <h3 className="font-bold pt-1">Hangout Cakes & More</h3>
              <h4>4.2 . 30 mins</h4>
              <p>Bandra</p>
            </div>
            <div className="max-h-40">
              <img src="/Images/TopRes/res4.avif" className="w-full h-full object-cover rounded-lg" alt="" />
              <h3 className="font-bold pt-1">Kitchen Garden by Suzette</h3>
              <h4>4.2 . 30 mins</h4>
              <p>Malad</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
