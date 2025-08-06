import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-transparent">
                <div className="flex items-center">
                    <ApplicationLogo className="h-10 w-auto" />
                </div>
                <div>
                    {auth.user ? (
                        <Link href={route('dashboard')}>
                            <PrimaryButton>
                                Dashboard
                            </PrimaryButton>
                        </Link>
                    ) : (
                        <Link href={route('login')}>
                            <PrimaryButton>
                                Log in
                            </PrimaryButton>
                        </Link>
                    )}
                </div>
            </nav>

            <div className="relative min-h-screen">
                <img
                    src="/images/background dashboard.jpg"
                    alt="Background"
                    className="w-full h-screen object-cover object-center"
                />
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-black to-transparent px-8 py-6 w-full h-full">
                        <div className="flex items-center justify-center h-full w-1/2">
                            <div className='space-y-4'>
                                <p className="text-white text-4xl font-bold w-full">Selamat Datang di Aplikasi Monitoring ALL BAST & Tagihan Mitra Telkom Akses</p>
                                <p className="text-white text-sm">
                                    Sistem terintegrasi untuk memantau dan mengelola data BAST serta tagihan mitra secara efisien, real-time, dan terstruktur.
                                    Tingkatkan efektivitas kerja dan transparansi proyek konstruksi bersama solusi digital kami.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0 text-white w-full bg-black/25 backdrop-blur-xl flex justify-center py-1'>
                        <p className='text-sm'>
                            © 2025 Sely | Politeknik Negeri Sambas. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
