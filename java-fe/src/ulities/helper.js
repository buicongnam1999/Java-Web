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
                {/* <i _ngcontent-c0="" className="fa fa-sign-out" style="padding:0 10px;"></i> */}
                <span>Đăng nhập/Đăng ký</span>
            </span>
        )
    }
}