import { useContext, useEffect } from "react";
import Context from "../../Contexts/user_context";
import { getFollowsOfUser } from "../../Services/get_follows";

export default function usePostFollow () {
    const { jwt, followers, setFollowers } = useContext(Context);

    useEffect(() => {
        if(jwt) {
            getFollowsOfUser({token:jwt})
                .then((e)=>{
                    return e.json()
                }).then((e)=> {
                    console.log(e);
                    
                    setFollowers(e)
                });
        }
    } , [jwt, setFollowers])


    return {
        followers,
    }
}