

const request = async(url,data=null,method="GET") => {

        const options={
            method
        }
        if(data && method=="POST"){
            options.data=JSON.stringify(data)
        }
        
        return await fetch(url).then(res=>res.json()).catch(err=>err)
        
   
}

export const  get=(url)=>request(url);

export const  post=(url,data)=>{request(url,data,"POST")};

