import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

import { selectIsShopCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsShopCollectionsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
