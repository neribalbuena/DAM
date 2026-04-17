import { fetchData } from "./ap2.js";
const filtrarYMostrar = async () => {
    const data = await fetchData();
    if (data) {
        const filtro = data.map(u => ({ nombre: u.name, email: u.email }));
        console.log("datos filtrados");
        console.table(filtro);
    }
};
filtrarYMostrar();

