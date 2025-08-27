import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Input } from './ui/input';
import { Bell, Moon, Search, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Image } from '@radix-ui/react-avatar';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const [isChecked, setIsChecked] = useState(false);
    const userImage = null;

    const handleTheme = () => {
        if (!isChecked) {
            setIsChecked(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme' , 'dark');
        } else {
            setIsChecked(false);
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
        }

        console.log(isChecked , localStorage.getItem('theme'));
        
    }
    return (
        <header className="flex h-20 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1 text-lg" />
                <Breadcrumbs breadcrumbs={breadcrumbs}  />
                {/* <h1 className='text-primary text-2xl font-semibold'>Dashboard</h1> */}
            </div>
            <div className='flex gap-6 items-center'>
                <div className="search w-[250px] flex items-center relative h-fit mr-4">
                    <Input type='search' placeholder='Search by anything' className='h-10 border border-accent' />
                    <div className='text-white bg-foreground w-10 h-10 flex justify-center items-center rounded-tr-lg rounded-br-lg absolute right-0 top-0'>
                        <Search  />
                    </div>
                </div>

                <div className='flex gap-6 items-center'>
                    {/* Notification */}
                    <div className='relative text-primary w-fit h-fit'>
                        <Bell size={30} />
                        <div className='w-4 h-4 bg-red-600 text-white absolute -top-1 right-0 rounded-full flex justify-center items-center'>
                            <p className='notification text-[10px] text-center'>4</p>
                        </div>
                    </div>

                    {/* Theme Icon */}
                    <div onClick={handleTheme} className='items-center text-primary flex'>
                        {isChecked ? (<Moon size={30} />) : (<Sun size={30} />)}
                    </div>

                    {/* User Profile */}
                    <div className='w-10 h-10 flex justify-center rounded-full items-center'>
                        {
                            userImage !== null ? (
                                <img src={"user-image"} alt='user-profile-image' className='w-full h-full rounded-full object-cover' />
                            ) : (
                                <img src="images/user-avatar.png" alt='placeholder-image' className='w-full h-full rounded-full object-cover' />
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}
