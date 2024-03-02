"use client"
import SideNavbar from "@/components/shared/sideNavbar";
import { InnerAppContext } from "@/context/appContext";
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
    <InnerAppContext.Provider value={state}>
      <div className="w-full h-full bg-white grid lg:grid-cols-[20%_80%] xl:grid-cols-[15%_85%]">
        <div className="relative">
          <SideNavbar className={`${!state.isSidebarOpened && '-translate-x-full'}`} />
          <span
            className="absolute right-0 top-40 cursor-pointer p-4 bg-primary text-white rounded-full"
            onClick={()=> setState(prev => ({ ...prev, isSidebarOpened: !prev.isSidebarOpened }))}>
            {state.isSidebarOpened ? '>' : '<'}
          </span>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </InnerAppContext.Provider>
  );
}

export default InnerAppLayout;
