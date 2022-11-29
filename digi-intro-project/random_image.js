var imgArray = [
  { jpgName: "parrot.jpg", description: "A yellow and blue ara parrot" },
  { jpgName: "elephant.jpg", description: "An elephant playing with dirt" },
  { jpgName: "turtle.jpg", description: "A swimming turtle" },
  {
    jpgName: "pumpkin.jpg",
    description: "Various pumpkins on a table next to a wooden basket",
  },
  {
    jpgName: "olive-oil.jpg",
    description: "A still-life with basil, a bottle of oil and some tomatoes",
  },
  {
    jpgName: "still-life.jpg",
    description: "A still-life with a white jug and various fruits",
  },
  { jpgName: "buildings.jpg", description: "A skyline of a city" },
  { jpgName: "bridge.jpg", description: "A brigde in between two buildings" },
  {
    jpgName: "park.jpg",
    description: "A road in the middle of a park with red-leaf trees",
  },
  { jpgName: "fashion.jpg", description: "Two tailor's mannequins" },
];

function nextImg() {
  var divOutput = document.getElementById("img-container");
  var pDescription = document.getElementById("description");
  var imgNxt = "";
  var imgDescription = "";
  //get random index that goes from 0 to length of the array
  var nxtImgIndex = Math.floor(Math.random() * imgArray.length);
  imgNxt = imgArray[nxtImgIndex].jpgName;
  imgDescription = imgArray[nxtImgIndex].description;
  //added style for having a correct border for each image
  divOutput.innerHTML = "<img src='" + imgNxt + "'>";
  pDescription.innerHTML = "Current image: " + imgDescription;
}
