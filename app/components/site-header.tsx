import { hasEnvVars } from '@/lib/utils';
import { Suspense } from 'react';
import { EnvVarWarning } from './env-var-warning';
import Link from 'next/link';
import { AuthButton } from './auth-button';
import { SidebarTrigger } from './ui/sidebar';

interface SiteHeaderProps {
    shouldShowSidebarTrigger?: boolean;
}

export default function SiteHeader({ shouldShowSidebarTrigger }: SiteHeaderProps) {
    return (
        <nav className="w-full flex border-b border-b-foreground/10 h-16">
            <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                    {shouldShowSidebarTrigger ? <SidebarTrigger /> : <Link href={"/"}>BudgetPoint</Link>}
                </div>
                {!hasEnvVars ? (
                    <EnvVarWarning />
                ) : (
                    <Suspense>
                        <AuthButton />
                    </Suspense>
                )}
            </div>
        </nav>
    );
}