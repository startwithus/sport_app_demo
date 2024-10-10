

export const getCaller = async (url) => {   
    try{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // mode: "cors",
        }).then(response => response.json()).catch(error => console.log(error))
        return response
    }catch(err){
    console.log(err)
    }
    
}
export const postCaller = async (url, data) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).catch(error => console.log(error))
        return response
    }catch(err){
        console.log(err)
    }

}

export const updateCaller = async (url, data ) => {
   try{
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).catch(error => console.log(error))
    return response
   }catch(err){
    console.log(err)
   }
}
export const deleteCaller = async (url, data ) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).catch(error => console.log(error))
        return response
    }catch(err){
        console.log(err)
    }
}





