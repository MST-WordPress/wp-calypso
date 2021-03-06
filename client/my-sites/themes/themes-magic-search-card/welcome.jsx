/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { noop, intersection } from 'lodash';
import classNames from 'classnames';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import i18n from 'i18n-calypso';
import { taxonomiesWelcomeWhitelist, taxonomyToGridicon } from './taxonomies-config.js';

class MagicSearchWelcome extends React.Component {

	constructor( props ) {
		super( props );
	}

	state = { suggestionPosition: -1 }

	onMouseDown = ( event ) => {
		this.props.suggestionsCallback( event.target.textContent + ':' );
		event.stopPropagation();
		event.preventDefault();
	}

	incPosition = () => {
		const position = ( this.state.suggestionPosition + 1 ) % this.props.taxonomies.length;
		this.setState( {
			suggestionPosition: position,
		} );
	}

	decPosition = () => {
		const position = ( this.state.suggestionPosition - 1 );
		this.setState( {
			suggestionPosition: position < 0 ? this.props.taxonomies.length - 1 : position
		} );
	}

	handleKeyEvent = ( event ) => {
		switch ( event.key ) {
			case 'ArrowDown' :
				this.incPosition();
				event.preventDefault();
				break;
			case 'ArrowUp' :
				this.decPosition();
				event.preventDefault();
				break;
			case 'Enter' :
				const position = this.state.suggestionPosition;
				if ( position !== -1 ) {
					this.props.suggestionsCallback( this.props.taxonomies[ position ] + ':' );
					event.stopPropagation();
					event.preventDefault();
				}
				break;
		}
	}

	renderToken = ( taxonomy ) => {
		const themesTokenTypeClass = classNames(
			'themes-magic-search-card__welcome-taxonomy',
			'themes-magic-search-card__welcome-taxonomy-type-' + taxonomy,
			{ 'themes-magic-search-card__welcome-taxonomy-highlight':
				this.props.taxonomies[ this.state.suggestionPosition ] === taxonomy }
		);

		return (
			<div
				className={ themesTokenTypeClass }
				onMouseDownCapture={ this.onMouseDown }
				key={ taxonomy }
			>
				<Gridicon icon={ taxonomyToGridicon( taxonomy ) } className="themes-magic-search-card__welcome-taxonomy-icon" size={ 18 } />
				{ taxonomy }
			</div>
		);
	}

	renderTaxonomies = () => {
		const { taxonomies } = this.props;
		return intersection( taxonomies, taxonomiesWelcomeWhitelist ).map( ( taxonomy ) => this.renderToken( taxonomy ) );
	}

	render() {
		return (
			<div className="themes-magic-search-card__welcome" >
				<div className="themes-magic-search-card__welcome-header">{ i18n.translate( 'Search by' ) }</div>
				<div className="themes-magic-search-card__welcome-taxonomies">
					{ this.renderTaxonomies() }
				</div>
			</div>
		);
	}
}

MagicSearchWelcome.propTypes = {
	taxonomies: PropTypes.array,
	topSearches: PropTypes.array,
	suggestionsCallback: PropTypes.func,
};

MagicSearchWelcome.defaultProps = {
	taxonomies: [],
	topSearches: [],
	suggestionsCallback: noop
};

export default MagicSearchWelcome;
