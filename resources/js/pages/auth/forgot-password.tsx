// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout title="Rest Your password" description="Enter your email to receive a password reset link"  bgImage=''>
            <Head title="Forgot password" />

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

            <div className="space-y-6">
                <form method="POST" onSubmit={submit}>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className='text-base font-semibold text-black'>Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            value={data.email}
                            autoFocus
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                            className='max-w-sm h-[40px] px-7 text-black text-xs font-light rounded-xl'
                        />

                        <InputError message={errors.email} />
                    </div>

                    <div className="mt-8 max-w-sm">
                        <Button className="w-full" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Next
                        </Button>
                    </div>
                </form>

                <div className="ml-3 mt-auto text-sm text-[#1877F2]">
                    <span>Back to</span>{' '}
                    <TextLink href={route('login')} className='text-[#1877F2]'>log in</TextLink>
                </div>
            </div>
        </AuthLayout>
    );
}
