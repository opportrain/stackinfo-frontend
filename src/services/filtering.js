const baseURL = "https://search-stacks-nhtjl6xzla-zf.a.run.app"

export async function getFiltersList(){
    return await fetch(`${baseURL}/getFilters`).then((res)=>{
        return res.json()
    })
}