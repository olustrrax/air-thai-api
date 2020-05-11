import { inputLocation } from "./interface"
import axios , { AxiosRequestConfig } from "axios"
const pm25API = 'http://air4thai.pcd.go.th/forappV2/getAQI_JSON.php'
const radGlobe = 6371 //km unit
const FindStation = async (input: inputLocation) => {
  const { lat, long } = input
  const { stations } = await CollectStation()
  let minDif = 99999;
  let closest;

  for (let i = 0; i < stations.length; ++i) {
    let dif = PythagorasEquirectangular(lat, long, stations[i].lat, stations[i].long);
    if (dif < minDif) {
      closest = i;
      minDif = dif;
    }
  }
  return stations[closest]
}

const PythagorasEquirectangular = (lat1, long1, lat2, long2) => {
  const radLat1 = Deg2Rad(lat1)
  const radLon1 = Deg2Rad(long1)
  const radLat2 = Deg2Rad(lat2)
  const radLon2 = Deg2Rad(long2)
  /** Equirectangular projection */
  var x = (radLon2 - radLon1) * Math.cos((radLat1 + radLat2) / 2)
  var y = (radLat2 - radLat1)
  var distance = Math.sqrt(x * x + y * y) * radGlobe
  return distance
}



const Deg2Rad = (deg) => {
  return deg * Math.PI / 180;
}

const CollectStation = () => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: pm25API,
  }
  return axios(config).then((res) => { 
    if(res.data)
      return res.data
    else return
  })
}

export default FindStation