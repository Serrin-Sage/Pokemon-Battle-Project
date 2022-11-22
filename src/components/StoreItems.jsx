import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StoreItems = ({ money, setMoney, potionTotal, setPotionTotal, image, name, price}) => {
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
        <div className="potion-container" onClick={() => buyPotion(price)}>
            <div className='potion-item'>
                <img src={image} alt="potion image" />
                <div className='inner'></div>
                <div className='inner-2'><p>{price}</p></div>
                <div className='inner-3'>{name}</div>
            </div>

           
        </div> 
    )
}

export default StoreItems