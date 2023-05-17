import { Ingredients } from "../ingredients/ingredients";
import { Check } from "../check/check";
import { useState } from "react";
import { Order } from "../order/order";
import { Thanks } from "../thanks/thanks";

const products = [
  {
    name: "Основа",
    price: 50,
    id: 1,
    quantity: 1,
  },
  {
    name: "Мнєсо",
    price: 25,
    id: 2,
    quantity: 0,
  },
  {
    name: "Цибуля",
    price: 12,
    id: 3,
    quantity: 0,
  },
  {
    name: "Ананас",
    price: 15,
    id: 4,
    quantity: 0,
  },
  {
    name: "Сир",
    price: 15,
    id: 5,
    quantity: 0,
  },
  {
    name: "Ковбаска",
    price: 25,
    id: 6,
    quantity: 0,
  },
  {
    name: "Помідорчики",
    price: 17,
    id: 7,
    quantity: 0,
  },
  {
    name: "Грибочки",
    price: 15,
    id: 8,
    quantity: 0,
  },
];

export const MainPage = () => {
    const [cart, setCart] = useState([
        products.find((item) => item.id === 1),
    ]);
    const [showThanks, setShowThanks] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const addProduct = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
        const updatedCart = cart.map((item) =>
            item.id === product.id &&
            (product.id !== 1 || product.quantity < 1)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
        } else {
        const newProduct = { ...product, quantity: 1 };
        setCart([...cart, newProduct]);
        }
    };

    const removeProduct = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct || product.quantity > 0) {
        const updatedCart = cart
            .map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0);
        setCart(updatedCart);
        }
    };

    const getTotalPrice = () => {
        return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
        );
    };

    const handleConfirmPayment = () => {
        setShowConfirmation(true);
    };

    const handleConfirm = () => {
        setShowThanks(true);
    };

    if (showThanks) {
        return <Thanks />;
    }

    if (showConfirmation) {
        return (
        <Order
            getTotalPrice={getTotalPrice()}
            cart={cart}
            handleConfirm={handleConfirm}
        />
        );
    }


    return (
      <div className="mainpage">
        <h2 className="App-title">Конструктор піци</h2>
        <div className="table-wrapper">
          <Ingredients products={products} onButtonClick={addProduct} />
          <Check
            cart={cart}
            onButtonClick={removeProduct}
            getTotalPrice={getTotalPrice}
            handleConfirmPayment={handleConfirmPayment}
          />
        </div>
      </div>
    );
}