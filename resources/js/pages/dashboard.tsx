import { CardProgress } from '@/components/card-progress';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Progress } from '@/components/ui/progress';
import AppLayout from '@/layouts/app-layout';
import { type DashboardCard, type BreadcrumbItem, type DepartmentCard } from '@/types';
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

const departmentCard: DepartmentCard[] = [
    {
        title: 'Software Team',
        employees: 12,
        icon: 'images/ios.png'
    },
    {
        title: 'Sales Executive Team',
        employees: 50,
        icon: 'images/spotify.png'
    },
    {
        title: 'Auto Trading Team',
        employees: 30,
        icon: 'images/ios.png'
    },
    {
        title: 'Eht-e-Salat',
        employees: 10,
        icon: 'images/behance.png'
    },
]

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
                                <h2 className='font-medium text-xl mb-4'>Department</h2>
                                <div className='flex flex-col w-full h-auto gap-3'>
                                    {
                                        departmentCard && departmentCard.map((dept, index) => (
                                            <div className='rounded-xl w-full bg-card h-auto p-4 flex items-center gap-5'>
                                                <div className='w-auto h-auto'>
                                                    <img src={dept.icon} alt="department-icn" />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h2 className='text-primary font-medium'>{dept.title}</h2>
                                                    <p className='text-primary/50 text-sm'>{dept.employees} employees</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
