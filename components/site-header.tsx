'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/config/site';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/lib/hooks/use-scroll-position';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();

  // Hero height is now full viewport height
  const getHeroHeight = () => {
    if (typeof window === 'undefined') return 800;
    return window.innerHeight; // full viewport height
  };

  const isHome = pathname === '/';
  const shouldBeTransparent = isHome && scrollY < getHeroHeight();

  const headerClasses = cn(
    'sticky top-0 z-50 w-full transition-colors duration-300 ease-out',
    shouldBeTransparent
      ? 'border-b-0 bg-transparent shadow-none backdrop-blur-none'
      : 'border-b border-slate-200/70 bg-white/80 shadow-[0_18px_48px_-28px_rgba(79,70,229,0.45)] backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/85 dark:shadow-[0_20px_48px_-28px_rgba(2,6,23,0.8)]'
  );
  const logoWrapperClasses = cn(
    'relative flex h-16 w-16 origin-left items-center justify-center will-change-transform transition-transform duration-500 ease-in-out',
    shouldBeTransparent ? 'mt-[20px] scale-125 sm:scale-150' : 'scale-100'
  );
  const logoImageSize = shouldBeTransparent ? '112px' : '64px';
  const brandLinkClasses = cn(
    'flex items-center text-sm font-semibold transition-all duration-500 ease-in-out',
    shouldBeTransparent ? 'gap-4 sm:gap-5' : 'gap-1 sm:gap-2'
  );
  const brandNameClasses = cn(
    'font-semibold tracking-tight transition-all duration-500 ease-in-out',
    shouldBeTransparent
      ? 'text-lg sm:text-2xl text-white'
      : 'text-sm sm:text-lg text-slate-900 dark:text-white'
  );
  const brandTaglineClasses = cn(
    'font-medium transition-all duration-500 ease-in-out',
    shouldBeTransparent
      ? 'text-sm sm:text-base text-white/80'
      : 'text-xs sm:text-sm text-slate-500 dark:text-slate-400'
  );

  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center justify-between gap-4 px-4 transition-all duration-500 ease-in-out sm:px-6">
        <Link href="/" className={brandLinkClasses}>
          <span className={logoWrapperClasses}>
            <Image
              src="/new-logo.png"
              alt="Bravya Web Solutions logo"
              fill
              priority
              sizes={logoImageSize}
              className="object-contain transition-all duration-500 ease-in-out"
            />
          </span>
          <span className="hidden sm:flex flex-col transition-all duration-500 ease-in-out">
            <span className={brandNameClasses}>Bravya </span>
            <span className={brandTaglineClasses}>Experience-first digital engineering</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2 md:gap-6">
          <ThemeToggle
            className={cn(
              "transition-colors duration-300",
              shouldBeTransparent
                ? "text-white hover:bg-white/20 hover:text-white"
                : ""
            )}
          />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors duration-300 hover:text-brand',
                    isActive
                      ? 'text-brand'
                      : shouldBeTransparent
                        ? 'text-white/90 hover:text-white'
                        : 'text-slate-600 dark:text-slate-300',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Button
            asChild
            className={cn(
              "hidden md:inline-flex transition-all duration-300",
              shouldBeTransparent
                ? "bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-white"
                : ""
            )}
            variant={shouldBeTransparent ? "outline" : "default"}
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden transition-colors duration-300",
                  shouldBeTransparent
                    ? "text-white hover:bg-white/20 hover:text-white"
                    : ""
                )}
                aria-label="Open menu"
              >
                <Menu aria-hidden className="h-5 w-5" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white p-6 shadow-xl dark:bg-slate-950">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold">Menu</span>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X aria-hidden className="h-5 w-5" />
                    </Button>
                  </Dialog.Close>
                </div>
                <div className="mt-8 flex flex-col gap-4 text-base">
                  {navLinks.map((link) => (
                    <Dialog.Close asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-lg px-2 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-900"
                      >
                        {link.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </div>
                <div className="mt-6">
                  <Dialog.Close asChild>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
