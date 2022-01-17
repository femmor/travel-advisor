import axios from "axios";

const api_url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "5e79326161msh7fcc2f9349cf141p1eebeajsnfe7673e44792",
  },
};

export const getPlacesData = async () => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(api_url, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
