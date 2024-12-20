import { useDispatch } from "react-redux";
import { getUser } from "../Apis/userApis";
import { setData, setIsAuth } from "../slices/userSlice";
import { setOrders } from "../slices/ordersList";
import { setWishList } from "../slices/wishListSlice";
import { setCartList } from "../slices/cartListSlice";


export async function handleLoginState(dispatch) {
    const res = await getUser()
    if (res) {
        dispatch(setIsAuth(true));
        dispatch(setData({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email
        }))

        dispatch(setOrders(res.orderList))

        dispatch(setWishList(res.Wishlist))

        dispatch(setCartList(res.cartList));
    }
    else {
        localStorage.removeItem("token");
    }
}