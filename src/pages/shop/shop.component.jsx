import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions.js';

import './shop.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = { isLoading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = await convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
