import React, { forwardRef } from 'react';

export const InputRange = forwardRef((props, ref) => {
	return <input type="range" {...props} ref={ref} />;
});
