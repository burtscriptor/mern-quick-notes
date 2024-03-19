import checkToken from "../../utilities/users-service";
import { useState } from "react";

const NewOrderPage = () => {
const [token, setToken]= useState(null);

    const handleCheckToken = async () => {
        try {
            const expDate = await checkToken();
            console.log("this is hCheckToken expDate", expDate)
            setToken(expDate)
        
        }catch {


        }
        
       
    }

    return (
        <div>
            <p>{token}</p>
        <h1>NewOrderPage</h1>
        <button onClick={handleCheckToken}>Check when my token expires</button>
        </div>
    );
    };
    
export default NewOrderPage;