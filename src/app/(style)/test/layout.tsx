import Footer from '@/app/(blog)/_components/Footer'
import Header from '@/app/(blog)/_components/Header'
import _BreadCrumb from '@/app/(blog)/_components/_BreadCrumb'
import Sidebar from '@/app/(blog)/_components/sidebar/Sidebar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <Header />
      <main className='flex-1'>
        <div className='boder-b'>
          <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
            <Sidebar />
            {/* <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_100px]"> 메인 옆 오른쪽 side 그리드 필요할 경우 이것 사용 */}
            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]">
              <div className="flex flex-col flex-1 " style={{ maxWidth: '1200px' }}>
                <_BreadCrumb />
                <main className="flex-1 overflow-y-auto">
                  {children}
                </main>
              </div>
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
