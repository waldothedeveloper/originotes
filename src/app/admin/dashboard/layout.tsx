'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Folder,
  Menu as MenuIcon,
  MessageCircle,
  Settings,
  UsersRound,
  X,
} from 'lucide-react'
import { SignedIn, UserButton } from '@clerk/nextjs'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/Logo'

const navigation = [
  { name: 'Projects', href: '/admin/dashboard/projects', icon: Folder },
  { name: 'Clients', href: '/admin/dashboard/clients', icon: UsersRound },
  { name: 'Messages', href: '/admin/dashboard/messages', icon: MessageCircle },
  { name: 'Settings', href: '#', icon: Settings },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 xl:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-neutral-950/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-50 px-6 dark:bg-neutral-950 dark:ring dark:ring-white/10 dark:before:pointer-events-none dark:before:absolute dark:before:inset-0 dark:before:bg-white/5">
                <div className="relative flex h-16 shrink-0 items-center">
                  <Logo className="h-8 w-auto dark:hidden" />
                  <Logo className="h-8 w-auto not-dark:hidden" invert />
                </div>
                <nav className="relative flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => {
                          const isActive =
                            item.href !== '#'
                              ? pathname === item.href ||
                                pathname.startsWith(item.href + '/')
                              : false
                          return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  isActive
                                    ? 'bg-neutral-100 text-neutral-900 dark:bg-white/5 dark:text-white'
                                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white',
                                  'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className={classNames(
                                    isActive
                                      ? 'text-neutral-900 dark:text-white'
                                      : 'text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white',
                                    'size-6 shrink-0',
                                  )}
                                />
                                {item.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>

                    <li className="-mx-6 mt-auto">
                      <div className="flex items-center gap-x-4 p-6">
                        <SignedIn>
                          <UserButton />
                        </SignedIn>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col dark:bg-neutral-950">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-neutral-50 px-6 ring-1 ring-neutral-200 dark:bg-white/5 dark:ring-white/5">
            <div className="flex h-16 shrink-0 items-center">
              <Logo className="h-8 w-auto dark:hidden" />
              <Logo className="h-8 w-auto not-dark:hidden" invert />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      const isActive =
                        item.href !== '#'
                          ? pathname === item.href ||
                            pathname.startsWith(item.href + '/')
                          : false
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={classNames(
                              isActive
                                ? 'bg-neutral-100 text-neutral-900 dark:bg-white/5 dark:text-white'
                                : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                isActive
                                  ? 'text-neutral-900 dark:text-white'
                                  : 'text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white',
                                'size-6 shrink-0',
                              )}
                            />
                            {item.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>

                <li className="-mx-6 mt-auto">
                  <div className="flex items-center gap-x-4 p-6">
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-neutral-200 bg-white px-4 shadow-xs sm:px-6 lg:px-8 dark:border-white/5 dark:bg-neutral-950 dark:shadow-none">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-neutral-900 xl:hidden dark:text-white"
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon aria-hidden="true" className="size-5" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <p className="text-neutral-900 dark:text-white">YOU CAN PUT SOMETHING HERE</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}
