import React from 'react';
import { Link } from 'react-router-dom';

const Common = (props) => {
	return (
		<>
			<div id='header'>
				<div className="container-fluid">
					<div className="row">
						<div className="mx-auto col-10">
							<div className="row d-flex align-items-center">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
									<h1>
										{props.name}
									</h1>
									<h2 className="my-3">
										We are team of talented developer making websites
									</h2>
									<div className="mt-3">
										<Link to={props.visit} className='btn-get-started'>{props.btname}</Link>
									</div>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 header-img">
									<img className='img-fluid animated' src={props.imgsrc} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Common
