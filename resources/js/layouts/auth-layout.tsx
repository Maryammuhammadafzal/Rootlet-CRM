import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, title, description, image, bgImage, ...props }: { children: React.ReactNode; title: string; description: string; image: string; bgImage: string; }) {
    return (
        <AuthLayoutTemplate title={title} description={description} image={image} bgImage={bgImage} {...props}>
            {children}
        </AuthLayoutTemplate>
    );
}
