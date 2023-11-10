import ReactDOM from 'react-dom/client'
import i18n from './utils/translation/i18n'
import { I18nextProvider } from 'react-i18next'

import App from './App.jsx'
import './main.css'

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)

  root.render(
    <I18nextProvider i18n={i18n} initialLanguage={'en'}>
      <App />
    </I18nextProvider>
  )
}

localStorage.setItem('token', 'x@fSDFYsd345d23saFsa326ASDghad23saFsa326ASDghasd%6Assd%6AsD')