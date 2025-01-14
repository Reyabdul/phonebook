import axios from "axios";

const baseUrl = "http://localhost:3000/persons";

//Get data
const getAll = () => {
  const request = axios.get(baseUrl)
  // console.log(request)

  return request.then(response => response.data)
}

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject)
  return request.then(response => response.data)
}

export default { getAll, create }