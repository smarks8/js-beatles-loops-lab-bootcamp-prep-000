function theBealtesPlay(musiciansArray, instumentsArray){
  var newArray = [];
  for(var i = 0; i<musiciansArray.length;i++){
    newArray.push(musiciansArray[i] + "plays" + instumentsArray)
  }
  return newArray
}