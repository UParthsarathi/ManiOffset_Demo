import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

const ADMIN_EMAIL = 'parthu3915@gmail.com'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/admin/login')
  }
  
  const isAdmin = user.email === ADMIN_EMAIL;
  
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-bold text-[#20283c] mb-2">Dashboard Overview</h1>
      <p className="text-slate-500 mb-8">Welcome back, {user.email}.</p>
      
      {isAdmin ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <h3 className="font-semibold text-lg text-[#20283c] border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#005fb3]"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            Admin Controls
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#005fb3]/30 transition-colors bg-slate-50 cursor-pointer group">
              <div className="h-10 w-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-[#20283c] mb-1">Product Pricing</h3>
              <p className="text-slate-500 text-sm mb-4">Manage and update pricing for your products.</p>
              <span className="text-xs font-semibold text-slate-400 bg-slate-200 px-2 py-1 rounded inline-flex">Coming Soon</span>
            </div>
            
            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#005fb3]/30 transition-colors bg-slate-50 cursor-pointer group">
              <div className="h-10 w-10 bg-[#005fb3]/10 text-[#005fb3] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </div>
              <h3 className="font-semibold text-lg text-[#20283c] mb-1">Incoming Orders</h3>
              <p className="text-slate-500 text-sm mb-4">View and manage orders placed by clients.</p>
              <span className="text-xs font-semibold text-slate-400 bg-slate-200 px-2 py-1 rounded inline-flex">Coming Soon</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8 text-center max-w-2xl">
          <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m19 8 3 3-3 3"/><path d="M22 11h-7"/></svg>
          </div>
          <h2 className="text-xl font-bold text-[#20283c] mb-2">Welcome to Mani Offset</h2>
          <p className="text-slate-600 mb-6">
            We&apos;re preparing your dedicated client portal. Soon you will be able to track your orders, 
            request new quotes directly, and review past invoices right from this dashboard.
          </p>
          <div className="inline-flex px-4 py-2 bg-slate-100 text-slate-500 rounded-full text-sm font-medium">
            Client Features Currently Under Construction
          </div>
        </div>
      )}
    </div>
  )
}
