import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

const EmployeePersonalDetailedForm = (data: any, setData: ({...data, key:value}) => void) => {
    return (
        <div className='w-full h-auto flex flex-col'>

            <div className='grid sm:grid-cols-2 grid-cols-1 text-primary gap-10'>
                {/* Name */}
                <div className="grid gap-2">
                    <Label className='text-sm' htmlFor="employee-name">Employee Name</Label>

                    <Input
                        id="employee-name"
                        className="mt-1 block w-full text-[10px] font-light bg-primary/5"
                        value={data.employee_name}
                        onChange={(e) => setData('employee_name', e.target.value)}
                        required
                        autoComplete="employee-name"
                        placeholder="Name"
                    />

                    <InputError className="mt-2" message={errors.employee_name} />
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
        </div>
    )
}

export default EmployeePersonalDetailedForm
