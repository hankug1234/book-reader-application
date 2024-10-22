import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";


const fetchPost =({url,data}) => {
    return axios.post(url,data,{headers:{"Content-Type": "application/json",}})
}



const useInsert = (relatedQueryKeys) => {
    const queryClient = useQueryClient()
    return useMutation(fetchPost,
        {
            onSuccess: (data) => {
                for(const queryKey in relatedQueryKeys){
                    queryClient.setQueryData(queryKey
                        , oldProductData => {return {...oldProductData, data: [...oldProductData.data, data.data]}})
                }
                alert("success")            
            },
            onError: (_error, _product, context) => {
              alert(_error)
            },
        }
    )

}
const defaultCallBack = (d)=>{}
const useDatasPageSelect = (queryKey,url,start,end,successCallback=defaultCallBack) =>{
    const select = ()=>{
        return axios.get(`${url}/${start}/${end}`)
    }

    return useQuery(queryKey,select,{
        onSuccess: (data) => {
            successCallback(data)
            /*
            let oldDataSetIds = queryClient.getQueryData(queryKey)?.data?.map(x=>x["data_set_id"])
            let newDataSetIds = data?.data?.filter(x=>!oldDataSetIds?.includes(x["data_set_id"]))

            if(newDataSetIds?.length > 0){
                queryClient.setQueryData(queryKey, oldProductData => {
                    return {...oldProductData, data: [...oldProductData?.data, data?.data]}
                    })  
            }
        */
        },
        onError: (_error, _product, context) => {
          alert(_error)
        }
    })
}


export {useInsert,useDatasPageSelect}