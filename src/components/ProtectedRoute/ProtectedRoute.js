import { Navigate } from "react-router-dom"

export const ProtectedRoute =({element: Component, isLogin, ...props}) => {
return (
  isLogin ? <Component {...props} /> : <Navigate to = "/" replace />
)
}