export const checkUser = (user) => {
    if (user !== null && user !== undefined) {
        return (
            <span>
                Thoát
            </span>
        )
    } else {
        return (
            <span>
                Đăng nhập/Đăng ký
            </span>
        )
    }
}