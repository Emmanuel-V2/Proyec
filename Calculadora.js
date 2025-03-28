const recetas = 
{
    Gelatina: {
        nombre: "Gelatina de Mosaico",
        ingredientes: {
            "Sobres de gelatina": 3,
            "Agua": 3,
            "Grenetina sin sabor": 10,
            "Leche condensada": 397,
            "Leche entera": 250,
            "Leche evaporada": 354,
        },
        unidades: {
            "Sobres de gelatina": "unidades",
            "Agua": "Litros",
            "Grenetina sin sabor": "gramos",
            "Leche condensada": "gramos",
            "Leche entera": "ml",
            "Leche evaporada": "ml",
        }
    },
    Panque: {
        nombre: "Panque de Naranja",
        ingredientes: {
            "Azúcar": 150,
            "Huevo": 2,
            "Aceite": 1/2,
            "Yogurt": 60,
            "Jugo de Naranja": 1/2,
            "Ralladura de Naranja": 1,
            "Harina": 160,
            "Fecula de maiz": 160,
            "Polvo para hornear": 1,
            "Azúcar glass": 100,
            "Jugo de Naranja (para el glaseado)": 1/2,
        },
        unidades: {
            "Azúcar": "gramos",
            "Huevo": "unidades",
            "Aceite": "taza",
            "Yogurt": "g",
            "Jugo de Naranja": "taza",
            "Ralladura de Naranja": "cucharadas",
            "Harina": "gramos",
            "Fecula de maiz": "gramos",
            "Polvo para hornear": "cucharaditas",
            "Azúcar glass": "gramos",
            "Jugo de Naranja (para el glaseado)": "taza",
        }
    },
    Galletas: {
        nombre: "Galletas con chispas de chocolate",
        ingredientes: {
            "Mantequilla": 1/2,
            "Azúcar (morena o parda)": 1/2,
            "Azúcar blanca": 1/3,
            "Sal":  1/2,
            "Huevo": 1,
            "Maicena": 2,
            "Polvo para hornear": 1/2,
            "Bicarbonato": 1/2,
            "Harina": 2,
            "Chispas de chocolate": 1/2,
        },
        unidades: {
            "Mantequilla": "taza",
            "Azúcar (morena o parda)": "taza",
            "Azúcar blanca": "taza",
            "Sal": "cucharadita",
            "Huevo": "unidades",
            "Maicena": "cucharadas",
            "Polvo para hornear": "cucharaditas",
            "Bicarbonato": "cucharaditas",
            "Harina": "tazas",
            "Chispas de chocolate": "taza",
        }
    },
    Cupcakes: {
        nombre: "Cupcakes",
        ingredientes: {
            "Harina de chocolate": 432,
            "Huevos": 3,
            "Aceite": 118,
            "Agua":240,
            "Chantilli": 500,
            "Colorante vegetal": 5,
            "Betún preparado": 500,
            "Chispas de chocolate": 1,
        },
        unidades: {
            "Harina de chocolate": "gramos",
            "Azúcar": "gramos",
            "Huevos": "unidades",
            "Aceite": "ml",
            "Agua": "ml",
            "Chantilli": "ml",
            "Colorante vegetal": "ml",
            "Betún preparado": "gramos",
            "Chispas de chocolate": "taza",
        }
    },
    Carlota: {
        nombre: "Carlota de Limón",
        ingredientes: {
            "Galletas Marias": 57,
            "Clavel": 59,
            "Jugo de Limón": 20,
            "Lechera": 70,
        },
        unidades: {
            "Galletas Marias": "gramos",
            "Clavel": "ml",
            "Jugo de Limón": "ml",
            "Lechera": "ml",
        }
    },
};

function calcularIngredientes() {
    const recetaSeleccionada = document.getElementById('receta').value;
    const porciones = document.getElementById('porciones').value;
    const resultadoDiv = document.getElementById('resultado');

    const receta = recetas[recetaSeleccionada];
    let resultadoHTML = `<h2>Ingredientes para ${receta.nombre}</h2>`;
    resultadoHTML += `<p>Porciones: ${porciones}</p>`;
    resultadoHTML += "<ul>";

    for (let [ingrediente, cantidad] of Object.entries(receta.ingredientes)) {
        const cantidadCalculada = cantidad * porciones;
        const unidad = receta.unidades[ingrediente];
        resultadoHTML += `<li>${ingrediente}: ${cantidadCalculada} ${unidad}</li>`;
    }

    resultadoHTML += "</ul>";
    resultadoDiv.innerHTML = resultadoHTML;
}