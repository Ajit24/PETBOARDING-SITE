import { CHANGE_NAME, CHANGE_CITY, CHANGE_ADDRESS, CHANGE_VERIFIED, CHANGE_CAPACITY, CHANGE_COST, CHANGE_RATING, CHANGE_PETYPES, CHANGE_PETSIZE, CHANGE_SUPERVISION, CHANGE_UNSUPERVISED, CHANGE_SLEEPPLACE, CHANGE_POTY, CHANGE_WALKS, CHANGE_TYPEOFHOME, CHANGE_OUTDOOR, CHANGE_EMERGENCY, CHANGE_SUMMARY , MAKE_POST} from "./Actions";



import axios from "axios";

const initState = {
    name: "",
    city: "",
    address: "",
    capacity: "",
    cost: "",
    verified: "",
    rating: "",
    types: "",
    size: "",
    supervision: "",
    unsepervised: "",
    sleepPlace: "",
    poty: "",
    walks: "",
    typeofhome: "",
    outdoor: "",
    emergency: "",
    summary: "",

}

export const Petreducer = (store = initState, { type, payload }) => {
    // console.log("store" , store)
    // console.log("store",store)
    switch (type) {
        case CHANGE_NAME:
            return { ...store, name: payload }

        case CHANGE_CITY:
            return { ...store, city: payload }

        case CHANGE_ADDRESS:
            return { ...store, address: payload }

        case CHANGE_CAPACITY:
            return { ...store, capacity: payload }

        case CHANGE_COST:
            return { ...store, cost: payload }

        case CHANGE_VERIFIED:
            return { ...store, verified: payload }

        case CHANGE_RATING:
            return { ...store, rating: payload }


        case CHANGE_PETYPES:
            return { ...store, types: payload }

        case CHANGE_PETSIZE:
            return { ...store, size: payload }

        case CHANGE_SUPERVISION:
            return { ...store, supervision: payload }

        case CHANGE_UNSUPERVISED:
            return { ...store, unsepervised: payload }

        case CHANGE_SLEEPPLACE:
            return { ...store, sleepPlace: payload }

        case CHANGE_POTY:
            return { ...store, poty: payload }

        case CHANGE_WALKS:
            return { ...store, walks: payload }

        case CHANGE_TYPEOFHOME:
            return { ...store, typeofhome: payload }
        case CHANGE_OUTDOOR:
            return { ...store, outdoor: payload }

        case CHANGE_EMERGENCY:
            return { ...store, emergency: payload }

        case CHANGE_SUMMARY:
            return { ...store, summary: payload }


        case MAKE_POST:
            axios.post("https://petdata1.herokuapp.com/petData", store)
            alert("Done")
            return store



        // case MAKE_POST:
        //     axios.post(http://localhost:8080/addPet", store)
        //     alert("Added successfully");
        //     return store;



        default:
            return store;
    }


}

