import React, { useState } from 'react'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const AttendanceCard = () => {
    const [filterEmployeeName, setFilterEmployeeName] = useState()
    const [employeeDepartment, setEmployeeDepartment] = useState<'all' | 'software' | 'sales' | 'auto-trade' | 'eht-e-salat'>('software')
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            {/* Filter */}
            <div className='w-full grid lg:px-4 lg:grid-cols-4 md:grid-cols-2 gap-4'>
                {/* Filter by Name */}
                <Input name='employee-name' id='employee-name' placeholder='Employee Name' onChange={()=> setFilterEmployeeName()} />
                {/* Filter by Id */}
                <Input name='employee-id' id='employee-id' placeholder='Employee ID' />
                {/* Filter bu Department */}
                <div className="">
                    <Select>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="All activity" defaultValue={'All activity'} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem onClick={() => setEmployeeDepartment('all')} value="all">Employee Department</SelectItem>
                            <SelectItem onClick={() => setEmployeeDepartment('software')} value="software">Software Team</SelectItem>
                            <SelectItem onClick={() => setEmployeeDepartment('sales')} value="sales">Sales Executive</SelectItem>
                            <SelectItem onClick={() => setEmployeeDepartment('auto-trade')} value="auto-trade">Auto Trade</SelectItem>
                            <SelectItem onClick={() => setEmployeeDepartment('eht-e-salat')} value="eht-e-salat">Eht-e-Salat</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default AttendanceCard
