import { Card } from './components/card';
import { Sidebar } from './components/sidebar';
import Navbar from './components/navbar';
import { useEffect, useState } from 'react';
import { Context } from './context/Context';
import { images } from './components/images';

function App() {
	const [filetredImages, setFilteredItems] = useState([]);
	const [toCart, setToCart] = useState('');
	const [expand, setExpand] = useState(true);
	const [items, setItems] = useState(false);
	const [doubleItems, setDoubleItems] = useState([]);
	const [total, setTotal] = useState([]);
	const [newChange, setNewChange] = useState([]);

	useEffect(() => {
		const newTotal = doubleItems.reduce(
			(total, item) => total + parseFloat(item.Price) * item.quantity,
			0
		);
		const allTotal = newTotal.toFixed(2);
		setTotal(allTotal);
		// console.log(doubleItems);

		console.log(doubleItems);
	}, [doubleItems]);

	const handleAddToCart = (id, booelan) => {
		const matchingItem = filetredImages.find((item) => item.id === id);
		const findItems = doubleItems.find((item) => item.id === id);

		if (matchingItem) {
			const newItem = {
				id: matchingItem.id,
				cart: matchingItem.cart,
				images: matchingItem.source,
				text: matchingItem.text,
				sizes: matchingItem.sizes,
				Price: matchingItem.Price,
				quantity: 1,
			};
			setDoubleItems((prevItem) => [...prevItem, newItem]);

			if (findItems) {
				const updateQuantity = doubleItems.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item
				);
				setDoubleItems(updateQuantity);
			}

			if (booelan === false) {
				const updateQuantity = doubleItems.map((item) =>
					item.id === id
						? { ...item, quantity: Math.max(item.quantity - 1, 0) }
						: item
				);
				setDoubleItems(updateQuantity);
			}
		} else {
		}
	};

	const Button = ({ id }) => {
		const delButton = () => {
			if (id) {
				setDoubleItems((prevItems) =>
					prevItems.filter((item) => item.id !== id)
				);
			}
		};

		return (
			<div>
				<button onClick={delButton} className="bg-black p-3 text-sm font-bold">
					X
				</button>
			</div>
		);
	};

	return (
		<div className="p-5">
			<Context.Provider
				value={{
					toCart,
					setToCart,
					expand,
					setExpand,
					filetredImages,
					setFilteredItems,
					items,
					setItems,
					doubleItems,
					setDoubleItems,
					handleAddToCart,
					total,
					Button,
				}}
			>
				<Navbar />
				<div className="flex">
					<Sidebar />
					<Card />
				</div>
			</Context.Provider>
		</div>
	);
}

export default App;
