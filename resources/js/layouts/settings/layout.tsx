import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

const sidebarNavItems: NavItem[] = [
    {
        navName: '',
        navItems: [
            {
                title: 'Profile Information',
                href: '/settings/profile',
                icon: null,

            },
        ]
    },
    {
        navName: '',
        navItems: [
            {
                title: 'Setting',
                href: '/settings/setting',
                icon: null,

            },
        ]
    },
    {
        navName: '',
        navItems: [
            {
                title: 'Notification',
                href: '/settings/notification',
                icon: null,

            },
        ]
    },
    {
        navName: '',
        navItems: [
            {
                title: 'Security',
                href: '/settings/security',
                icon: null,

            },
        ]
    }
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <div className="m-6 rounded-3xl p-6 grid grid-cols-1 bg-card min-h-screen">
            {/* <Heading title="Settings" description="Manage your profile and account settings" /> */}
            <div className='xl:w-[70%] lg:w-[80%] w-[95%] h-auto mx-auto p-4 flex flex-col gap-6'>

                {/* head */}
                <div className='w-full flex justify-between items-center h-auto gap-3'>
                    {/* Left profile */}
                    <div className='flex gap-3 h-auto w-auto items-center'>
                        {/* User Picture */}
                        <div className="user-picture w-[110px] h-[110px] flex justify-center items-center">
                            <img src="/images/user-avatar.png" alt="User picture" width={100} height={100} className='w-full h-full rounded-full' />
                        </div>
                        {/* User Info */}
                        <div className='flex flex-col h-auto w-auto'>
                            <h2 className='admin-name text-lg font-semibold mb-1 text-primary'>Name</h2>
                            <p className='admin-email text-xs text-primary/50'>Email</p>
                            <p className='employee-id text-xs text-primary/50'>Employee ID</p>
                        </div>
                    </div>
                    {/* Right Button */}
                    <Button className='save-profile'>Save Changes</Button>
                </div>

                <div className="flex w-full flex-col gap-6">

                {/* Navigation */}
                    <aside className="w-full bg-foreground/15 rounded-xl p-1">
                        <nav className="grid grid-cols-4  w-full justify-between rounded-2xl space-x-0 ">
                            {sidebarNavItems.map((navItem, index) => (
                                <div key={index} className='h-[40px] cols-span-1 flex justify-center items-center '>
                                    {navItem.navName}
                                    {navItem?.navItems?.map((item, index) => (
                                        <Button
                                            key={`${item.href}-${index}`}
                                            size="sm"
                                            variant="ghost"
                                            asChild
                                            className={cn('w-full h-full hover:bg-foreground hover:text-secondary active:bg-foreground active:text-secondary justify-center px-8 py-4', {
                                                'bg-foreground text-secondary': currentPath === item.href,
                                            })}
                                        >
                                            <Link href={item.href} prefetch>
                                                {item.title}
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            ))}
                        </nav>
                    </aside>

                    <Separator className="my-6 md:hidden" />

                    <div className="w-full">
                        <section className="w-full space-y-12">{children}</section>
                    </div>
                </div>
            </div>
        </div>
    );
}
