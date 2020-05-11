import { InputLocation } from "./interface";
import axios, { AxiosRequestConfig } from "axios";

const pm25API = "http://air4thai.pcd.go.th/forappV2/getAQI_JSON.php";
/* km unit */
const radGlobe = 6371; 

const FindStation = async (input: InputLocation) => {
  const { lat, long } = input;
  const { stations } = await CollectStation();
  let min = 99999;
  let closest;

  for (let i = 0; i < stations.length; ++i) {
    const dif = EquirectangularProjection(
      lat,
      long,
      stations[i].lat,
      stations[i].long
    );
    if (dif < min) {
      closest = i;
      min = dif;
    }
  }
  return stations[closest];
};

const EquirectangularProjection = (lat1, long1, lat2, long2) => {
  const radLat1 = Deg2Rad(lat1);
  const radLon1 = Deg2Rad(long1);
  const radLat2 = Deg2Rad(lat2);
  const radLon2 = Deg2Rad(long2);
  /* Equirectangular projection */
  const x = (radLon2 - radLon1) * Math.cos((radLat1 + radLat2) / 2);
  const y = radLat2 - radLat1;
  const distance = Math.sqrt(x * x + y * y) * radGlobe;
  return distance;
};

const Deg2Rad = (deg) => {
  return (deg * Math.PI) / 180;
};

const CollectStation = () => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: pm25API,
  };
  return axios(config).then((res) => {
    if (res.data) return res.data;
    else return;
  });
};

export default FindStation;
