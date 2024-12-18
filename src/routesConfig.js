import Minecraft from "./views/Pages/Minecraft/Minecraft";
import Rust from "./views/Pages/Rust/Rust";
import Arma3 from "./views/Pages/Arma3/Arma3";
import FiveM from "./views/Pages/FiveM/FiveM";
import Maintenance from "./views/Pages/Maintenance/Maintenance";

const routesConfig = [
    { path: "/minecraft", label: "Minecraft", component: Minecraft },
    { path: "/rust", label: "Rust", component: Rust },
    { path: "/arma-3", label: "Arma 3", component: Arma3 },
    { path: "/fivem", label: "FiveM", component: FiveM },
    { path: "/maintenance", label: "Maintenance", component: Maintenance },
];

export default routesConfig;