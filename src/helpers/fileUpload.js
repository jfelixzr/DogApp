export const fileUpload = async(file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/bfexplus/image/upload'
    const fromData = new FormData();
    fromData.append('upload_preset', 'api_daily');
    fromData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method:'POST',
            body: fromData
        });

        if(resp.ok){
              const cloudRes = await resp.json()
              console.log('data',cloudRes)
              return cloudRes.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
       throw error;
    }
 
}