const baseURL = "https://search-stacks-nhtjl6xzla-zf.a.run.app"

export async function getFiltersList(){
    return await fetch(`${baseURL}/getFilters`).then((res)=>{
        return res.json()
    })
}
export async function searchByToken(token){
    return await fetch(`${baseURL}/searchByToken/${token}`).then((res)=>{
        return res.json()
    })
}
export async function searchAndFilter(token, filters){
    let formattedFilters = {};
    filters.selectedFilters.forEach((filter) => {
        const stack = `stacks.${filter.filterStack.toLowerCase()}`;
        if (formattedFilters[stack]) {
            formattedFilters[stack].push(filter.filterName);
        } else {
            formattedFilters[stack] = [filter.filterName];
        }
    });
    let data =   {
        "token": token,
        "filters": formattedFilters
    }
    const requestBody = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return await fetch(`${baseURL}/searchAndFilter`, requestBody).then((res)=>{
        return res.json()
    })
}
