'use server'

export async function greet(prevState: { message: string }, formData: FormData) {
  const name = formData.get('name')
  return { message: `Hello, ${name}!` }
}

