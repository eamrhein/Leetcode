function moveElementToEnd(array, toMove) {
  let elementCount = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] === toMove) {
        elementCount += 1;
        array.splice(i, 1);
        i-=1;
      }
    }
    let concat = new Array(elementCount).fill(toMove)
    array.push.apply(array, concat)
	return array
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
