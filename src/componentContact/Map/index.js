import React, { Component } from "react";
import { Map, GoogleApiWrapper, GoogleMap } from "google-maps-react";
import "./style.css";
import { render } from "@testing-library/react";

class MapTravel extends Component {
  componentDidMount() {
    this.renderMap();
  }
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCFCKimp73AwDmImH93Rvw7nhrFWSnINLk&callback=initMap"
    );
    window.initMap = this.initMap;
  };
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  };
  render() {
    return (
      <>
        <div id="map"></div>
      </>
    );
  }
}

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default MapTravel;
