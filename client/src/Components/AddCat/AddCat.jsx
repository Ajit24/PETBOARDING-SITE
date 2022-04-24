import React from 'react'
// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import { addName, addCity, addAddress, addCapacity, addCost, addRating } from '../../Redux/AddPetData/Actions';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'

export default function AddCat() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const name = useSelector((store) => store.pet.name)
  const city = useSelector((store) => store.pet.city)
  const address = useSelector((store) => store.pet.address)
  const capacity = useSelector((store) => store.pet.capacity)
  const cost = useSelector((store) => store.pet.cost)
  // const verified = useSelector((store) => store.pet.name)
  const rating = useSelector((store) => store.pet.rating)



  console.log(name)



  // const [name, setName] = useState("")
  // const [city, setCity] = useState("")
  // const [address, setAddress] = useState("")
  // const [capacity, setCapacity] = useState("")
  // const [cost, setCost] = useState("")
  // const [verified, setVerified] = useState("")
  // const [rating, setRating] = useState("")


  const HandleAdd = () => {
    console.log("hello")

    const data = {
      name,
      city,
      address,
      capacity,
      cost,
      rating
    }
    // axios.post("http://localhost:8080/addPet", data).then((res) => console.log(res))
    console.log(data)
    navigate("/add_details_two")
  }

  return (
    <div>
      {/* <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/><br /><br />
        <input type="text" placeholder='city' onChange={(e) => setCity(e.target.value)}/><br /><br />
        <input type="text" placeholder='address' onChange={(e) => setAddress(e.target.value)}/><br /><br />
        <input type="text" placeholder='capacity' onChange={(e) => setCapacity(e.target.value)}/><br /><br />
        <input type="text" placeholder='cost' onChange={(e) => setCost(e.target.value)} /><br /><br />
        <input type="text" placeholder='verified' onChange={(e) => setVerified(e.target.value)} /><br /><br />
        <input type="text" placeholder='rating' onChange={(e) => setRating(e.target.value)} /><br /><br />

        <button onClick={HandleAdd}>Add</button> */}


      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="filled" color="success" focused onChange={(e) => { dispatch(addName(e.target.value)) }} />  <br />
        <TextField label="City" variant="filled" color="success" focused onChange={(e) => { dispatch(addCity(e.target.value)) }} />  <br />
        <TextField label="Address" variant="filled" color="success" focused onChange={(e) => { dispatch(addAddress(e.target.value)) }} /> <br />
        <TextField label="Capacity" variant="filled" color="success" focused onChange={(e) => { dispatch(addCapacity(e.target.value)) }} /> <br />
        <TextField label="Cost Per Day" variant="filled" color="success" focused onChange={(e) => { dispatch(addCost(e.target.value)) }} /> <br />
        <TextField label="Rating" variant="filled" color="success" focused onChange={(e) => { dispatch(addRating(e.target.value)) }} /> <br />


        <Button variant="contained"

          // disabled = {!name || !city ||  !capacity || !cost ||  || !rating }onClick={() => navigate("/two")}

          disabled={!name || !city || !address || !capacity || !cost || !rating} onClick={HandleAdd}

        >Next</Button>

      </Box>





    </div>
  )
}
