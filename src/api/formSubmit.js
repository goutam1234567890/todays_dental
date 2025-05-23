export const sendContactForm = async (data) => {
    try{
        console.log('Form data submitted:', data);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({status:200, message: 'Success (simulated)'})
            }, 1000);
        });
    } catch(error){
        console.error("Form submission error:", error)
        throw error;
    }
}