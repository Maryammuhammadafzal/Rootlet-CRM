
import AuthLayout from '@/layouts/auth-layout'
import React from 'react'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const Attendance = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Messages" />
        </AuthLayout>
    )
}

export default Attendance
