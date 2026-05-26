// Configuración de Datos Limpios para Finca La Leonora

const FARM_NAME = "La Leonora";

// Valores iniciales de autocompletado (sugerencias básicas)
const SUGGESTED_CULTIVOS = ["Café", "Cacao", "Aguacate", "Maíz", "Cítricos", "Plátano"];
const SUGGESTED_LABORES = [
  "Fertilización Foliar",
  "Fertilización Suelo/Piso",
  "Herbicida",
  "Control de Plagas",
  "Riego",
  "Poda",
  "Enmienda Suelo",
  "Cosecha",
  "Monitoreo"
];
const SUGGESTED_PERSONAL = ["Operario Principal", "Agrónomo"];
const SUGGESTED_PRODUCTOS = [
  { id: "prod-def-1", nombre: "Fertilizante Foliar Líquido", tipo: "Fertilización Foliar" },
  { id: "prod-def-2", nombre: "Abono Orgánico (Compost)", tipo: "Fertilización Suelo/Piso" },
  { id: "prod-def-3", nombre: "Fungicida Preventivo", tipo: "Control de Plagas" },
  { id: "prod-def-4", nombre: "Herbicida Selectivo", tipo: "Herbicida" }
];

function initLocalStorageData() {
  const currentFarm = localStorage.getItem("agri_farm_name");

  // Si es la primera ejecución o cambió el nombre de la finca, reiniciamos a limpio para La Leonora
  if (currentFarm !== FARM_NAME) {
    localStorage.clear();
    localStorage.setItem("agri_farm_name", FARM_NAME);
    
    // Inicializar colecciones vacías de usuario
    localStorage.setItem("agri_lotes", JSON.stringify([]));
    localStorage.setItem("agri_actividades", JSON.stringify([]));
    localStorage.setItem("agri_estudios_suelo", JSON.stringify([]));
    localStorage.setItem("agri_dosificaciones_historicas", JSON.stringify([]));
    
    // Inicializar listas de sugerencias del sistema
    localStorage.setItem("agri_sug_cultivos", JSON.stringify(SUGGESTED_CULTIVOS));
    localStorage.setItem("agri_sug_labores", JSON.stringify(SUGGESTED_LABORES));
    localStorage.setItem("agri_sug_personal", JSON.stringify(SUGGESTED_PERSONAL));
    localStorage.setItem("agri_sug_productos", JSON.stringify(SUGGESTED_PRODUCTOS));
    
    // Configuración climática por defecto
    localStorage.setItem("agri_clima", JSON.stringify({
      temporada: "sequia",
      temperaturaPromedio: 28,
      humedadPromedio: 60
    }));
  }
}
