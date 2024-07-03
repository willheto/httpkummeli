import React from 'react';
import StatusCode from './StatusCode';

const App = (): JSX.Element => {
	const statusCodes = [
		102, 200, 202, 204, 300, 305, 400, 401, 406, 409, 415, 417, 421, 422, 424, 425, 450, 497, 500, 522, 525,
	];

	return (
		<div className="d-flex flex-column gap-4 align-items-center">
			<h1 style={{ color: 'white' }}>HTTP Kummeli</h1>

			<div className="d-flex justify-content-around flex-wrap gap-4">
				{statusCodes.map((code, index) => (
					<StatusCode statusCode={code} index={index} key={index} />
				))}
			</div>
		</div>
	);
};

export default App;
