import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <>
            <SidebarGroup className="px-3 py-0">
                <SidebarGroupLabel className='text-base font-semibold text-primary uppercase'>Menu</SidebarGroupLabel>
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
            <SidebarGroup className="px-3 pb-3">
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
            </SidebarGroup>

        </>
    );
}
