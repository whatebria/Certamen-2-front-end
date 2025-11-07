const localKey = "entradas_list_data";

function createEntrada(entrada) {
    let lista = [];
    const data = localStorage.getItem(localKey);
    if (data !== null) {
        try {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) {
                lista = parsed;
            }
        } catch (e) {
            lista = [];
        }
    }
    lista.push(entrada);
    localStorage.setItem(localKey, JSON.stringify(lista));
}


function getEntradas() {
    const data = localStorage.getItem(localKey);
    if (data !== null) {
        try {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) {
                return parsed;
            }
        } catch (e) {
            // Si hay error, devolvemos lista vacía
            return [];
        }
    }

    return [];
}

const deleteAllEntradas = () => {
    localStorage.removeItem(localKey);
};

export { createEntrada, getEntradas, deleteAllEntradas };