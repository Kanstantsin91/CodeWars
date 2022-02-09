function deepCount(a){
    let counter = 0;
    a.forEach(el=>{
      if(!Array.isArray(el)){
        counter++;
      } else counter = ++counter + deepCount(el);
    })
    return counter;
  }
  