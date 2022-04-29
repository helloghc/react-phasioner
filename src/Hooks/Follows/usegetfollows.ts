import { useCallback, useContext, useEffect } from "react";
import Context from "../../Contexts/user_context";
import { getFollowsOfUser } from "../../Services/get_follows";
import { postNewFollow } from "../../Services/post_newfollow";

export default function useGetFollows () {
    const { jwt, followers, setFollowers } = useContext(Context);


    const newFollow = useCallback(async ({id}: {id:string})=> {
        const response = await postNewFollow({id: id, token: jwt});
        console.log(response.status);
        if(response.status === 201){
            setFollowers(await response.json());
        }
    },[jwt, setFollowers])

    useEffect(() => {
        if(jwt) {
            getFollowsOfUser({token:jwt})
                .then((e)=>{
                    return e.json()
                }).then((e)=> {
                    // console.log(e);
                    
                    setFollowers(e)
                });
        }
    } , [jwt, setFollowers])


    return {
        followers,
        newFollow,
    }
}