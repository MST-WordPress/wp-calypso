/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import {
	VIDEO_EDITOR_RESET_STATE,
	VIDEO_EDITOR_SET_POSTER_URL,
	VIDEO_EDITOR_SHOW_ERROR,
	VIDEO_EDITOR_SHOW_UPLOAD_PROGRESS,
	VIDEO_EDITOR_UPDATE_POSTER,
} from 'state/action-types';
import {
	resetState,
	setPosterUrl,
	showError,
	updatePoster,
	updatePosterUploadProgress,
} from '../actions';

describe( 'actions', () => {
	describe( '#resetState()', () => {
		it( 'should return an action object', () => {
			const action = resetState();

			expect( action ).to.eql( {
				type: VIDEO_EDITOR_RESET_STATE,
			} );
		} );
	} );

	describe( '#updatePoster()', () => {
		it( 'should return an action object', () => {
			const videoId = 'dummy-videoId';
			const params = { at_time: 1 };
			const action = updatePoster( videoId, params );

			expect( action ).to.eql( {
				type: VIDEO_EDITOR_UPDATE_POSTER,
				videoId,
				params
			} );
		} );
	} );

	describe( '#setPosterUrl()', () => {
		it( 'should return an action object', () => {
			const poster = 'https://i1.wp.com/videos.files.wordpress.com/dummy-guid/thumbnail.jpg?ssl=1';
			const action = setPosterUrl( poster );

			expect( action ).to.eql( {
				type: VIDEO_EDITOR_SET_POSTER_URL,
				posterUrl: poster,
			} );
		} );
	} );

	describe( '#showError()', () => {
		it( 'should return an action object', () => {
			const action = showError();

			expect( action ).to.eql( {
				type: VIDEO_EDITOR_SHOW_ERROR,
			} );
		} );
	} );

	describe( '#updatePosterUploadProgress()', () => {
		it( 'should return an action object', () => {
			const percentage = 50;
			const action = updatePosterUploadProgress( percentage );

			expect( action ).to.eql( {
				type: VIDEO_EDITOR_SHOW_UPLOAD_PROGRESS,
				percentage,
			} );
		} );
	} );
} );
