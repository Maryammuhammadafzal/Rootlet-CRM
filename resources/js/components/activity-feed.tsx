import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@headlessui/react'
import { ActivityFeeds } from '@/types'
const ActivityFeed = () => {
    const [isChecked, setIsChecked] = useState<'all' | 'apply' | 'message'>()

    const activityFeeds: ActivityFeeds[] = [
        {
            avatar: '/images/avatar.png',
            type: 'leave',
            name: 'username',
            time: Date.now.toString(),
            message: 'new message',
            activity: 'apply',
            depart: 'software',
            position: 'Product Designer'
        },
    ]

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
                {/* Activity States Selection */}
                <div className="">
                    <Select>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="All activity" defaultValue={'All activity'} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem onClick={() => handleActiviyChecked('all')} value="all">All activity</SelectItem>
                            <SelectItem onClick={() => handleActiviyChecked('apply')} value="apply">Applying</SelectItem>
                            <SelectItem onClick={() => handleActiviyChecked('message')} value="message">Message</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>

            <CardContent className=''>
                {Array(5).map((_, i) => (
                    <div className='flex justify-between items-center h-auto w-full'>
                        {/* Left Content */}
                        <div className='flex gap-2'>

                        </div>
                        {/* Right Button */}
                        <Button></Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default ActivityFeed
