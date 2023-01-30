import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex item-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Salı, 17 Ocak 2023 | Local Time: 9:41 PM 
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'> Samsun , TR </p>
        </div>
    </div>
  )
}

export default TimeAndLocation