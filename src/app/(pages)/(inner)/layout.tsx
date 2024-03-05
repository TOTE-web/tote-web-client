"use client"
import SideNavbar from "@/components/shared/sideNavbar";
import TopBar from "@/components/shared/topBar";
import { InnerAppContext } from "@/context/appContext";
import { cn } from "@/lib/utils";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

const InnerAppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookies = useCookies();
  const [state, setState] = useState({ isLoggedIn: false, isSidebarOpened: true });

  const loginCookie = cookies.get('token');

  useEffect(()=> {
    setState(prev=> ({ ...prev, isLoggedIn: !!loginCookie }));
  },[loginCookie]);

  return (
    <div className="w-screen h-screen">
      <InnerAppContext.Provider value={state}>
        <TopBar className='h-[10%]' toggleSideBar={()=> setState(prev => ({ ...prev, isSidebarOpened: !prev.isSidebarOpened }))} />
        <div className="w-full h-[90%] bg-white relative">
          <SideNavbar className={`${!state.isSidebarOpened && '-translate-x-full'} absolute left-0 top-0 bottom-0 w-auto transition-all ease-linear`} />
          <div className={cn("h-full overflow-auto transition-all ease-linear", state.isSidebarOpened ? 'ml-64': '')}>
            {children}
          </div>
        </div>
      </InnerAppContext.Provider>
    </div>
  );
}

export default InnerAppLayout;
