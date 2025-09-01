import React from 'react'

import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Employees',
        href: '/employees',
    },
];

export default function Employees () {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Employees" />
            
            <div>
                
            </div>
        </AppLayout>
    )
}

