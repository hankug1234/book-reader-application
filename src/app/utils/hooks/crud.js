import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";


const fetchPost = ({url,data}) => {
    return axios.post(url,data,{headers:{"Content-Type": "application/json",}})
}

const fetchGet = (url) => {
    return fetch(url)
}

const useInsert = (relatedQueryKeys) => {
    const queryClient = useQueryClient()
    return useMutation(fetchPost,
        {
            onSuccess: (data) => {
                for(const queryKey in relatedQueryKeys){
                    queryClient.setQueryData(queryKey
                        , oldProductData => {return {...oldProductData, data: [...oldProductData.data, data]}})
                }
                alert("success")            
            },
            onError: (_error, _product, context) => {
              alert(_error)
            },
        }
    )

}

const useSelect = (queryKey) => {
    return useQuery(queryKey,fetchGet)
}

export {useInsert, useSelect}