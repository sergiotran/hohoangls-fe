import React from 'react'
import MainLayout from '../src/common/layouts/main-layout'
import { NextPageWithLayout } from '../src/common/layouts/types'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>HomePage</div>
  )
}

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;