import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import { CircleUserRound } from "lucide-react";
import React from "react";

const Layout: React.FC = () => {

    const [openSubmenus, setOpenSubmenus] = React.useState<number | null>(null); // Estado para controlar o submenu aberto
    
    const [ openSideBar, setOpenSideBar ] = React.useState(false); // Estado para controlar a visibilidade da sidebar

    function toggleSideBar() {
        if(openSubmenus !== null) {
            setOpenSubmenus(null); // Fecha o submenu se estiver aberto
        }

        
        setOpenSideBar(!openSideBar);
    }

    const toggleSubmenu = (index: number) => {

        if (openSideBar === false) {
            setOpenSideBar(true); // Abre a sidebar se estiver fechada  
        }
        setOpenSubmenus(openSubmenus === index ? null : index); // Abre/fecha o submenu
    };

    const style_container = 'flex justify-end w-full h-80 p-3 bg-[#07329E] absolute top-0 left-0 z-[-1]';
    
    return (
        <>
            {/* Primeira div ajustada para ficar atrás */}
            <div className={style_container}>
                    <section className='flex gap-1 text-white'>
                        <span><CircleUserRound /></span>
                        <h1>Raiza</h1>
                    </section>
                </div>

                <div 
                    className=" 
                                grid
                                grid-cols-1
                                w-full h-screen
                                md:grid-cols-[auto_1fr]
                               /* max-w-w[1440px] */
                                md:p-8 gap-8 m-auto">

                    <SideBar toggleSideBar={toggleSideBar} toggleSubmenu={toggleSubmenu} openSideBar={openSideBar} openSubmenus={openSubmenus}/>

                  
                    <main className="w-full rounded-lg z-20">
                        <Outlet />
                    </main>
                    </div>
            </>

        
    )
};

export default Layout;