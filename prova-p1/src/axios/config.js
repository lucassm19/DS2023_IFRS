import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://fakerestapi.azurewebsites.net/api/v1/Books",
});

export default blogFetch;