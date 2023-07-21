import { Context } from '../context/Context';
import cart from '../img/static/cart-icon.png';
import deleteIcon from '../img/static/del-icon.png';
import { useContext, useState } from 'react';
import { images } from './images';
// import './all.css';

export const Cart = () => {
	const {
		expand,
		setExpand,
		toCart,
		items,
		setItems,
		doubleItems,
		setDoubleItems,
		handleAddToCart,
		total,
		delButton,
		Button,
	} = useContext(Context);

	return (
		<div className="fixed right-0 ml-auto bg-[#1b1a20] ">
			<button>
				<img
					src={expand ? cart : deleteIcon}
					alt=""
					className={`p-4${
						expand === false ? `absolute left-2 top-2 w-6` : ``
					}`}
					onClick={() => setExpand(!expand)}
				/>
			</button>
			<div
				className={` ${
					expand ? '' : 'w-full h-screen p-0 transition ease-in-out '
				}`}
			>
				{expand === false ? (
					<div className="text-white w-96">
						<div className="flex gap-8 justify-center">
							<img src={cart} alt="" className="mt-4 w-12" />
							<div className="mt-6 font-bold text-3xl">Cart</div>
						</div>

						<div className="h-96 overflow-y-scroll lg:h-72 md:h-44 sm:h-96">
							{toCart
								? doubleItems.map((item) => (
										<div className={items === true ? `hidden` : `p-4 flex`}>
											<div className="flex">
												<img src={item.images} alt="" className="w-20" />
												<div className="flex flex-col ml-2 font-semibold text-left text-lg">
													<div className="flex">
														<h2 className="">{item.text}</h2>

														<Button id={item.id} />
													</div>

													<div className="flex justify-between mt-2">
														<p className="">Sizes : {item.sizes}</p>
														<span className="text-2xl text-yellow-400">
															${item.Price}
														</span>
													</div>
													<div className="flex justify-between">
														<p className="flex-none">
															Quantity : {item.quantity}
														</p>
														<div className="">
															<button
																className="bg-black px-[15px]"
																id="Plus"
																onClick={() => handleAddToCart(item.id, true)}
															>
																+
															</button>
															<button
																className="bg-black px-[15px]"
																id="Minus"
																onClick={() => handleAddToCart(item.id, false)}
															>
																-
															</button>
															{/* </div> */}
														</div>
													</div>
												</div>
											</div>
										</div>
								  ))
								: console.log(toCart)}
						</div>

						<div className="w-full lg:h-44 md:h-32 h-44 bg-[#1b1a20] shadow-[0px_-10px_5px_0px_rgba(0,0,0,0.75)] flex justify-around items-center text-2xl border-red-500">
							<h2 className="text-[#48474c]">SubTotal</h2>
							<h2 className="text-yellow-300">{total}</h2>
						</div>
						<div className="p-4">
							<button
								className="w-full bg-black p-4"
								onClick={() => alert('terima kasih sudah membeli')}
							>
								Checkout
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};
