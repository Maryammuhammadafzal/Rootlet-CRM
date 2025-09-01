import React, { useState } from 'react'

import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AddEmployee from '@/components/add-employee';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Employees',
        href: '/employees',
    },
];

export default function Employees() {
    const [departments, setDepartments] = useState<string | 'Employee Department'>('Employee Department');
    const [openAddEmployee, setOpenAddEmployee] = useState<boolean>(false);

    const allDepartments = [
        'Employee Departments',
        'Software Department',
        'Du & Eht-e-Salat Department',
        'Auto Trading Department',
        'Marketing Department',
        'Sales Department',
        'HR Department',
    ];

    const handleDepartment = (department: string) => {
        setDepartments(department);
    };

    const addEmployee = () => {
        setOpenAddEmployee(true);
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Employees" />
            {/* Employee Page */}
            <div className="relative h-auto flex-1 overflow-hidden rounded-xl gap-5 p-6 md:min-h-min grid grid-cols-1">
                {openAddEmployee ? (<AddEmployee />) : (
                    <div className='w-full h-auto flex flex-col gap-5 lg:px-5'>
                        {/* Filters */}
                        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full h-auto'>
                            <Input type='text' id='employee_name' name="employee_name" placeholder='Employee Name' />
                            <Input type='text' id='employee_id' name="employee_id" placeholder='Employee ID' />
                            <div className="w-full">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="All activity" defaultValue={'All activity'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {allDepartments && allDepartments.map((depart, index) => (
                                            <SelectItem key={index} onClick={() => handleDepartment(depart)} value={departments} >{depart}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='w-full flex justify-end'>
                                <Button onClick={addEmployee}>
                                    <Plus /> Add Employee
                                </Button>
                            </div>
                        </div>

                        {/* Employees Data */}
                    </div>
                )}

            </div>
        </AppLayout>
    )
}

