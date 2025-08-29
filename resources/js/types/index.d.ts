import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}
export interface Profile {
    user_profile: UserProfile;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavSubItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface NavItem {
    navName: string;
    navItems: NavSubItem[]; // array of sub-items
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    user_profile: Profile;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface UserProfile {
    id: number;
    first_name: string;
    last_name: string;
    user_email: string;
    phone_no: string;
    account_no: string;
    iban_no: string;
    qualification: string;
    employee_id: string;
    employee_picture: string;
}

export interface ProfileSettingProp {
    processing: boolean;
    recentlySuccessful: boolean;
}

export interface DashboardCard {
    title: string;
    progress: number;
    count: number;
    icon?: LucideIcon | null;
    description: string;
    card_design: string;
    color: string;
}
export interface DepartmentCard {
    title: string;
    employees: number;
    icon?: LucideIcon | string;
}

export interface ActivityFeeds {
    id: string;
    avatar?: string;
    type: string;
    name: string;
    message: string;
    reason: string;
    time: string;
    activity: string;
    depart: string;
    designation: string;
    status: string;
    reply: string;
    created_at: string;
}

export interface Meetings {
    id: number;
    title: string; // Interview | Meeting with manager
    date: string; // Thu 30
    start_time: string; // 9 : 30 am
    end_time: string; // 11 : 00 pm
    description: string; // Interview for hiring a new Web developer
    status: string; // pending | attended | postpond | cancelled
    post_reason: string; // The interview is Postpond due to ...
    cancel_reason: string; // The interview is Cancelled due to ...
    new_date: string; // New Date after postpond
    new_start_time: string; // New Start Time after postpond
    new_end_time: string; // New Start Time after postpond
    created_at: string;
}
