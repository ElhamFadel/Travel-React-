import React, { Component } from "react";
import styled from "styled-components";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <SectionMap>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </SectionMap>
    );
  }
}
const SectionMap = styled.section`
  position: relative;
  height: 100vh;
  margin: 2rem 0;
`;

export default GoogleApiWrapper({
  apiKey: "AIzaSyCpqCFChdCIc6jtUwcqhLucHRJeqiOHfuc",
})(MapContainer);
