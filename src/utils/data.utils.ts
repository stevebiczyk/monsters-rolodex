export const getData = async (url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
};