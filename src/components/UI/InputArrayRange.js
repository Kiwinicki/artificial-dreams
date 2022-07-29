import React, { forwardRef, useState } from 'react';

export const InputArrayRange = forwardRef(
	({ name, stepList = [], onChange, value, ...rest }, ref) => {
		const [currentStepIndex, setCurrentStepIndex] = useState(
			stepList.findIndex((el) => el === value)
		);

		const handleInputChange = (e) => {
			setCurrentStepIndex(parseInt(e.currentTarget.value));
		};

		return (
			<div>
				<input
					ref={ref}
					onInput={handleInputChange}
					onChange={(e) => onChange(stepList[parseInt(e.currentTarget.value)])}
					type="range"
					min={0}
					max={stepList.length - 1}
					value={currentStepIndex}
					step="1"
					list="range-list"
					{...rest}
				/>
				<datalist id="range-list">
					{stepList.map((step, i) => (
						<option value={step} key={i}>
							{step}
						</option>
					))}
				</datalist>
			</div>
		);
	}
);
