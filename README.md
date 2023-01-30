This is my Ultimate Weather App and The Road Map is just below:

Step by step ;

1) npx create react app and npm start
2) npm install -D tailwindcss
   npx tailwindcss init
3) add icons "npm install --save @iconscout/   react-unicons"
    example: great color react icon<UilReact size="80" color="#61DAFB" />

FIRST BIG PART
**************************************    
4) Create components folder then create first of one of them "TopButtons" that includes auto located cities. Cities needs to take an id for not get errors, remember that. 
5) Add Input Bar, search and location icons , degree types
6) Add TimeAndLocation part and shaped
***************************************
SECOND BIG PART
7) Create another component TempreaturAndDetails(hardest one)
    7.a. shortly brief about weather
    7.b. img - degree - (reel feel,humidity,wind)
    7.c. rise - set - high - low
8) Create Forecast component and than build hourly-daily weather prediction
THIRTH BIG PART
9) Create a folder and js file for take datas we need from web services. 
10) We need to set logic how to create URL for a lot of types of weather situations that we created before. weatherServvices.js is created for this logic.
11)