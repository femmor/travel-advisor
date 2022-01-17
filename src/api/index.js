import axios from "axios";

const api_url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(api_url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "5e79326161msh7fcc2f9349cf141p1eebeajsnfe7673e44792",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
