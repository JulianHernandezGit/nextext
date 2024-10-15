import { SignInForm } from '@/components/SignInForm'

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1e1e1e]">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  )
}