import React, { Component } from "react";

class ShopApi extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    // using native fetch
    fetch(
      "https://firestore.googleapis.com/v1/projects/crwn-clothing1/databases/(default)/documents/collections"
    )
      .then((response) => response.json())
      .then((response) => console.log(response));

    // regular api calls, not updating as changes in db happens
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // asycnhronous api calls, updating with db
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    return (
      <div>
        <p>
          This is what the different api methods for fetching data look like
        </p>
      </div>
    );
  }
}

export default ShopApi;
