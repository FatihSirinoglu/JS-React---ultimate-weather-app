import React from 'react'

function TopButtons() {

    const cities = [
        {id:"1",
        title: "Istanbul"
        },
        {id:"2",
        title: "Ankara"
        },
        {id:"3",
        title: "Samsun"
        },
        {id:"4",
        title: "Rize"
        },
        {id:"5",
        title: "Amsterdam"
        },
    ]
  return <div className='flex item-center justify-around my-6'>
    {cities.map((city)=>
    <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>)}
  </div>
}

export default TopButtons