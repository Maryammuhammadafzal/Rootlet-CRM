import React, { useState } from 'react'
import { Card, CardHeader } from './ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const ActivityFeed = () => {
    const [isChecked, setIsChecked] = useState<'all' | 'apply' | 'message'>()

    const handleActiviyChecked = (value: string) => {

        switch (value) {
            case 'all':
                return setIsChecked(value);
            case 'apply':
                return setIsChecked(value);
            case 'message':
                setIsChecked(value);
            default:
                return setIsChecked('all')
        }
    }
    return (
        <Card className='bg-transparent shadow-none border-0'>
            <CardHeader className='w-ful flex justify-between'>
                <h2 className='font-medium text-xl mb-4'>Activity Feeds</h2>
                {/* Mothly Selection */}
                <div className="">
                    <Select>
                        <SelectTrigger className="w-[90px]">
                            <SelectValue placeholder="Select" defaultValue={'Days'} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem onClick={() => handleActiviyChecked('all')} value="all">All activity</SelectItem>
                            <SelectItem onClick={() => handleActiviyChecked('apply')} value="apply">Applying</SelectItem>
                            <SelectItem onClick={() => handleActiviyChecked('message')} value="message">Message</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
        </Card>
    )
}

export default ActivityFeed
