import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen">
                <img
                    src="/images/background dashboard.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    style={{ objectPosition: '5% 100%' }}
                />
                <div className="fixed inset-0 flex items-center justify-center text-center">
                    <div className='bg-white/30 px-14 py-4 rounded-lg border w-96'>
                        <div className='flex flex-col space-y-4'>
                            <div className=''>
                                <p className='text-white text-xl font-bold'>Selamat Datang di Website</p>
                                <p className='text-white text-sm'>
                                    Aplikasi Monitoring Telkom Akses ini dirancang untuk memudahkan pemantauan dan pengelolaan jaringan serta layanan Telkom secara real-time. Dengan fitur lengkap dan antarmuka yang user-friendly, Anda dapat memantau performa jaringan, status perangkat, serta laporan gangguan dengan cepat dan akurat.
                                </p>
                            </div>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                >
                                    <PrimaryButton>
                                        Dashboard
                                    </PrimaryButton>
                                </Link>
                            ) : (
                                    <Link
                                        href={route('login')}
                                    >
                                        <PrimaryButton>
                                            Log in
                                        </PrimaryButton>
                                    </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
