import { useContext } from "react"
import { ProductContext } from "../context/AuthProvider"

const useAuth = () => {
    return useContext(ProductContext);
}

export default useAuth;