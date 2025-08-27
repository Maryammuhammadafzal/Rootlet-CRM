import ActivityFeed from '@/components/activity-feed';
import MeetingCard from '@/components/meetings';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Messages',
        href: '/messages',
    },
];
export default function Messages() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Messages" />
            <div className="relative h-auto flex-1 overflow-hidden rounded-xl gap-5 p-6 md:min-h-min grid lg:grid-cols-2 grid-cols-1">
                {/* Activity Feeds */}
                <div className='h-auto col-span-1 bg-primary/5 rounded-xl '>
                    <ActivityFeed />
                </div>
                {/* Meetings */}
                <div className='col-span-1 h-auto bg-primary/5 rounded-xl '>
                    <MeetingCard />
                </div>
            </div>
        </AppLayout>
    )
}