//action 
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_ADDRESS = "CHANGE_ADDRESS";
export const CHANGE_CAPACITY = "CHANGE_CAPACITY";
export const CHANGE_COST = "CHANGE_COST";
export const CHANGE_RATING = "CHANGE_RATING";

export const CHANGE_VERIFIED = "CHANGE_VERIFIED";
export const CHANGE_PETYPES = "CHANGE_PETYPES";
export const CHANGE_PETSIZE = "CHANGE_PETSIZE";
export const CHANGE_SUPERVISION = "CHANGE_SUPERVISION";
export const CHANGE_UNSUPERVISED = "CHANGE_UNSUPERVISED";
export const CHANGE_SLEEPPLACE = "CHANGE_SLEEPPLACE";
export const CHANGE_POTY = "CHANGE_POTY";
export const CHANGE_WALKS = "CHANGE_WALKS";
export const CHANGE_TYPEOFHOME = "CHANGE_TYPEOFHOME";
export const CHANGE_OUTDOOR = "CHANGE_OUTDOOR";
export const CHANGE_EMERGENCY = "CHANGE_EMERGENCY";
export const CHANGE_SUMMARY = "CHANGE_SUMMARY";

export const MAKE_POST = "MAKE_POST";
//action creators
export const addName = (payload) => ({ type: CHANGE_NAME, payload });

export const addCity = (payload) => ({ type: CHANGE_CITY, payload });

export const addAddress = (payload) => ({ type: CHANGE_ADDRESS, payload });

export const addCapacity = (payload) => ({ type: CHANGE_CAPACITY, payload });

export const addCost = (payload) => ({ type: CHANGE_COST, payload });

export const addRating = (payload) => ({ type: CHANGE_RATING, payload });

export const addVerified = (payload) => ({ type: CHANGE_VERIFIED, payload });


export const addPetTypes = (payload) => ({ type: CHANGE_PETYPES, payload });
export const addPetSize = (payload) => ({ type: CHANGE_PETSIZE, payload });
export const addSuperVision = (payload) => ({ type: CHANGE_SUPERVISION, payload });
export const addUnsupervised = (payload) => ({ type: CHANGE_UNSUPERVISED, payload });
export const addSleepplace = (payload) => ({ type: CHANGE_SLEEPPLACE, payload });
export const addPoty = (payload) => ({ type: CHANGE_POTY, payload });
export const addWalks = (payload) => ({ type: CHANGE_WALKS, payload });
export const addTypesofHome = (payload) => ({ type: CHANGE_TYPEOFHOME, payload });
export const addOutdoor = (payload) => ({ type: CHANGE_OUTDOOR, payload });
export const addEmergency = (payload) => ({ type: CHANGE_EMERGENCY, payload });
export const addSummary = (payload) => ({ type: CHANGE_SUMMARY, payload });

export const addMakePost = (payload) => ({ type: MAKE_POST, payload });