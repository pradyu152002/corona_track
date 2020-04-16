import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafetching(){
    const[Country,setCountry]= useState({})
    const[country,setcountry]= useState('India')
    useEffect(()=> {
        axios.get(`https://corona.lmao.ninja/v2/countries/${country}`)
          .then(res =>{
              console.log(res)
              setCountry(res.data)
          })
          .catch(err =>{
              console.log(err)
          })
    },[country])
    return(
        <div>
            <input type="text" value={country} onChange={e => setcountry(e.target.value) } />
            <h3 className="Output">The total cases are:{Country.cases}</h3>
            <h3 className="Output">The total deaths are:{Country.deaths}</h3>
            {/* <ul>
                {
                    countries.map(Country =>(
                      <li key={Country.country}>{Country.cases}</li>  
                    ))
                }
            </ul> */}
        </div>
    )
}

export default Datafetching