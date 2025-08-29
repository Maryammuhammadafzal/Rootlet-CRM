import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ProfileSettingProp, type NavItem } from '@/types';
import { Transition } from '@headlessui/react';
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

interface SettingsLayoutProps extends PropsWithChildren, ProfileSettingProp {
    user_profile: {
        first_name: string;
        last_name: string;
        user_email: string;
        employee_id: string;
        employee_picture: string;
    };
    onSave: () => void;
 }

export default function SettingsLayout({ children, processing, recentlySuccessful, user_profile, onSave }: SettingsLayoutProps) {
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
                            <img src={user_profile?.employee_picture || "/images/user-avatar.png"} alt="User picture" width={100} height={100} className='w-full h-full rounded-full' />
                        </div>
                        {/* User Info */}
                        <div className='flex flex-col h-auto w-auto'>
                            <h2 className='admin-name text-lg font-semibold mb-1 text-primary'>{`${user_profile?.first_name} ${user_profile?.last_name}` || 'Name'}</h2>
                            <p className='admin-email text-xs text-primary/50'>{user_profile?.user_email ||'Email'}</p>
                            <p className='employee-id text-xs text-primary/50'>{user_profile?.employee_id ||'Employee ID'}</p>
                        </div>
                    </div>
                    {/* Right Button */}
                    <div className="flex items-center gap-4">
                        <Button disabled={processing} onClick={onSave}>Save Changes</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-neutral-600">Saved</p>
                        </Transition>
                    </div>
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
