import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    // password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        // password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account" bgImage='/images/dashboard-bg.png'>
            <Head title="Register" />
            <form method="POST" className="flex flex-col gap-6 justify-center" onSubmit={submit}>
                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className='text-base font-semibold text-black'>Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                            className='max-w-sm h-[40px] px-7 text-black text-xs font-light rounded-xl'
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className='text-base font-semibold text-black'>Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                            className='max-w-sm h-[40px] px-7 text-black text-xs font-light rounded-xl'
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password" className='text-base font-semibold text-black'>Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                            className='max-w-sm h-[40px] px-7 text-black text-xs font-light rounded-xl'
                        />
                        <InputError message={errors.password} />
                    </div>
{/* 
                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation" className='text-base font-semibold text-black'>Confirm password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                            className='max-w-sm h-[40px] px-7 text-xs font-light rounded-xl'
                        />
                        <InputError message={errors.password_confirmation} />
                    </div> */}

                    <Button type="submit" className="mt-2 max-w-sm" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="ml-3 mt-auto text-sm text-[#1877F2]">
                    Already have an account?{' '}
                    <TextLink href={route('login')} className='text-[#1877F2]' tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
