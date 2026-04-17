export const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return await res.json();
    } catch (e) {
        console.log("Error:", e);
    }
};

