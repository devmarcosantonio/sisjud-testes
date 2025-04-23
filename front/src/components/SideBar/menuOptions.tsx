


export const menuOptions = [
    {
        label: "DashBoard",
        role: "user",
        path: "/dashboard", // Caminho da rota
        submenu: [],
    },
    {
        label: "Cadastros",
        role: "user",
        path: "/cadastros",
        submenu: [
            { label: "Processos Novos", role: "user", path: "/cadastros/processos-novos" },
            { label: "Leitura", role: "user", path: "/cadastros/leitura-documentos" },
            { label: "Anál. Proc. Novos", role: "user", path: "/cadastros/analise-processos-novos" },
            { label: "Anál. Proc. Encerrados", role: "user", path: "/cadastros/analise-processos-encerrados" },
            { label: "Auditoria", role: "user", path: "/cadastros/auditoria", }
        ],
    },
    {
        label: "Sistema",
        role: "user",
        path: "/sistema", // Caminho da rota
        submenu: [],
    },
];