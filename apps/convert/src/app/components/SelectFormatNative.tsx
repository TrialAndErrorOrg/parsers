import { UseFormRegister } from 'react-hook-form'

export function SelectFormatNative({
  options,
  register,
  name,
}: {
  options: { format: string; name: string }[]
  register: UseFormRegister<Record<string, any>>
  name: string
}) {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <select
        {...register(name)}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.format} value={option.format}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}
