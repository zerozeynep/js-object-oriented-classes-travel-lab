class Driver {
  constructor(name,date){
    this.name = name
    this.date = date
  }

  startDate() {
    return new Date(this.date)
  }

  yearsExperienceFromBeginningOf(year) {
    return parseInt(year)-this.startDate().getFullYear()
    
  }

}

class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }



  blocksTravelled(){
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ]
    
    return Math.abs(this.endingLocation.vertical-this.beginningLocation.vertical)+Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal))

  }

  estimatedTime(peakHour){
    if(peakHour){
      return this.blocksTravelled()/2
    }
    else{
      return this.blocksTravelled()/3

    }

  }
}
