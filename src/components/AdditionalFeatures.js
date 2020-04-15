import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { buyItem } from '../actions/featuresActions';

const AdditionalFeatures = (props) => {
	return (
		<div className="content">
			<h4>Additional Features</h4>
			{props.additionalFeatures.length > 0 ? (
				<ol type="1">
					{props.additionalFeatures.map((item) => (
						<AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		additionalFeatures: state.additionalFeatures,
	};
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures);
