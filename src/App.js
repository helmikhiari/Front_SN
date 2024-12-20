import "./App.css";
import { Header } from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { NavRoutes } from "./routes/NavRoutes";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Loader } from "./components/Loader/Loader";
import { useEffect } from "react";
import { getAllProducts } from "./Apis/productApis";
import { useDispatch } from "react-redux";
import { setProducts } from "./slices/productSlice";
import { getUser } from "./Apis/userApis";
import { setData, setIsAuth } from "./slices/userSlice";
import { setOrders } from "./slices/ordersList";
import { setWishList } from "./slices/wishListSlice";
import { Wishlist } from './pages/Wishlist/Wishlist';
import { setCartList } from "./slices/cartListSlice";
import { handleLoginState } from "./utils/userState";
function App() {
  const dispatch = useDispatch()
  const loading = false;

  const fetchProducts = async () => {
    const data = await getAllProducts()
    dispatch(setProducts(data));
  }

  

  useEffect(() => {
    fetchProducts()
    handleLoginState(dispatch);
  },
    [])

  return (
    <div className="App">
      <Header />
      {loading && <Loader />}
      <NavRoutes />
      <ScrollToTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 1500 },
          error: { duration: 1500 },
        }}
        containerStyle={{
          top: "6rem",
        }}
      />
    </div>
  );
}

export default App;
