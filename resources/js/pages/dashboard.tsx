import { CardProgress } from '@/components/card-progress';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Progress } from '@/components/ui/progress';
import AppLayout from '@/layouts/app-layout';
import { type DashboardCard, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { User as UserIcon } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const dashboardCardData: DashboardCard[] = [
    {
        title: 'Total Employees',
        progress: 74,
        count: 12,
        icon: UserIcon,
        description: 'Current employees',
        color: '#29AB91'
    },
    {
        title: 'Total Late',
        progress: 74,
        count: 5,
        icon: UserIcon,
        description: 'Late employees ',
        color: '#FFA600'
    },
    {
        title: 'Today’s Absentees',
        progress: 74,
        count: 3,
        icon: UserIcon,
        description: 'Absent employees',
        color: '#FF5630'
    },
    {
        title: 'Pending Leave Request',
        progress: 74,
        count: 4,
        icon: UserIcon,
        description: 'Employee leaves',
        color: '#377DFF'
    },
];



export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    {dashboardCardData && dashboardCardData.map((item, index) => (
                        <div key={index} className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            {/* <div className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                            <Card className={`bg-[${item.color}] text-accent size-full dark:text-primary`}>
                                <CardContent className='flex gap-2 justify-between'>
                                    <div className='flex flex-col gap-3'>
                                        <h3 className='text-sm'>{item.title}</h3>
                                        <h2 className='text-2xl font-semibold'>{item.count < 10 ? `0${item.count}` : item.count}</h2>
                                        <div className='flex items-center gap-2'>
                                            {item.icon && <item.icon className="w-6 h-6 text-white my-2" />}
                                            <p className='text-sm'>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className='items-center flex'>
                                        <CardProgress />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                    ))}
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl gap-5  md:min-h-min dark:border-sidebar-border grid md:grid-cols-3">
                    <div className='col-span-2 bg-primary/5 rounded-xl size-full'>

                    </div>
                    {/* Department */}
                    <div className='col-span-1 bg-primary/5 rounded-xl size-full'>
                        <Card className='bg-transparent shadow-none border-0'>
                            <CardContent>
                                <h2 className='font-medium text-xl'>Department</h2>
                                <div className=''></div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
