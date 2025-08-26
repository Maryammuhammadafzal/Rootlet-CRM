import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    console.log(items)
    return (
        <>
            {
                items && items.map((item, index) => (
                    <SidebarGroup className="py-0 dark:bg-accent">
                        <SidebarGroupLabel className='text-base font-semibold text-primary uppercase'>{item.navName}</SidebarGroupLabel>
                        <SidebarMenu className='pl-3'>
                            {item.navItems && item.navItems.map((navItem) => (
                                <SidebarMenuItem key={navItem.title}>
                                    <SidebarMenuButton asChild isActive={page.url.startsWith(navItem.href)} tooltip={{ children: navItem.title }} className='bg-transparent hover:bg-foreground active:bg-foreground text-primary/50 hover:text-secondary active:text-secondary gap-3 dark:active:bg-foreground dark:text-primary'>
                                        <Link href={navItem.href} prefetch >
                                            {navItem.icon && <navItem.icon />}
                                            <span className='text-sm'>{navItem.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                ))
            }

            {/* <SidebarGroup className="px-3 pb-3">
                <SidebarGroupLabel className='text-base font-semibold text-primary uppercase'>Organization</SidebarGroupLabel>
                <SidebarMenu className='pl-3'>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={page.url.startsWith(item.href)} tooltip={{ children: item.title }} className='bg-transparent hover:bg-foreground active:bg-foreground text-primary/50 hover:text-white active:text-white gap-3'>
                                <Link href={item.href} prefetch >
                                    {item.icon && <item.icon />}
                                    <span className='text-sm'>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup className="px-3 py-0">
                <SidebarGroupLabel className='text-base font-semibold text-primary uppercase'>Recruitment</SidebarGroupLabel>
                <SidebarMenu className='pl-3'>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={page.url.startsWith(item.href)} tooltip={{ children: item.title }} className='bg-transparent hover:bg-foreground active:bg-foreground text-primary/50 hover:text-white active:text-white gap-3'>
                                <Link href={item.href} prefetch >
                                    {item.icon && <item.icon />}
                                    <span className='text-sm'>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup> */}

        </>
    );
}
