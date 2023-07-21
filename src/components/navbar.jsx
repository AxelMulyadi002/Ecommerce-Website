import photo from '../img/static/Foto-benar.jpg';
import { Cart } from './cart';

const Navbar = () => {
	return (
		<div className="">
			<div className="flex flex-row justify-start md:justify-center sm:justify-center lg:justify-center align-middle">
				<img
					src={photo}
					alt=""
					className="foto w-24 lg:h-24 md:h-24 sm:h-24 h-24"
				/>
				<div className="w-1/2 text-justify ml-2 ">
					<h6>Hi!😁</h6>
					<p>
						My name is Axel Mulyadi i built this mini ecommerce, I hope you like
						it, if you want get know me more follow me on Linkedin and Instagram
					</p>
				</div>
				<div className="fixed right-0 ">
					<Cart />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
