import { useQuery, useMutation, useQueryClient } from "react-query";


const fetchPost = (url,data) => {
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE 등
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
      });
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
                        , oldProductData => {return {...oldProductData, data: [...oldProductData.data, data.data]}})
                }            
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