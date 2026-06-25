import { logout } from './actions'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { LayoutDashboard, LogOut } from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar - Only visible to authenticated users */}
      {user && (
        <aside className="w-full md:w-64 bg-[#020513] text-white flex flex-col border-r border-[#1a1f2e] min-h-[auto] md:min-h-screen">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold tracking-tight">Mani Offset</h2>
            <p className="text-sm text-slate-400 mb-1">Account Portal</p>
            {user?.email && (
              <div className="mt-3 px-3 py-1.5 bg-white/5 rounded-md text-xs font-mono text-slate-300 border border-white/10 break-all">
                {user.email}
              </div>
            )}
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <LayoutDashboard size={18} />
              <span className="font-medium">Dashboard</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-white/10">
            <form action={logout}>
              <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-left text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                <LogOut size={18} />
                <span className="font-medium">Sign Out</span>
              </button>
            </form>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto w-full">
        {children}
      </main>
    </div>
  )
}
