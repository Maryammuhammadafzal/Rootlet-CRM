import { type BreadcrumbItem, type SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
import HeadingSmall from '@/components/heading-small';
import EmployeeLayout from '@/layouts/app/employees/layout';
import EmployeePersonalDetailedForm from './employee-personal-details-form';

type EmployeePersonalInfoForm = {
    employee_id: number;
    employee_name: string;
    employee_father_name: string;
    employee_email: string;
    employee_cnic: string;
    employee_born_date: string;
    employee_contact: string;
    employee_religion: string;
    employee_nationality: string;
    employee_gender: string;
    employee_marital_status: string;
    employee_designation: string;
    employee_department: string;
    employee_position: string;
    employee_shifts: string;
    employee_join_date: string;
    employeement_type: string;
    employee_status: string;
    employee_exit_date: string;
    employee_working_hours: string;
    employee_salary: string;
    employee_emergency_contact_1_no: string;
    employee_emergency_contact_1_name: string;
    employee_emergency_contact_1_relation: string;
    employee_emergency_contact_2_no?: string;
    employee_emergency_contact_2_name?: string;
    employee_emergency_contact_2_relation?: string;
}

const AddEmployee = () => {
    const { employee_details, auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<EmployeePersonalInfoForm>({
        employee_id: employee_details?.employee_details?.employee_id ?? 0,
        employee_name: employee_details?.employee_details?.employee_name || auth.user?.name || '',
        employee_father_name: employee_details?.employee_details?.employee_father_name || '',
        employee_email: employee_details?.employee_details?.employee_email || auth.user?.email || '',
        employee_cnic: employee_details?.employee_details?.employee_cnic || '',
        employee_born_date: employee_details?.employee_details?.employee_born_date || '',
        employee_contact: employee_details?.employee_details?.employee_contact || '',
        employee_religion: employee_details?.employee_details?.employee_religion || '',
        employee_nationality: employee_details?.employee_details?.employee_nationality || '',
        employee_gender: employee_details?.employee_details?.employee_gender || '',
        employee_marital_status: employee_details?.employee_details?.employee_marital_status || '',
        employee_designation: employee_details?.employee_details?.employee_designation || '',
        employee_department: employee_details?.employee_details?.employee_department || '',
        employee_position: employee_details?.employee_details?.employee_position || '',
        employee_shifts: employee_details?.employee_details?.employee_shifts || '',
        employee_join_date: employee_details?.employee_details?.employee_join_date || '',
        employeement_type: employee_details?.employee_details?.employeement_type || '',
        employee_status: employee_details?.employee_details?.employee_status || '',
        employee_exit_date: employee_details?.employee_details?.employee_exit_date || '',
        employee_working_hours: employee_details?.employee_details?.employee_working_hours || '',
        employee_salary: employee_details?.employee_details?.employee_salary || '',
        employee_emergency_contact_1_name: employee_details?.employee_details?.employee_emergency_contact_1_name || '',
        employee_emergency_contact_1_no: employee_details?.employee_details?.employee_emergency_contact_1_no || '',
        employee_emergency_contact_1_relation: employee_details?.employee_details?.employee_emergency_contact_1_relation || '',
        employee_emergency_contact_2_name: employee_details?.employee_details?.employee_emergency_contact_2_name || '',
        employee_emergency_contact_2_no: employee_details?.employee_details?.employee_emergency_contact_2_no || '',
        employee_emergency_contact_2_relation: employee_details?.employee_details?.employee_emergency_contact_2_relation || '',
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
        <EmployeeLayout processing={processing} recentlySuccessful={recentlySuccessful} employee_details={employee_details} onSave={handleSubmit}>
            <div className="space-y-6">
                <HeadingSmall title="Profile information" description="Update your personal details and contact information." />
                {/* Employee Personal Detail Form */}
                <form ref={formRef} onSubmit={submit} className="space-y-6">
                    <EmployeePersonalDetailedForm data={data} />

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
        </EmployeeLayout>
    )
}

export default AddEmployee
