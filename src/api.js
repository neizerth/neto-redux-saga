const API_URL = process.env.REACT_APP_API_URL;

export const search = async (query) => {
    const url = API_URL + '/spells?search=' + query;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}