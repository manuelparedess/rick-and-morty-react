import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
