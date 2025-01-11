import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer position='top-center' theme='dark' closeOnClick={true} pauseOnHover={false} autoClose={2100}/>
    <App />
  </Provider>,
)
