/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';

const VideoEditorButtons = ( { onCancel, onSelectFrame, onUploadImage, translate } ) => {
	return (
		<div className="video-editor__buttons">
			{ onCancel &&
				<Button
					className="video-editor__buttons-button"
					onClick={ onCancel }
				>
					{ translate( 'Cancel' ) }
				</Button>
			}
			<Button
				className="video-editor__buttons-button"
				onClick={ onUploadImage }
			>
				{ translate( 'Upload Image' ) }
			</Button>
			<Button
				className="video-editor__buttons-button"
				primary
				onClick={ onSelectFrame }
			>
				{ translate( 'Select Frame' ) }
			</Button>
		</div>
	);
};

VideoEditorButtons.propTypes = {
	onCancel: PropTypes.func,
	onSelectFrame: PropTypes.func,
	onUploadImage: PropTypes.func,
};

VideoEditorButtons.defaultProps = {
	onCancel: noop,
	onSelectFrame: noop,
	onUploadImage: noop,
};

export default connect()( localize( VideoEditorButtons ) );
