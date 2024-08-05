import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "959e8ed0dbf241f29d384545d932b529",
  },
});
