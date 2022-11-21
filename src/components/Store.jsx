import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Store = ({money, setMoney, potionTotal, setPotionTotal}) => {
    const message = () => toast.error("NOT ENOUGH MONEY")
    const message2 = () => toast.error("No more money")
    const buyPotion = (price) => {
        if (money - price < 0) {
            
            message()
            return
        } else if (money === 0) {
            message2()
            return (setMoney(price - price))
        }
        
        return (setMoney(money - price), setPotionTotal(potionTotal + 1))
    }

    return (
        <div className="store-container">
            <h1>Welcome to the Store!</h1>
            <h3>You have {money} Monies</h3>
            <h3>You have {potionTotal} Potion(s)</h3>
            <div className="potion-container">
                <button onClick={() => buyPotion(15)} className="buy-potion">Buy a small potion!</button>
            </div> 
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
                toastStyle={{color: "red"}}
                 />
        </div>
    )
}

export default Store