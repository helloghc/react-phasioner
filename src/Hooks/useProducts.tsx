import { useCallback, useContext, useState } from "react";
import ProductContext from "../Contexts/products_context";
import { getDetailsProducts } from '../Services/get_detail_product'

export default function useProduct () {
    const { detailprod, setDetailProd } = useContext(ProductContext);
    const [ states, setStates ] = useState({load: true, error: false});

    const getDetailProduts = useCallback( async ({id}: {id: string}) => {
        try {
            setStates({load: true, error: false});
            const response = await getDetailsProducts({id: id});
            if(response.status === 200) {
                const products = await response.json();
                console.log(products);
                setDetailProd(products);
                setStates({load: false, error: false});
            }
        } catch (error) {
            
        }

    }, [setDetailProd])

    // useEffect(() => {
    //     getSpotProduts();
    // } , [getSpotProduts])


    return {
        detailprod,
        getDetailProduts,
        isLoadDetail: states.load,
    }
}