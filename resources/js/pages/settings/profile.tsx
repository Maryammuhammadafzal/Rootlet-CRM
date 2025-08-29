import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

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
    last_name: string;
    user_email: string;
    phone_no: string;
    account_no: string;
    iban_no: string;
    qualification: string;
    employee_id: string;
    employee_picture: string;
};

// export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
export default function Profile() {
    const { user_profile, auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<ProfileForm>({
        id: auth.user?.id ?? 1,
        first_name: user_profile?.user_profile?.first_name || auth.user?.name || '',
        last_name: user_profile?.user_profile?.last_name || '',
        user_email: user_profile?.user_profile?.user_email || auth.user?.email || '',
        phone_no: user_profile?.user_profile?.phone_no || '',
        account_no: user_profile?.user_profile?.account_no || '',
        iban_no: user_profile?.user_profile?.iban_no || '',
        qualification: user_profile?.user_profile?.qualification || '',
        employee_id: user_profile?.user_profile?.employee_id || '',
        employee_picture: user_profile?.user_profile?.employee_picture || '',
    });

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    } else {
      console.log('Form reference not found. Ensure the form is mounted.');
    }
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log('Form data:', data);
    patch(route('profile.update'), {
      preserveScroll: true,
      onSuccess: () => console.log('Profile updated successfully'),
      onError: (errors) => console.log('Update failed:', errors),
    });
  };

  // Ensure form is rendered on client-side
  if (typeof window === 'undefined') return null;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />

            <SettingsLayout processing={processing} recentlySuccessful={recentlySuccessful} user_profile={user_profile?.user_profile} onSave={handleSubmit}>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your personal details and contact information." />

                    <form ref={formRef} onSubmit={submit} className="space-y-6">


                        <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                            {/* Name */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="first-name">Name</Label>

                                <Input
                                    id="first-name"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    required
                                    autoComplete="first-name"
                                    placeholder="Name"
                                />

                                <InputError className="mt-2" message={errors.first_name} />
                            </div>

                            {/* Father Name */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="last-name">Father Name</Label>

                                <Input
                                    id="last-name"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
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
                            {/* Email */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="user-email">Email address</Label>

                                <Input
                                    id="user-email"
                                    type="email"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.user_email}
                                    onChange={(e) => setData('user_email', e.target.value)}
                                    required
                                    autoComplete="user-email"
                                    placeholder="Email address"
                                />

                                <InputError className="mt-2" message={errors.user_email} />
                            </div>
                            {/* Phone Number */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="phone-no">Phone Number</Label>

                                <Input
                                    id="phone-no"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.phone_no}
                                    onChange={(e) => setData('phone_no', e.target.value)}
                                    required
                                    autoComplete="phone-no"
                                    placeholder="Phone Number"
                                />

                                <InputError className="mt-2" message={errors.phone_no} />
                            </div>

                        </div>

                        <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                            {/* Account No */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="account-no">Account No</Label>

                                <Input
                                    id="account-no"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.account_no}
                                    onChange={(e) => setData('account_no', e.target.value)}
                                    required
                                    autoComplete="account-no"
                                    placeholder="Account No"
                                />

                                <InputError className="mt-2" message={errors.account_no} />
                            </div>
                            {/* IBAN no */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="iban-no">IBAN no</Label>

                                <Input
                                    id="iban-no"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.iban_no}
                                    onChange={(e) => setData('iban_no', e.target.value)}
                                    required
                                    autoComplete="iban-no"
                                    placeholder="IBAN no"
                                />

                                <InputError className="mt-2" message={errors.iban_no} />
                            </div>

                        </div>

                        <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                            {/* Qualification */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="qualification">Qualification</Label>

                                <Input
                                    id="qualification"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.qualification}
                                    onChange={(e) => setData('qualification', e.target.value)}
                                    required
                                    autoComplete="qualification"
                                    placeholder="Qualification"
                                />

                                <InputError className="mt-2" message={errors.qualification} />
                            </div>
                            {/* Employee ID */}
                            <div className="grid gap-2">
                                <Label className='text-sm' htmlFor="employee-id">Employee ID</Label>

                                <Input
                                    id="employee-id"
                                    className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                                    value={data.employee_id}
                                    onChange={(e) => setData('employee_id', e.target.value)}
                                    required
                                    autoComplete="employee-id"
                                    placeholder="Employee ID"
                                />

                                <InputError className="mt-2" message={errors.employee_id} />
                            </div>
                        </div>

                        {/* {mustVerifyEmail && auth.user.email_verified_at === null && (
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
                        )} */}

                        {/* <div className="flex items-center gap-4">
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
                        </div> */}
                    </form>
                </div>

                {/* <DeleteUser /> */}
            </SettingsLayout>
        </AppLayout>
    );
}
