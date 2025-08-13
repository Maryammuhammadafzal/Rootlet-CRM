import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    bgImage?: string;
    image?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex h-screen flex-col gap-6 bg-background">
            <div className="w-full flex h-full md:flex-row flex-col">
                <div className='w-1/2 pl-24 h-full pr-10 py-15'>
                    <div className="flex flex-col bg-amber-50 h-full gap-8 justify-between">
                        {/* Logo */}
                        <div className="flex flex-col h-fit gap-4">
                            <Link href={route('home')} className="flex flex-col gap-2 font-medium">
                                <div className="mb-1 flex rounded-md">
                                    <AppLogo />
                                </div>
                                <span className="sr-only">{title}</span>
                            </Link>
                        </div>

                        {/* Content */}
                        <div className='flex flex-col h-auto w-full'>
                            <div className="mb-10">
                                <h1 className="text-3xl font-bold text-">{title}</h1>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>

                <div className='image flex w-1/2'>
                </div>
            </div>
        </div>
    );
}
