'use client';

import { GiHamburgerMenu } from 'react-icons/gi'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

export default function MenuHamburger() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="text-sm font-medium text-white hover:text-gray-300 "
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex mt-20 items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-red-100 align-middle shadow-xl transition-all px-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-right"
                  >
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  text-sm font-medium text-gry-900 "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </Dialog.Title>
                  <div className='text-left'>
                    <Link href="/">
                      <p className="text-gray-900 font-bold mb-3">INICIO</p>
                    </Link>
                    <Link href="/contacto">
                      <p className="text-gray-900 font-bold mb-3">CONTACTO</p>
                    </Link>
                    <Link href="/nosotros">
                      <p className="text-gray-900 font-bold mb-5">NOSOTROS</p>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}