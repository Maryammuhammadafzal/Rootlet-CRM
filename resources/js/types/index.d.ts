import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
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

}