import { useState, useEffect, useContext } from 'react';
import { getData } from './services';
import { Context } from '../context/Context';

export const Card = () => {
	const [isHover, setHover] = useState(-1);
	const {
		filetredImages,
		setFilteredItems,
		expand,
		setExpand,
		toCart,
		setToCart,
		setItems,
		items,
		doubleItems,
		setDoubleItems,
		handleAddToCart,
		App,
	} = useContext(Context);

	useEffect(() => {
		setFilteredItems(getData());
	}, []);

	return (
		<div className="p-2 ml-5">
			<div className="mt-5">
				<h5 className="text-left text-3xl ">Products: </h5>
				<div className="grid w-75 mt-5 gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
					{filetredImages &&
						filetredImages.map((type) => (
							<div key={type.id} className="ease-in duration-300 mt-5">
								<img
									src={isHover === type.id ? type.hover : type.source}
									alt="gambar"
									className="card-img-top"
									onMouseEnter={() => setHover(type.id)}
									onMouseLeave={() => setHover(-1)}
								/>

								<div className="text-center">
									<h5 className="text-2xl">{type.text}</h5>
									<div className="mt-5 font-semibold text-2xl">
										<span className="font-bold text-4xl">${type.Price}</span>
									</div>
									<p
										className="text-2xl mt-3 text-[#a8a7a7]
				"
									>
										{type.subText}
									</p>
									<button
										type="button"
										className={`btn w-full bg-slate-950 h-16 text-white text-2xl mt-5 hover:bg-[#efcd38] ${expand}`}
										onClick={() => {
											setExpand(false);
											setToCart(true);
											// setItems([...items, type.id - 1]);
											handleAddToCart(type.id);
										}}
									>
										Add to cart
									</button>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
