export const fetchSongs = async (query) => {
    const URL = `https://api.deezer.com/search?q=${query}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data.data; // Returns an array of songs
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
};
