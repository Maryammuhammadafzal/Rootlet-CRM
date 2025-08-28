'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Meetings } from '@/types'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical, Plus } from 'lucide-react'

interface MeetingProp {
    onOpenDialog: (state: string) => void;
}
const MeetingCard = ({ onOpenDialog }: MeetingProp) => {
    const [meetings, setMeetings] = useState<string[] | any>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [meetingState, setMeetingState] = useState<'pending' | 'attended' | 'postpond' | 'cancelled'>('pending');

    // Fetch Meeting Data
    const meetingData: Meetings[] = [
        {
            id: 1,
            title: 'Interview', // Interview | Meeting with manager
            date: 'Tue Aug 26 2025 16:22:53 GMT+0500', // Thu 30
            start_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 9 : 30 am
            end_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 11 : 00 pm
            description: '', // Interview for hiring a new Web developer
            status: 'pending', // pending | attended | postpond | cancelled
            post_reason: '', // The interview is Postpond due to ...
            cancel_reason: '', // The interview is Cancelled due to ...
            new_date: '', // New Date after postpond
            new_start_time: '', // New Start Time after postpond
            new_end_time: '', // New Start Time after postpond
            created_at: Date.now.toString()
        },
        {
            id: 1,
            title: 'Interview', // Interview | Meeting with manager
            date: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(0, 3) + new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(8, 11), // Thu 30
            start_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 9 : 30 am
            end_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 11 : 00 pm
            description: '', // Interview for hiring a new Web developer
            status: 'pending', // pending | attended | postpond | cancelled
            post_reason: '', // The interview is Postpond due to ...
            cancel_reason: '', // The interview is Cancelled due to ...
            new_date: '', // New Date after postpond
            new_start_time: '', // New Start Time after postpond
            new_end_time: '', // New Start Time after postpond
            created_at: Date.now.toString()
        },
        {
            id: 1,
            title: 'Interview', // Interview | Meeting with manager
            date: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(0, 3) + new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(8, 11), // Thu 30
            start_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 9 : 30 am
            end_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 11 : 00 pm
            description: '', // Interview for hiring a new Web developer
            status: 'pending', // pending | attended | postpond | cancelled
            post_reason: '', // The interview is Postpond due to ...
            cancel_reason: '', // The interview is Cancelled due to ...
            new_date: '', // New Date after postpond
            new_start_time: '', // New Start Time after postpond
            new_end_time: '', // New Start Time after postpond
            created_at: Date.now.toString()
        },
        {
            id: 1,
            title: 'Interview', // Interview | Meeting with manager
            date: 'Tue Aug 26 2025 16:22:53 GMT+0500', // Thu 30
            start_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 9 : 30 am
            end_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 11 : 00 pm
            description: '', // Interview for hiring a new Web developer
            status: 'pending', // pending | attended | postpond | cancelled
            post_reason: '', // The interview is Postpond due to ...
            cancel_reason: '', // The interview is Cancelled due to ...
            new_date: '', // New Date after postpond
            new_start_time: '', // New Start Time after postpond
            new_end_time: '', // New Start Time after postpond
            created_at: Date.now.toString()
        },
        {
            id: 1,
            title: 'Interview', // Interview | Meeting with manager
            date: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(0, 3) + new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(8, 11), // Thu 30
            start_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 9 : 30 am
            end_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 11 : 00 pm
            description: '', // Interview for hiring a new Web developer
            status: 'pending', // pending | attended | postpond | cancelled
            post_reason: '', // The interview is Postpond due to ...
            cancel_reason: '', // The interview is Cancelled due to ...
            new_date: '', // New Date after postpond
            new_start_time: '', // New Start Time after postpond
            new_end_time: '', // New Start Time after postpond
            created_at: Date.now.toString()
        },
        {
            id: 1,
            title: 'Interview', // Interview | Meeting with manager
            date: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(0, 3) + new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toString().slice(8, 11), // Thu 30
            start_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 9 : 30 am
            end_time: new Date('Tue Aug 26 2025 16:22:53 GMT+0500').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // 11 : 00 pm
            description: '', // Interview for hiring a new Web developer
            status: 'pending', // pending | attended | postpond | cancelled
            post_reason: '', // The interview is Postpond due to ...
            cancel_reason: '', // The interview is Cancelled due to ...
            new_date: '', // New Date after postpond
            new_start_time: '', // New Start Time after postpond
            new_end_time: '', // New Start Time after postpond
            created_at: Date.now.toString()
        },
    ];

    useEffect(() => {
        setMeetings(meetingData);   
    }, []);

    // Handle Meeting State
    const handleMeetingState = (state: string, id: number) => {
        switch (state) {
            case 'attended':
                setMeetingState(state);
                if (window.location.pathname !== '/messages') {
                    window.location.href = '/messages';
                }
                else {
                    const meeting = meetings.find((meeting: any) => meeting.id === id)
                    const updateStatus = [meeting].map((meeting: any) => meeting.status = state);
                    console.log(updateStatus);
                    setMeetings([...meetings]);
                    console.log(meetings);
                }
                break;
            case 'postpond':
                setMeetingState(state);
                if (window.location.pathname !== '/messages') {
                    window.location.href = '/messages';
                }
                else {
                    const meeting = meetings.find((meeting: any) => meeting.id === id)
                    const updateStatus = [meeting].map((meeting: any) => meeting.status = state);
                    setMeetings([...meetings, updateStatus]);
                    onOpenDialog(state);
                    console.log(meetings);
                }
                break;
            case 'cancelled':
                setMeetingState(state);
                if (window.location.pathname !== '/messages') {
                    window.location.href = '/messages';
                }
                else {
                    const meeting = meetings.find((meeting: any) => meeting.id === id)
                    const updateStatus = [meeting].map((meeting: any) => meeting.status = state);
                    setMeetings([...meetings, updateStatus]);
                    onOpenDialog(state);
                    console.log(meetings);
                }
                break;
            default:
                setMeetingState('pending');
        }
    };


    return (
        <>
            {/* Card */}
            <Card className='bg-card shadow-none border-0'>
                <CardContent>
                    <div className='w-ful flex justify-between'>
                        <h2 className='font-medium text-xl mb-8'>Meetings</h2>
                        <Button className='bg-card border hover:bg-primary/10 border-primary/5 px-8 py-1 text-center text-primary'>
                            <Plus className='h-4 w-4' /> Create New
                        </Button>
                    </div>
                    <div className='flex flex-col w-full h-auto gap-6'>
                        {meetings && meetings
                            .map((meeting: any, index: number) => {
                                return (
                                    <div key={index} className='flex justify-between items-center h-auto w-full'>
                                        {/* Left Content */}
                                        <div className='flex gap-2'>
                                            <div className='w-[40px] flex-col p-2 h-[40px] bg-background rounded-lg text-center flex justify-center items-center '>
                                                <p className='text-xs font-semibold text-[#FFA600]'>
                                                    {new Date(meeting.date).toString().slice(0, 3)}
                                                </p>
                                                <p className='text-xs text-primary/60'>
                                                    {new Date(meeting.date).toString().slice(8, 11)}
                                                </p>
                                            </div>

                                            <div className='flex flex-col justify-center gap-1'>
                                                <h3 className='text-base text-primary'>{meeting.title}</h3>
                                                <p className='text-[10px] text-primary/50'>{meeting.start_time} - {meeting.end_time}</p>
                                            </div>
                                        </div>
                                        {/* Right Button */}
                                        <div className='w-6 h-6 m-2 '>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className='text-primary/70'><EllipsisVertical className='h-4 w-4' /></DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem onClick={() => handleMeetingState('attended', meeting.id)}
                                                    >Attended</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleMeetingState('postpond', meeting.id)}
                                                    >Postpond</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleMeetingState('cancelled', meeting.id)}
                                                    >Cancelled</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default MeetingCard
