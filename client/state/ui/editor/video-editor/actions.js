/**
 * Internal dependencies
 */
import {
	VIDEO_EDITOR_POSTER_UPDATE,
	VIDEO_EDITOR_POSTER_UPDATE_FAILURE,
	VIDEO_EDITOR_POSTER_UPDATE_SUCCESS,
	VIDEO_EDITOR_STATE_RESET,
	VIDEO_EDITOR_STATE_RESET_POSTER,
	VIDEO_SHOW_UPLOAD_PROGRESS,
} from 'state/action-types';

/**
 * Returns an action object to be used for resetting the video editor state.
 *
 * @return {Object} Action object
 */
export const resetVideoEditorState = () => {
	return {
		type: VIDEO_EDITOR_STATE_RESET,
	};
};

/**
 * Returns an action object to be used for resetting the video editor poster state.
 *
 * @return {Object} Action object
 */
export function resetVideoEditorPosterState() {
	return {
		type: VIDEO_EDITOR_STATE_RESET_POSTER,
	};
}

/**
 * Returns an action object to indicate that a request has been made to update the video poster.
 *
 * @param {String} videoId  ID of the video
 * @param {Object} params  Poster data
 * @param {Number} [params.at_time]  Number of seconds into the video at which to get the poster
 * @param {Object} [params.file]  An image to attach to the video
 * @return {Object} Action object
 */
export const updateVideoEditorPoster = ( videoId, params ) => {
	return {
		type: VIDEO_EDITOR_POSTER_UPDATE,
		videoId,
		params,
	};
};

/**
 * Returns an action object to indicate that the poster for the video has been updated successfully..
 *
 * @param  {String} poster Poster URL
 * @return {Object} Action object
 */
export const updateVideoEditorPosterSuccess = poster => {
	return {
		type: VIDEO_EDITOR_POSTER_UPDATE_SUCCESS,
		poster,
	};
};

/**
 * Returns an action object to indicate that the poster for the video failed to update.
 *
 * @return {Object} Action object
 */
export const updateVideoEditorPosterFailure = () => {
	return {
		type: VIDEO_EDITOR_POSTER_UPDATE_FAILURE,
	};
};

/**
 * Returns an action object to indicate the poster upload progress.
 *
 * @param  {String} percentage  Upload progress percentage
 * @return {Object} Action object
 */
export const updatePosterUploadProgress = percentage => {
	return {
		type: VIDEO_SHOW_UPLOAD_PROGRESS,
		percentage,
	};
};
