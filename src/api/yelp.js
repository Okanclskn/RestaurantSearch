import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 6DxXNRAADpOLs9Feb1T33Ezpit4dPwBMio6HnKoa2hRSNcc2CvbsQ9s1iT3XdTLoU1KEfub6WrXiC8Jy-UH42e3NZT_fW5igPqtljDKbvFhgg17EMjgVY5pW4A5SX3Yx",
  },
});
