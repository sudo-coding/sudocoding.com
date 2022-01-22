import { ThemeProvider } from 'styled-components'
import { GlobalCss } from 'components/theme/global.styles'
import { theme } from 'components/theme'
import { motion, AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || EmptyComponent
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

const EmptyComponent = ({ children }) => <>{children}</>

export default MyApp