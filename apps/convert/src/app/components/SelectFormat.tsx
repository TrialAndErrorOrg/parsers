'use client'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { GenericIcon } from './ExtIcon.js'

// const options = [
//   { id: 1, name: 'Wade Cooper', online: true },
//   { id: 2, name: 'Arlene Mccoy', online: false },
//   { id: 3, name: 'Devon Webb', online: false },
//   { id: 4, name: 'Tom Cook', online: true },
//   { id: 5, name: 'Tanya Fox', online: false },
//   { id: 6, name: 'Hellen Schmidt', online: true },
//   { id: 7, name: 'Caroline Schultz', online: true },
//   { id: 8, name: 'Mason Heaney', online: false },
//   { id: 9, name: 'Claudie Smitham', online: true },
//   { id: 10, name: 'Emil Schaefer', online: false },
// ]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function SelectFormat({
  options,
  label,
}: {
  label: string
  //   onChange: (format: string) => void
  options: { format: string; name: string }[]
}) {
  const [selected, setSelected] = useState(options[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full min-w-[10rem] cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <span className="h-6 w-6">
                  <GenericIcon type={selected.format} />
                </span>

                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((person) => (
                  <Listbox.Option
                    key={person.format}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span className="h-6 w-6">
                            <GenericIcon type={person.format} />
                          </span>

                          {/* <span
                            className={classNames(
                              person.online ? 'bg-green-400' : 'bg-gray-200',
                              'inline-block h-2 w-2 flex-shrink-0 rounded-full',
                            )}
                            aria-hidden="true"
                          /> */}
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
