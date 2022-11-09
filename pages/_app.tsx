import { AppPropsWithLayout } from '@/common/layouts/types'
import '@/styles/global.scss'
import "antd/dist/antd.css"

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp