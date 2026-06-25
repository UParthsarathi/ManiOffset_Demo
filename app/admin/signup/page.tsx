import { signup } from '../actions'
import Image from 'next/image'
import Link from 'next/link'

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const sp = await searchParams;
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen items-center justify-center bg-[#0d1430] relative overflow-hidden px-4">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#005fb3] rounded-full blur-[128px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-500 rounded-full blur-[128px] opacity-10 pointer-events-none" />

      <form className="relative flex flex-col w-full max-w-md bg-[#020513]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 sm:p-10 z-10">
        <div className="flex justify-center mb-8">
          <div className="relative h-12 w-48">
            <Image 
              src="/logo.png" 
              alt="Mani Offset Logo" 
              fill
              sizes="192px"
              className="object-contain" 
              priority
            />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-center text-white">Create Account</h1>
        <p className="text-slate-400 text-center mb-8 text-sm">Join Mani Offset to track your orders and quotes.</p>
        
        <div className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-medium text-slate-300 mb-1.5 block" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full rounded-lg px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#005fb3]/50 focus:border-[#005fb3] transition-all placeholder:text-slate-500"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label className="text-sm font-medium text-slate-300 mb-1.5 block" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-lg px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#005fb3]/50 focus:border-[#005fb3] transition-all placeholder:text-slate-500"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-4 mt-8">
          <button
            formAction={signup}
            className="w-full bg-[#005fb3] hover:bg-[#004a8c] text-white font-medium rounded-lg px-4 py-3 transition-colors shadow-[0_0_20px_rgba(0,95,179,0.3)] shadow-[#005fb3]/20"
          >
            Create Account
          </button>
          
          <p className="text-center text-sm text-slate-400 mt-2">
            Already have an account?{' '}
            <Link href="/admin/login" className="text-white hover:text-blue-400 transition-colors font-medium">
              Sign In
            </Link>
          </p>
        </div>
        
        {sp?.message && (
          <div className="mt-6 p-4 text-sm bg-red-500/10 border border-red-500/20 text-red-400 text-center rounded-lg">
            {sp.message}
          </div>
        )}
      </form>
    </div>
  )
}
