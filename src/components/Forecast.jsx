import React from 'react'

function Forecast({title}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>hourly forecast</p>
        </div>
        <hr className='my-2'/>

        <div className='flex flex-row item-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>08:30 AM</p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" className="w-14" alt="" />
                <p className='font-medium'>12°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>08:30 AM</p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" className="w-14" alt="" />
                <p className='font-medium'>12°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>08:30 AM</p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" className="w-14" alt="" />
                <p className='font-medium'>12°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>08:30 AM</p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" className="w-14" alt="" />
                <p className='font-medium'>12°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>08:30 AM</p>
                <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" className="w-14" alt="" />
                <p className='font-medium'>12°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast