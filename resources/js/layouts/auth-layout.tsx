import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, title, description, bgImage, ...props }: { children: React.ReactNode; title: string; description: string; bgImage: string; }) {
    return (
        <AuthLayoutTemplate title={title} description={description} bgImage={bgImage} {...props}>
            {children}
        </AuthLayoutTemplate>
    );
}
