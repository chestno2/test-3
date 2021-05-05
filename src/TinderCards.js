import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import database from './firebase'
import "./Tinder.css"

function TinderCards() {
const [People, setPeople]  = useState([{
    name:"Dybala",
    url:"https://images.daznservices.com/di/library/GOAL/fb/f/paulo-dybala-tottenham-2019-20_dfati2wrg9qb1xi8hhjh9rt3x.jpg?t=1366635312&quality=100"
   },
  { name:"ibrahimovich",
   url:"https://en.as.com/futbol/imagenes/2021/03/06/internacional/1615026513_284853_1615026632_noticia_normal_recorte1.jpg"
  },
  {
      name:"Mandzukic",
      url:"https://images.daznservices.com/di/library/GOAL/c4/ff/mario-mandzukic-juventus-2018-19_19xr96tekkwvl1qlqvbpmxz0ao.jpg?t=1604475916&quality=100"
  },
  {
      name:"Rashford",
      url:"https://wallpapercave.com/wp/wp6195166.jpg"
  },
  {
  name:"Griezmann",
  url:"https://wallpapercave.com/wp/wp1816527.jpg"
  },
  {
      name:"Modric",
      url:"https://wallpapercave.com/wp/wp3841305.jpg"
  },
  {
  name:"Mbappe",
  url:"https://wallpapercave.com/wp/wp8287589.jpg"
  }
])
useEffect(() => {
    
    database.collection('People').onSnapshot(snapshot=>(
       setPeople(snapshot.docs.map(doc=>doc.data()))
        ))
}, [])
    return (
        <div>
            
            <div className="container flex justify-center mt-4 " >
                {People.map(person=>(
                    <TinderCard 
                    className ="absolute"
                    key = {person.name}
                    preventSwipe={["up","down"]}>
                        <div 
                        style = {{backgroundImage:`url(${person.url})` }}
                        className="card rounded-lg bg-cover bg-center shadow-2xl"> 
                            <h3 className=" absolute bottom-3  text-center text-2xl font-bold text-white ">{person.name}</h3>
                        </div>
                    </TinderCard>

                ))
            }
         </div>
        </div>
    )
}

export default TinderCards
