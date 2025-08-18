import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, BriefcaseBusiness, CalendarDays, ClipboardList, Fingerprint, Folder, LayoutGrid, MessageSquareText, Settings2, UsersRound } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        navName: 'Menu',
        navItems: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: LayoutGrid,
            },
            {
                title: 'Message',
                href: '/message',
                icon: MessageSquareText,
            },
            {
                title: 'Calendar',
                href: '/calendar',
                icon: CalendarDays,
            },
        ]
    },
    {
        navName: 'Organization',
        navItems: [
            {
                title: 'Employees',
                href: '/employees',
                icon: UsersRound,
            },
            {
                title: 'attendance',
                href: '/attendance',
                icon: Fingerprint,
            },
            {
                title: 'report',
                href: '/report',
                icon: ClipboardList,
            },
            {
                title: 'settings',
                href: '/settings',
                icon: Settings2,
            },
        ]
    },
    {
        navName: 'Recruitment',
        navItems: [
            {
                title: 'jobs',
                href: '/jobs',
                icon: BriefcaseBusiness,
            },
            {
                title: 'candidates',
                href: '/candidates',
                icon: UsersRound,
            },
            {
                title: 'my-referrals',
                href: '/my referrals',
                icon: CalendarDays,
            },
            {
                title: 'career-sites',
                href: '/career sites',
                icon: CalendarDays,
            },
        ]
    }
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader className='mb-14'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch className='w-[200px] p-4 h-[80px]'>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            {/* <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter> */}
        </Sidebar>
    );
}
