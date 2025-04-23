
import { Link } from "react-router-dom"; // Importação do Link
import { ChevronDown, X, Menu } from "lucide-react"; // Importação de ícones
import logoEquatorial from "../../assets/logo-equatorial.svg"
import { menuOptions } from "./menuOptions"; // Importação das opções do menu

interface SideBarProps {
    openSideBar: boolean;
    openSubmenus: number | null;
    toggleSideBar: () => void;
    toggleSubmenu: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ openSideBar, openSubmenus, toggleSideBar, toggleSubmenu }) => {
   

    return (
        <div
            className={`
                absolute
                flex flex-col gap-4
                bg-white p-4
                top-0 left-0 z-20
                duration-300
                transition-all ease-in-out
                h-screen
                ${openSideBar ? "w-72" : "translate-x-[-100%]"}

                ${openSideBar ? "md:w-w-72" : "md:w-16 md:translate-x-[0]"}
                
                md:h-full
                md:flex
                md:drounded-lg shadow-md
                md:relative
                md:rounded-lg
                md:shadow-lg
            `
            }     
        
        >
        <button 
            className={`md:hidden ${openSideBar ? "flex" : "hidden"} absolute top-20 -right-8 bg-gray-500 text-white p-2 rounded-lg cursor-pointer`} 
            onClick={toggleSideBar}
        >
            {openSideBar ? <X /> : <Menu />}
        </button>
        
            
        <span className="flex w-full justify-center mt-3"><img src={logoEquatorial} alt="logo equatorial" className={`duration-300 ${openSideBar ? "w-60": "w-[0px]"}`}/></span>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-4"></div>
        <nav>

            
            <ul className="flex flex-col gap-3">
                {menuOptions.map((menu, index) => (
                    <li key={index} className="text">
                        <div
                            className="flex items-center gap-2"
                            onClick={() => toggleSubmenu(index)} // Alterna o submenu ao clicar
                        >

                            {menu.submenu.length > 0 ?
                                
                            <div className="flex items-center  gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2 flex-1 w-full">
                  
                                <span className={`duration-300 ${openSideBar ? "text-1xl" : "text-[0px]"}`} >{menu.label}</span>
                                <span><ChevronDown color="gray" className={`duration-300 ${openSubmenus === index ? "rotate-180" : null} ${openSideBar ? "flex": "hidden"}`} /></span> 
                            </div>
                            :   <Link to={menu.path} className=" flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2 flex-1">
                          
                                    <span className={` duration-300 ${openSideBar ? "text-1xl" : "text-[0px]"}`} >{menu.label}</span>
                                </Link>
                            }   
                            
                        </div>
                        {menu.submenu.length > 0 && ( // Verifica se o submenu está aberto
                            <ul className={`
                                pl-9 flex flex-col gap-2
                                overflow-hidden transition-all duration-500 ease-in-out
                                
                                ${openSubmenus === index ? "max-h-60" : "max-h-0"}
                            `}
                            >
                                {menu.submenu.map((sub, subIndex) => (
                                    <li key={subIndex} className="">
                                        <Link to={sub.path} className={`p-1 w-full hover:bg-gray-200 rounded-md flex`}>
                                            <span className={`duration-300 ${openSubmenus === index ? "text-1xl": "text-[0px]"}`}>{sub.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    );
};

export default SideBar;