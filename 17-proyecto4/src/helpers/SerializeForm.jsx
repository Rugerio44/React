export const SerializeForm = (form) => {
    const formData = new FormData(form);
    const completeObj = {};
    formData.forEach((value, key) => {
        completeObj[key] = value;
       
        
    });
    
    
    return completeObj;
}
