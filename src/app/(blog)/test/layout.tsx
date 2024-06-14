import React from 'react'
import Footer from '../_components/Footer'
import Header from '../_components/Header'

export default function layout() {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <Header />
      <main className='flex-1'>
        <div className='boder-b'>
          <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
