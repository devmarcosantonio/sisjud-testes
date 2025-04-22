import {SquareChartGantt, FileStack, LayoutDashboard} from "lucide-react"; // Importação de ícones


export const menuOptions = [
    {
        label: "DashBoard",
        role: "user",
        icon: <LayoutDashboard color="blue" width={'20px'} />, // Ícone adicionado
        path: "/dashboard", // Caminho da rota
        submenu: [],
    },
    {
        label: "Cadastros",
        role: "user",
        icon: < FileStack  color="blue" width={'20px'} />, // Ícone adicionado
        path: "/cadastros",
        submenu: [
            { label: "Processos Novos", role: "user", path: "/cadastros/processos-novos" },
            { label: "Leitura", role: "user", path: "/cadastros/leitura-documentos" },
            { label: "Anál. Proc. Novos", role: "user", path: "/cadastros/analise-processos-novos" },
            { label: "Anál. Proc. Encerrados", role: "user", path: "/cadastros/analise-processos-encerrados" },
        ],
    },
   
    {label: "Perdas", role: "user", icon: <SquareChartGantt color="purple" width={'20px'} />, path: "/relatorio", submenu: []},
];