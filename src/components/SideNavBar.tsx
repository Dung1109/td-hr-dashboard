"use client";

import {useState} from 'react';
import {Nav} from "@/components/ui/nav";
import {ChevronRight, LayoutDashboard, Settings, ShoppingCart, UserRound,} from "lucide-react";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {useWindowWidth} from "@react-hook/window-size";

type Props = {}

export default function SideNavbar({}: Props) {

    const [isCollapsed, setIsCollapsed] = useState(false)

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    const handleCollapse = () => {
        setIsCollapsed(collapsed => !collapsed)
    }

    return (
        <TooltipProvider>
            <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
                {!mobileWidth &&
                    <div className="absolute right-[-20px] top-7">
                        <Button variant="secondary" className="rounded-full p-2" onClick={handleCollapse}>
                            <ChevronRight/>
                        </Button>
                    </div>
                }
                <Nav
                    isCollapsed={mobileWidth ? true : isCollapsed}
                    links={[
                        {
                            title: "Dashboard",
                            href: "/",
                            icon: LayoutDashboard,
                            variant: "default",
                        },
                        {
                            title: "Users",
                            href: "/users",
                            icon: UserRound,
                            variant: "ghost",
                        },
                        {
                            title: "Orders",
                            href: "/orders",
                            icon: ShoppingCart,
                            variant: "ghost",
                        },
                        {
                            title: "Settings",
                            href: "/settings",
                            icon: Settings,
                            variant: "ghost",
                        },


                    ]}
                />
            </div>
        </TooltipProvider>
    );
}
