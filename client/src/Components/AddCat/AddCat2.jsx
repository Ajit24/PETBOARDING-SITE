import React, { useState } from 'react'
import "./AddCat.css"
import styled from "@emotion/styled";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { type } from '@testing-library/user-event/dist/type';

import { useDispatch, useSelector } from 'react-redux';

import { addVerified ,addPetTypes, addPetSize,addSuperVision,  addUnsupervised,addSleepplace, addPoty , addWalks , addTypesofHome,addOutdoor,addEmergency, addSummary, addMakePost  } from '../../Redux/AddPetData/Actions';

export default function AddCat2() {
  // const navigate = useNavigate();
  const dispatch = useDispatch()

  const verified = useSelector((store) => store.pet.verified)
  const types = useSelector((store) => store.pet.types)
  const size = useSelector((store) => store.pet.size)
  const supervision = useSelector((store) => store.supervision)
  const unsepervised = useSelector((store) => store.pet.unsepervised)
  const sleepPlace = useSelector((store) => store.pet.sleepPlace)
  const poty = useSelector((store) => store.pet.poty)
  const walks = useSelector((store) => store.pet.walks)
  const typeofhome = useSelector((store) => store.pet.typeofhome)
  const outdoor = useSelector((store) => store.pet.outdoor)
  const emergency = useSelector((store) => store.pet.emergency)
  const summary = useSelector((store) => store.pet.summary)
  


  // const [verified, setVerified] = useState("")
  // const [petTypes, setPetTypes] = useState("")
  // const [petSize, setPetSize] = useState("")
  // const [supervision, setSupervision] = useState("")
  // const [unsepervised, setUnsepervised] = useState("")
  // const [sleepPlace, setSleepPlace] = useState("")
  // const [poty, setPoty] = useState("")
  // const [walks, setWalks] = useState("")
  // const [typeofhome, setTypeofhome] = useState("")
  // const [outdoor, setOutdoor] = useState("")
  // const [emergency, setEmergency] = useState("")
  // const [summary, setSummary] = useState("")
  // const [data, setData] = useState("");

  const handleVerified = (e) => {
    console.log(e.target.value)
    // setVerified(e.target.value)
     dispatch(addVerified(e.target.value))
  };

  const handlePetTypes = (e) => {
    console.log(e.target.value)
    // setPetTypes(e.target.value)
    dispatch(addPetTypes(e.target.value))
  };

  const handlePetSize = (e) => {
    console.log(e.target.value)
    // setPetSize(e.target.value)
    dispatch(addPetSize(e.target.value))
  };




  return (
    <div>
      <div className='divSelectOne'>
        <div >
          <InputLabel id="demo-simple-select-helper-label">Verified</InputLabel>
          <Select
            fullWidth
            // sx={{ m: 1, minWidth: 120 }}
            name="verified"
            onChange={handleVerified}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={verified}
            label="Verified"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </div>
        <div>
          <InputLabel id="demo-simple-select-helper-label-pet">
            Pet Types
          </InputLabel>
          <Select
            fullWidth
            // sx={{ m: 1, minWidth: 120 }}
            name="types"
            onChange={handlePetTypes}
            labelId="demo-simple-select-helper-label-pet"
            id="demo-simple-select-helper"
            value={types}
            label="Pet Types"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"dog"}>Dog</MenuItem>
            <MenuItem value={"cats"}>Cats</MenuItem>
            <MenuItem value={"rabbits"}>Rabbits</MenuItem>
          </Select>
        </div>
        <div>
          <InputLabel id="demo-simple-select-helper-label-pet">
            Pet Size
          </InputLabel>
          <Select
            name="size"
            fullWidth
            // sx={{ m: 1, minWidth: 120 }}
            onChange={handlePetSize}
            labelId="demo-simple-select-helper-label-pet-size"
            id="demo-simple-select-helper"
            value={size}
            label="Pet Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"1-5"}>1-5kg</MenuItem>
            <MenuItem value={"5-10"}>5-10kg</MenuItem>
            <MenuItem value={"10-20"}>10-20kg</MenuItem>
            <MenuItem value={"20-40"}>20-40kg</MenuItem>
            <MenuItem value={"40-100"}>40+kg</MenuItem>
          </Select>
        </div>
      </div>


      <div className="textDiv">
        <TextField
          name="supervision"
          fullWidth
          onChange={(e) => { dispatch(addSuperVision(e.target.value))}}
          id="outlined-basic"
          label="Level of adult Supervision"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="unsepervised"
          fullWidth
          onChange={(e) => { dispatch(addUnsupervised(e.target.value))}}
          id="outlined-basic"
          label="The place your pet will be if they are left unsupervised at home."
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="sleepPlace"
          fullWidth
          onChange={(e) => { dispatch(addSleepplace(e.target.value))}}
          id="outlined-basic"
          label="The place your pet will sleep at night"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="poty"
          fullWidth
          onChange={(e) => { dispatch(addPoty(e.target.value))}}
          id="outlined-basic"
          label="The number of potty breaks provided per day"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="walks"
          fullWidth
          onChange={(e) => { dispatch(addWalks(e.target.value))}}
          id="outlined-basic"
          label="The number of walks provided per day"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="typeofhome"
          fullWidth
          onChange={(e) => { dispatch(addTypesofHome(e.target.value))}}
          id="outlined-basic"
          label="The type of home I stay in"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="outdoor"
          fullWidth
          onChange={(e) => { dispatch(addOutdoor(e.target.value))}}
          id="outlined-basic"
          label="My outdoor area size."
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="emergency"
          fullWidth
          onChange={(e) => { dispatch(addEmergency(e.target.value))}}
          id="outlined-basic"
          label="Emergency transport"
          variant="outlined"
          margin="normal"
        />
        <TextField
          name="summary"
          fullWidth
          onChange={(e) => { dispatch(addSummary(e.target.value))}}
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={3}
          margin="normal"
        />
        <Button onClick={() => {dispatch(addMakePost())}}>Submit</Button>
        {/* <ColorButton onClick={handleSubmit} variant="contained">
  Submit
</ColorButton> */}
      </div>

    </div>
  )
}
