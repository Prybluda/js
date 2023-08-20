function getExtremeElements(array) {
    // Change code below this
    array = Array.from(array);
    console.log(array);
    const firstElement = array[0];
    const lastElementIn = array.length -1;
    const lastElement = array[lastElementIn];
    return array(firstElement, lastElement);
}