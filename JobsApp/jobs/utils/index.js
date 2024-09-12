//NAO FUNCIONOU

export const checkImageURL = async (url) => {
    if (!url)  return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$');
        return pattern.test(url);
    }
       
};