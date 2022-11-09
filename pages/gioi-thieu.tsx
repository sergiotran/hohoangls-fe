import MainLayout from '@/common/layouts/main-layout'
import { NextPageWithLayout } from '@/common/layouts/types'
import React from 'react'

const AboutPage: NextPageWithLayout = () => {
  return (
    <div>AboutPage</div>
  )
}

AboutPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;