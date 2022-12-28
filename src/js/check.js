export default function checkInputCoord(value) {
    const re = /[\d]+\.[\d]{4,}/; 
    let coords = value.split(',');
    for (let crd of coords){
      if(crd.match(re) == null){
        return;
      };
    };
    return true
  };