const productos = [
    { id: "torpedoAlpaca", nombre: "Torpedo de alpaca cincelado", imagen: "/assets/Torpedo de alpaca cincelado.jpg", precio: 26000, categoria: "torpedos", material: "calabaza",
        cuotas: "3 cuotas sin interés de $8.500",
        specs: [{ label: "Material", valor: "Calabaza, Cuero, Alpaca" }, { label: "Virola", valor: "Alpaca maciza cincelada" }] },

    { id: "torpedoAlgarrobo", nombre: "Torpedo de algarrobo", imagen: "/assets/Torpedo de algarrobo.jpg", precio: 22000, categoria: "torpedos", material: null,
        cuotas: "3 cuotas sin interés de $7.300",
        specs: [{ label: "Material", valor: "Algarrobo, alpaca" }, { label: "Virola", valor: "Alpaca maciza cincelada" }] },

    { id: "torpedoPremium", nombre: "Torpedo Premium", imagen: "/assets/Torpedo Premium.jpg", precio: 37000, categoria: "torpedos", material: "calabaza",
        cuotas: "3 cuotas sin interés de $12.300",
        specs: [{ label: "Material", valor: "Calabaza, Cuero, alpaca, bronce" }, { label: "Virola", valor: "Alpaca maciza cincelada" }] },

    { id: "imperialAlgarrobo", nombre: "Imperial de algarrobo", imagen: "/assets/Imperial de algarrobo.jpg", precio: 21000, categoria: "imperiales", material: "algarrobo",
        cuotas: "3 cuotas sin interés de $7.000",
        specs: [{ label: "Material", valor: "Algarrobo, Alpaca" }, { label: "Virola", valor: "Alpaca maciza cincelada" }] },

    { id: "imperialLiso", nombre: "Imperial liso", imagen: "/assets/Imperial liso.jpg", precio: 26000, categoria: "imperiales", material: "calabaza",
        cuotas: "3 cuotas sin interés de $8.500",
        specs: [{ label: "Material", valor: "Calabaza, Cuero, Alpaca" }, { label: "Virola", valor: "Alpaca maciza cincelada" }] },

    { id: "imperialLabrado", nombre: "Imperial labrado base de alpaca", imagen: "/assets/Imperial labrado base de alpaca.jpg", precio: 30000, categoria: "imperiales", material: "calabaza",
        cuotas: "3 cuotas sin interés de $10.000",
        specs: [{ label: "Material", valor: "Calabaza, Cuero, Alpaca, Bronce" }, { label: "Virola", valor: "Alpaca maciza cincelada" }] },

    { id: "camioneroCalabaza", nombre: "Camionero de calabaza", imagen: "/assets/Camionero de calabaza.jpg", precio: 20000, categoria: "camioneros", material: "calabaza",
        cuotas: "3 cuotas sin interés de $6.500",
        specs: [{ label: "Material", valor: "Calabaza, Cuero, Alpaca" }, { label: "Virola", valor: "Alpaca maciza" }] },

    { id: "camioneroAlgarrobo", nombre: "Camionero de algarrobo", imagen: "/assets/Camionero de algarrobo.jpg", precio: 20000, categoria: "camioneros", material: "algarrobo",
        cuotas: "3 cuotas sin interés de $6.500",
        specs: [{ label: "Material", valor: "Algarrobo, Alpaca" }, { label: "Virola", valor: "Alpaca maciza" }] },

    { id: "bombillonPremiun", nombre: "Bombillon premium", imagen: "/assets/Bombillon premium.jpg", precio: 25000, categoria: "bombillas", material: null,
        cuotas: "3 cuotas sin interés de $8.500",
        specs: [{ label: "Material", valor: "Alpaca y Bronce" }] },

    { id: "bombillaAcero", nombre: "Bombilla de acero inoxidable", imagen: "/assets/Bombilla de acero inoxidable.jpg", precio: 6000, categoria: "bombillas", material: null,
        cuotas: "3 cuotas sin interés de $2.000",
        specs: [{ label: "Material", valor: "Acero inoxidable" }] },

    { id: "canastaRigida", nombre: "Canasta rígida cuerina reforzada", imagen: "/assets/Canasta rigida cuerina reforzada.jpg", precio: 20000, categoria: "termosYCanastas", material: null,
        cuotas: "3 cuotas sin interés de $8.300",
        specs: [{ label: "Material", valor: "Cuero ecológico" }] },

    { id: "termoMediaManija", nombre: "Termo media manija", imagen: "/assets/Termo media manija.jpg", precio: 20000, categoria: "termosYCanastas", material: null,
        cuotas: "3 cuotas sin interés de $6.500",
        specs: [{ label: "Material", valor: "Acero Inoxidable" }] },

    { id: "canastaMediana", nombre: "Canasta mediana", imagen: "/assets/Canasta.jpeg", precio: 25000, categoria: "termosYCanastas", material: null,
        cuotas: "3 cuotas sin interés de $8.300",
        specs: [{ label: "Material", valor: "Totora" }] },

    { id: "maxiCanasta", nombre: "Maxi Canasta", imagen: "/assets/MaxiCanasta.jpg", precio: 20000, categoria: "termosYCanastas", material: null,
        cuotas: "3 cuotas sin interés de $6.500",
        specs: [{ label: "Material", valor: "Totora" }] },

    { id: "Porta", nombre: "Porta multi objetos", imagen: "/assets/PortaMultiObjetos.jpg", precio: 10000, categoria: "crochet", material: null,
        cuotas: "3 cuotas sin interés de $3.333",
        specs: [{ label: "Material", valor: "Totora" }] },

    { id: "bolso", nombre: "Bolso", imagen: "/assets/bolsoMarron.jpeg", precio: 30000, categoria: "crochet", material: null,
        cuotas: "3 cuotas sin interés de $10.000",
        specs: [{ label: "Material", valor: "Totora" }] },

    { id: "miniBag", nombre: "Mini Bag", imagen: "/assets/Seminario.jpeg", precio: 25000, categoria: "crochet", material: null,
        cuotas: "3 cuotas sin interés de $8.300",
        specs: [{ label: "Material", valor: "Totora" }] },

    { id: "carteraSobre", nombre: "Cartera Sobre", imagen: "/assets/bolsoFiesta.jpg", precio: 30000, categoria: "crochet", material: null,
        cuotas: "3 cuotas sin interés de $10.000",
        specs: [{ label: "Material", valor: "Totora" }] },
];

export default productos;