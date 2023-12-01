import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export function rutas() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>home</h1>
        }
    ]);
}