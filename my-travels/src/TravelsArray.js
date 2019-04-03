import React from "react";
import Travel from "./Travel";

const travelsInfo = [
  {
    destination:"Tokyo",
    country:"Japan",
    photo:"https://static.lexpress.fr/medias_10182/w_600,h_600,c_fill,g_north/v1424034852/visite-a-tokyo_5213641.jpg",
    distance:"9 884 km",
  },
  {
    destination:"Beijing",
    country:"China",
    photo:"https://d24ndt2yiijez0.cloudfront.net/uploads/image/asset/6351/Beijing_Forbidden.jpg",
    distance:"8 308 km",
  },
  {
    destination:"Taipei",
    country:"Taïwan",
    photo:"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/41/1b/86/411b86d9-fe88-9017-6017-2b6e72c993be/859730888941_cover.jpg/600x600bf.png",
    distance:"9 881 km",
  },
  {
    destination:"Mumbai",
    country:"India",
    photo:"https://img.timesnownews.com/babulnath_2_1546958303__rend_1_1.jpg?d=600x",
    distance:"6 809 km",
  },
  {
    destination:"Hong Kong",
    country:"China",
    photo:"https://www.demontfortsu.com/asset/Event/6013/HONG-KONG-The-Peak-at-Night-Web.jpg",
    distance:"9 629 km",
  },
];

const TravelsArray = () => (
  <div>
    {travelsInfo.map(travel => (
      <Travel
        key={travel.destination}
        destination={travel.destination}
        country={travel.country}
        photo={travel.photo}
        distance={travel.distance}
      />
    ))}
  </div>
)

export default TravelsArray;


