import { useDispatch } from "react-redux";
import { getUser } from "../Apis/userApis";
import { setData, setIsAuth } from "../slices/userSlice";
import { setOrders } from "../slices/ordersList";
import { setWishList } from "../slices/wishListSlice";
import { setCartList } from "../slices/cartListSlice";


export async function handleLoginState(dispatch) {
    const res = await getUser()
    console.log(res);
    if (res) {
        dispatch(setIsAuth(true));
        dispatch(setData({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email
        }))
        console.log(res.cartList);
        dispatch(setOrders(res.orderList))

        dispatch(setWishList(res.wishList))

        dispatch(setCartList(res.cartList));
    }
    else {
        localStorage.removeItem("token");
    }
}