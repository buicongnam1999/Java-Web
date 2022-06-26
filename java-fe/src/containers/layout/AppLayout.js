import Footer from "containers/market-layout/Footer";
import Header from "containers/market-layout/Header";
import { useState } from "react";

const AppLayout = (props) => {
    const [username, setUsename] = useState(null);
    const [coins, setCoinds] = useState(0);
    const [coinfree, setCoinfree] = useState(0);
    const [gold, setGold] = useState(0);

    return (
        <div>
            <Header username={username} coins={coins} coinfree={coinfree} gold={gold} />
            <div>{props.children}</div>
            <Footer />
        </div>
    )
}

export default AppLayout;