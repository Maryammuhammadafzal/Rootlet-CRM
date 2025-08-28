

import React from 'react'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import AttendanceCard from '@/components/attendance-card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Attendance',
        href: '/attendance',
    },
];

const Attendance = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Attendance" />
            <div className="relative h-auto flex-1 overflow-hidden rounded-xl gap-5 p-6 md:min-h-min grid grid-cols-1">
                {/* Activity Feeds */}
                <div className='h-fit col-span-1 bg-primary/5 rounded-xl'>
                    <AttendanceCard />
                </div>
            </div>
        </AppLayout>
    )
}

export default Attendance
