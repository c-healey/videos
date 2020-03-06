import axios from "axios";
const KEY = "AIzaSyClQETcE-xzBSVeSyVrmUrOvxOnu4VNwnA";

export default axios.create({
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  },
  baseURL: "https://www.googleapis.com/youtube/v3"
});
// params not exporting for some odd reason
