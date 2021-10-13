const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return transport === journey.transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return minDistance <= journey.distance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((previousDistance, currentDistance) => {
    return previousDistance + currentDistance.distance;
  }, 0)
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => {
    return journey.transport   
  })
  const unique = [...new Set(result)];
  return unique;   
};

Traveller.prototype.getUniqueModesOfTransport1 = function (){
  let unique = [];  
  this.journeys.forEach((journey ) => {  
    if(!unique.includes(journey.transport )){  
      unique.push(journey.transport );  
    }  
  }); 
  return unique;  
};
 


module.exports = Traveller;
