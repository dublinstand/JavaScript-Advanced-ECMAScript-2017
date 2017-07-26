//You will be passed a few pairs of widths and heights of rectangles, create objects to represent the rectangles.
// The objects should additionally have two functions area - that returns the area of the rectangle and compareTo -
// that compares the current rectangle with another and produces a number  signifying if the current rectangle is smaller
// (negative number), equal (0) or larger(positive number) than the other rectangle.
//Input
//The input will come as an array of arrays - every nested array will contain exactly 2 numbers the width and the
// height of the rectangle.
//Output
//The output must consist of an array of rectangles (objects) sorted by their area in descending order as a
//first criteria and by their width in descending order as a second criteria.


function orderRectangle(rectsData) {

    //this is our array of rectangles to be returned
    let rects = [];

    //create all rectangles from the array and push them to the rects array
    for(let [width, height] of rectsData){
        let rect = createRect(width, height);
        rects.push(rect);
    }

    //sort a to b from the array, using the inbuilt compareTo function
    rects.sort((a,b) => a.compareTo(b));
    return rects;

    function createRect(width, height) {
        //this is our object
        let rect = {
            width: width,
            height: height,
            area: () =>  width * height,
            compareTo: function (other) {
                let result = other.area() - rect.area();

                //return result if > 0 then other is larger, if < 0 then other is smaller
                //if result = 0, then go left and do the comparison again
                return result || (other.width - rect.width)
            }
        };
        return rect;
    }
}

console.log(orderRectangle([[10,5],[5,12]]));
console.log(orderRectangle([[10,5], [3,20], [5,12]]));
