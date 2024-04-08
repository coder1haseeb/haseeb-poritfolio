import React from 'react'

import './Clients.css'

import khanLogo from '../../../Assets/khanLogo.jpeg'
import atomixLogo from '../../../Assets/ATOMIX_LOGO.png'

const Clients = () => {
    const clientsImages = [
        {
            id : 1,
            image : khanLogo
        },
        {
            id : 2,
            image : atomixLogo
        }
    ]
  return (
    <div className="clietns_div_about_page">
        <div className="our_clients_upper_div">
            Our Clients
        </div>
        <div className="our_clients_lower_div">
            {
                clientsImages.map((clients) =>{
                    return(
                        <div className="single_client_div">
                            <img src={clients.image} alt="Client_image" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Clients