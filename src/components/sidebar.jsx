import { buttons } from './images';
import { Context } from '../context/Context';
import { useContext } from 'react';
import { getData } from './services';

export const Sidebar = () => {
	const { setFilteredItems } = useContext(Context);

	const filterSizes = (size) => {
		let filteredItems = getData().filter((type) => type.sizes === size);
		return filteredItems;
	};

	const handleFilter = (e) => {
		let value = e.target.value;
		value !== 'all'
			? setFilteredItems(filterSizes(value))
			: setFilteredItems(getData());
	};

	return (
		<>
			<div className="p-2">
				<h5 className="text-left text-3xl mt-5 w-24">Sizes : </h5>
				<div className="mt-9 text-1xl grid grid-cols-2 gap-5 place-content-1enter lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4">
					{buttons &&
						buttons.map((type, index) => (
							<button
								key={index}
								value={type.value}
								className="rounded-full border p-3 text-center bg-[#ececec] w-12 h-12 font-semibold"
								onClick={handleFilter}
							>
								{type.name}
							</button>
						))}
				</div>
			</div>
		</>
	);
};
