import Blog from "./intefaces";


const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
};

const setLocalStorage = (key: string, value: any) => {
    const existingValues = getLocalStorage(key);
    existingValues.push(value);
    localStorage.setItem(key, JSON.stringify(existingValues));
}


const findLocalStorage = (key: string, id: string) => {
    const existingValues = getLocalStorage(key);
    const blog = existingValues.find((blog: Blog) => blog.id === id);
    return blog ? blog : {}

}

export { getLocalStorage, setLocalStorage, findLocalStorage };