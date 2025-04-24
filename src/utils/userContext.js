import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "Deafult user"
}); 

export default userContext;