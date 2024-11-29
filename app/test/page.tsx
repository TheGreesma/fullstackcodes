'use client'

import { useFormState } from 'react-dom'
import { greet } from './actions'

export default function Home() {
  const [state, formAction] = useFormState(greet, { message: '' })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form action={formAction} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {state.message && (
        <p className="mt-4 text-xl font-bold text-green-600">{state.message}</p>
      )}
    </main>
  )
}

