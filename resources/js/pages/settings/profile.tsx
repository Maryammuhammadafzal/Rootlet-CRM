import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Settings',
        href: '/settings/profile',
    },
];

type ProfileForm = {
    id: number;
    first_name: string;
    last_name?: string;
    user_email: string;
    phone_no: string;
    account_no: string;
    iban_no: string;
    qualification: string;
    employee_id: string;
    employee_picture?: string;
};

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { user_profile } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        id: user_profile.user_profile.id,
        first_name: user_profile.user_profile.first_name,
        last_name: user_profile.user_profile.last_name,
        user_email: user_profile.user_profile.user_email,
        phone_no: user_profile.user_profile.phone_no,
        account_no: user_profile.user_profile.account_no,
        iban_no: user_profile.user_profile.iban_no,
        qualification: user_profile.user_profile.qualification,
        employee_id: user_profile.user_profile.employee_id,
        employee_picture: user_profile.user_profile.employee_picture
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your personal details and contact information." />

                    <form onSubmit={submit} className="space-y-6">
                        <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">Name</Label>

                                <Input
                                    id="first-name"
                                    className="mt-1 block w-full"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                    autoComplete="first-name"
                                    placeholder="Name"
                                />

                                <InputError className="mt-2" message={errors.first_name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Father Name</Label>

                                <Input
                                    id="last-name"
                                    className="mt-1 block w-full"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    required
                                    autoComplete="last-name"
                                    placeholder="Father name"
                                />

                                <InputError className="mt-2" message={errors.last_name} />
                            </div>

                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">Name</Label>

                                <Input
                                    id="first-name"
                                    className="mt-1 block w-full"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                    autoComplete="first-name"
                                    placeholder="Name"
                                />

                                <InputError className="mt-2" message={errors.first_name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Father Name</Label>

                                <Input
                                    id="last-name"
                                    className="mt-1 block w-full"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    required
                                    autoComplete="last-name"
                                    placeholder="Father name"
                                />

                                <InputError className="mt-2" message={errors.last_name} />
                            </div>

                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">Name</Label>

                                <Input
                                    id="first-name"
                                    className="mt-1 block w-full"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                    autoComplete="first-name"
                                    placeholder="Name"
                                />

                                <InputError className="mt-2" message={errors.first_name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Father Name</Label>

                                <Input
                                    id="last-name"
                                    className="mt-1 block w-full"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    required
                                    autoComplete="last-name"
                                    placeholder="Father name"
                                />

                                <InputError className="mt-2" message={errors.last_name} />
                            </div>

                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>

                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                                placeholder="Email address"
                            />

                            <InputError className="mt-2" message={errors.email} />
                        </div>

                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className="-mt-4 text-sm text-muted-foreground">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 text-sm font-medium text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
