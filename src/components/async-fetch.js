export default async function asyncFetch(url) {

    const response = await fetch(url);
    return response;
    
}