import { useState } from "react"

const Footer = (props) => {
    const [connected, setConnected] = useState(false);
    const [isMobie, setIsMobie] = useState(false);

    return(
        <>
        {connected &&
            <div>

            </div>
        }
        {!isMobie &&
            <div>
                
            </div>    
        }
        </>
    )
}

export default Footer;