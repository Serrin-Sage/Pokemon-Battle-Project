import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StoreItems from './StoreItems';

const Store = ({money, setMoney, potionTotal, setPotionTotal}) => {
    return (
        <div className="store-container">
            <h1>Welcome to the Store!</h1>
            <h3>You have {money} Monies</h3>
            <h3>You have {potionTotal} Potion(s)</h3>
            <StoreItems image={"./src/images/Potion2-removebg-preview.png"} name={"Potion"} price={200} money={money} setMoney={setMoney} potionTotal={potionTotal} setPotionTotal={setPotionTotal}/>
            <StoreItems image={"./src/images/Potion2-removebg-preview.png"} name={"Potion"} price={200} money={money} setMoney={setMoney} potionTotal={potionTotal} setPotionTotal={setPotionTotal} />
            <StoreItems image={"./src/images/Potion2-removebg-preview.png"} name={"Potion"} price={200} money={money} setMoney={setMoney} potionTotal={potionTotal} setPotionTotal={setPotionTotal} />
            
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                toastStyle={{ color: "red" }}
            />
        </div>
    )
}

export default Store