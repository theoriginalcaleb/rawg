import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { reducer } from "./reducer";

export const StateContext = createContext();
// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({children})=>{
    const [productList,setProductList] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [search,setSearch] = useState('')

    useEffect(()=>{
        fetchData()
    },[])
    useEffect(()=>{
        dispatch({type:"GET_PRODUCT",payload:productList});
        const filterProduct = productList?.filter(item=>item?.name?.toLowerCase().includes(search));
        dispatch({type:"GET_PRODUCT",payload:filterProduct})
        dispatch({type:"GET_REVIEWS",payload:reviews});

    },[productList,search,reviews])
   
   
    const fetchData = async ()=>{
        const platforms = await fetch(`https://api.rawg.io/api/platforms?key=cf4eb2169cb54e1d8cba0a45943616e3`);
        const data_platforms = await platforms.json();
        setProductList(data_platforms.results)

        const reviews = await fetch(`https://api.rawg.io/api/reviews?key=cf4eb2169cb54e1d8cba0a45943616e`);
        const data_reviews = await reviews.json();
        setReviews(data_reviews.results)

       
    }
    const initialstate = {
        products:[],
        following:[],
        reviews:[]
    };
 
    
    const [state,dispatch] = useReducer(reducer,initialstate)

    const data = {state,dispatch,search,setSearch,reviews,setReviews}
   
   return(
    <StateContext.Provider value={data}>
    {children}
    </StateContext.Provider>
   )
}
export const StateContextCustom = ()=> useContext(StateContext)

3