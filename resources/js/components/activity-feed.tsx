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
            id: Date.now().toString(),
            avatar: '/images/user-avatar.png',
            type: 'leave',
            name: 'username',
            time: 'Tue Aug 26 2025 16:22:53 GMT+0500 (Pakistan Standard Time)',
            message: 'new message',
            reason: 'user Reason',
            activity: 'apply',
            depart: 'software',
            designation: 'Product Designer',
            status: 'pending',
            reply: '',
            created_at: Date.now().toString()
        },
        {
            id: Date.now().toString(),
            avatar: '/images/user-avatar.png',
            type: 'leave',
            name: 'username',
            time: 'Tue Aug 26 2025 16:22:53 GMT+0500 (Pakistan Standard Time)',
            message: 'new message',
            reason: 'user Reason',
            activity: 'apply',
            depart: 'software',
            designation: 'Product Designer',
            status: 'pending',
            reply: '',
            created_at: Date.now().toString()
        },
        {
            id: Date.now().toString(),
            avatar: '/images/user-avatar.png',
            type: 'leave',
            name: 'username',
            time: 'Tue Aug 26 2025 16:22:53 GMT+0500 (Pakistan Standard Time)',
            message: 'new message',
            reason: 'user Reason',
            activity: 'apply',
            depart: 'software',
            designation: 'Product Designer',
            status: 'pending',
            reply: '',
            created_at: Date.now().toString()
        },
    ];
    const getTime = (value: string | undefined) => {

        if (value !== undefined) {
            const time = new Date('Tue Aug 26 2025 16:22:53 GMT+0500') as any;
            const now = new Date() as any;
            const diffInMs = now - time;


            // Convert milliseconds to seconds
            const diffInSeconds = Math.floor(diffInMs / 1000);

            let formattedDiff;
            if (diffInSeconds < 60) {
                formattedDiff = `${diffInSeconds} sec${diffInSeconds !== 1 ? 's' : ''} ago`;
            } else {
                const diffInMinutes = Math.floor(diffInSeconds / 60);
                if (diffInMinutes < 60) {
                    formattedDiff = `${diffInMinutes} min${diffInMinutes !== 1 ? 's' : ''} ago`;
                } else {
                    const diffInHours = Math.floor(diffInMinutes / 60);
                    formattedDiff = `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
                }
            }
            return formattedDiff;
        } else {
            console.log('Time not given');

        }
    }



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
            <CardHeader className='w-full flex justify-between'>
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

            <CardContent className='space-y-6'>
                {activityFeeds.map((activity, i) => (
                    <div key={i} className='flex justify-between items-center h-auto w-full'>
                        {/* Left Content */}
                        <div className='flex gap-2'>
                            <img src={activity.avatar} alt={activity.name} className='w-9 h-8 rounded-full' />
                            <div className='flex flex-col justify-center gap-1'>
                                <p className='text-sm text-primary/80'> <span className='text-base font-medium text-primary capitalize'>{activity.name}</span> {activity.type === 'leave' && 'applied for the leave'} <span className='font-medium text-base text-primary'> {activity.designation} </span> </p>
                                <p className='text-[10px] text-primary/50'>{getTime(activity?.time)}</p>
                            </div>
                        </div>
                        {/* Right Button */}
                        {activity.activity === 'apply' ?
                            (
                                <Button className={`bg-[#377DFF33] text-[#377DFF] rounded-md text-sm px-4 py-1.5`}>Applying</Button>
                            ) : (
                                <Button className={`bg-[#38CB8933] text-[#38CB89] rounded-md text-sm px-4 py-1.5`}>Message</Button>
                            )
                        }
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default ActivityFeed
