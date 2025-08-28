'use client'
import ActivityFeed from '@/components/activity-feed';
import MeetingCard from '@/components/meetings';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Messages',
        href: '/messages',
    },
];
export default function Messages() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [meetingState, setMeetingState] = useState('');

    const handleMeetingDialog = (state: string) => {
        setIsDialogOpen(true);
        setMeetingState(state);
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Messages" />
            <div className="relative h-auto flex-1 overflow-hidden rounded-xl gap-5 p-6 md:min-h-min grid lg:grid-cols-2 grid-cols-1">
                {/* Activity Feeds */}
                <div className='h-fit col-span-1 bg-primary/5 rounded-xl '>
                    <ActivityFeed />
                </div>
                {/* Meetings */}
                <div className='col-span-1 h-fit bg-primary/5 rounded-xl '>
                    <MeetingCard onOpenDialog={handleMeetingDialog} />
                </div>

                {/* Meeting Dialog */}
                {isDialogOpen && meetingState === 'postpond' ? (
                    <Dialog>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                ) :
                    <>
                    </>
                }
            </div>
        </AppLayout>
    )
}