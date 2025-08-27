import ActivityFeed from '@/components/activity-feed';
import { AttendanceChart } from '@/components/attendance-chart';
import { CardProgress } from '@/components/card-progress';
import MeetingCard from '@/components/meetings';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type DashboardCard, type BreadcrumbItem, type DepartmentCard } from '@/types';
import { Head } from '@inertiajs/react';
import { Coins, DollarSign, Rocket, TrendingUp, TrendingUpIcon, User as UserIcon } from 'lucide-react';


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
        icon: TrendingUp,
        description: 'Current employees',
        card_design: `bg-[#29AB91] dark:bg-card text-accent size-full dark:text-primary`,
        color: '#29AB91'
    },
    {
        title: 'Total Late',
        progress: 74,
        count: 5,
        icon: TrendingUp,
        description: 'Late employees ',
        card_design: `bg-[#FFA600] dark:bg-card text-accent size-full dark:text-primary`,
        color: '#FFA600'
    },
    {
        title: 'Today’s Absentees',
        progress: 74,
        count: 3,
        icon: TrendingUp,
        description: 'Absent employees',
        card_design: `bg-[#FF5630] dark:bg-card text-accent size-full dark:text-primary`,
        color: '#FF5630'
    },
    {
        title: 'Pending Leave Request',
        progress: 74,
        count: 4,
        icon: TrendingUp,
        description: 'Employee leaves',
        card_design: `bg-[#377DFF] dark:bg-card text-accent size-full dark:text-primary`,
        color: '#377DFF'
    },
];

const departmentCard: DepartmentCard[] = [
    {
        title: 'Software Team',
        employees: 12,
        icon: Rocket
    },
    {
        title: 'Sales Executive Team',
        employees: 50,
        icon: DollarSign
    },
    {
        title: 'Auto Trading Team',
        employees: 30,
        icon: TrendingUpIcon
    },
    {
        title: 'Eht-e-Salat',
        employees: 10,
        icon: Coins
    },
]

export default function Dashboard() {
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-2 lg:grid-cols-4 md:grid-cols-2 h-auto">
                    {dashboardCardData && dashboardCardData.map((item, index) => (
                        <div key={index} className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            {/* <div className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> */}
                            <Card className={item.card_design}>
                                <CardContent className='flex justify-between relative'>
                                    <div className='flex flex-col gap-2 '>
                                        <h3 className='text-sm'>{item.title}</h3>
                                        <h2 className='text-2xl font-semibold'>{item.count < 10 ? `0${item.count}` : item.count}</h2>
                                        <div className='flex items-center gap-2 2xl:mt-0 mt-5'>
                                            {item.icon && <item.icon className="w-6 h-6 bg-primary/10 p-1 rounded-full text-white my-2" />}
                                            <p className='text-sm'>14 inc</p>
                                        </div>
                                    </div>
                                    <div className='items-center flex absolute right-5 top-5'>
                                        <CardProgress />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                    ))}
                </div>
                <div className="relative h-auto flex-1 overflow-hidden rounded-xl gap-5  md:min-h-min grid lg:grid-cols-3 grid-cols-1">
                    <div className='md:col-span-2 h-fit col-span-1 bg-primary/5 rounded-xl '>
                        <AttendanceChart />
                    </div>
                    {/* Department */}
                    <div className='col-span-1 h-full bg-primary/5 rounded-xl '>
                        <Card className='bg-card shadow-none border-0'>
                            <CardContent>
                                <h2 className='font-medium text-xl mb-4'>Department</h2>
                                <div className='flex flex-col w-full h-auto gap-4'>
                                    {
                                        departmentCard && departmentCard.map((dept, index) => (
                                            <div key={index} className='rounded-xl w-full bg-primary/10 h-auto p-3 flex items-center gap-5'>
                                                <div className='w-10 h-10 flex justify-center items-center bg-accent rounded-full p-1'>
                                                    {dept.icon && <dept.icon className="w-6 h-6  my-2" />}
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

                <div className="relative h-auto flex-1 overflow-hidden rounded-xl gap-5  md:min-h-min grid lg:grid-cols-2 grid-cols-1">
                    {/* Activity Feeds */}
                    <div className='h-auto col-span-1 bg-primary/5 rounded-xl '>
                        <ActivityFeed />
                    </div>
                    {/* Meetings */}
                    <div className='col-span-1 h-auto bg-primary/5 rounded-xl '>
                        <MeetingCard />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
