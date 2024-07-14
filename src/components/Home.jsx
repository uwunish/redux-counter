import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	incrementByAmount,
} from "../redux/slices/counterSlice";

function Home() {
	const dispatch = useDispatch();
	const value = useSelector((state) => state.counter.value);

	function handleIncrement() {
		dispatch(increment());
	}

	function handleDecrement() {
		dispatch(decrement());
	}

	return (
		<div className="mt-10">
			<div>
				<h1 className="text-2xl font-bold text-gray-700">{value}</h1>
			</div>
			<div className="flex justify-center mt-4 space-x-4 gap-5">
				<button
					onClick={handleIncrement}
					className="font-medium text-white bg-orange-800 py-2 px-8 rounded-full">
					<span className="text-3xl relative bottom-0.5">+</span>
				</button>
				<button
					onClick={handleDecrement}
					className="font-medium text-white bg-orange-800 py-2 px-8 rounded-full">
					<span className="text-3xl relative bottom-0.5">-</span>
				</button>
			</div>
		</div>
	);
}

export default Home;
