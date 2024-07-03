import React from 'react';

const StatusCode = ({ statusCode, index }: { statusCode: number; index: number }): JSX.Element => {
	const statusCodeTexts = [
		'Processing',
		'OK',
		'Accepted',
		'No Content',
		'Multiple Choices',
		'Use Proxy',
		'Bad Request',
		'Unauthorized',
		'Not Acceptable',
		'Conflict',
		'Unsupported Media Type',
		'Expectation Failed',
		'Misdirected Request',
		'Unprocessable Entity',
		'Failed Dependency',
		'Too Early',
		'Blocked by Windows Parental Controls',
		'HTTP Request Sent to HTTPS Port',
		'Internal Server Error',
		'Connection Timed Out',
		'SSL Handshake Failed',
	];

	return (
		<div
			className="rounded d-flex flex-column"
			style={{
				width: '550px',
				height: '420px',
			}}
		>
			<img
				style={{
					width: '100%',
					height: '100%',
				}}
				src={`../images/${statusCode}.png`}
				alt="status code"
			/>
			<div
				className="d-flex justify-content-center flex-column align-items-center gap-2"
				style={{
					backgroundColor: '#f2f2f2',
					padding: '10px',
				}}
			>
				<h3>{statusCode}</h3>
				<h3>{statusCodeTexts[index]}</h3>
			</div>
		</div>
	);
};

export default StatusCode;
