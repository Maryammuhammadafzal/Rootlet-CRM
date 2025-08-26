import React from 'react'
import { Card, CardContent } from './ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const MeetingCard = () => {
    return (
        <Card className='bg-card shadow-none border-0'>
            <CardContent>
                <h2 className='font-medium text-xl mb-4'>Department</h2>
                <div className='flex flex-col w-full h-auto gap-4'>
                    {/* {
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
                    } */}
                </div>
            </CardContent>
        </Card>
    )
}

export default MeetingCard
