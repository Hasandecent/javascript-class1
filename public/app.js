// alert ("HELLO WORLD") ;

// var name = "Hasan";
// alert (name);


// var name = "Hasan";

// var age = 20;


// alert(name + age)


// var firstName = "Hasan"
// var lastNamE = "Decent"

// alert(firstName +  lastNamE)


///////////  MATH EQUATIONS  //////////

//  var a = 12;

//  var result = a-- + ++a + --a + ++a - a++ + a-- - a-- + a - a
//               12  +  12 +  11 +  12 -  12 +  13 - 12  + 11 - 11
// //    38  = Answer

//  alert(result)


///Input From User///

        //built in method hai user sy value ky liye///

// var userName  = prompt("User Name")

//  document.write(userName)



///////////  ASSIGNMENT  ////////////

var name = prompt("Enter Your Name");
var father_name = prompt("Enter Father Name");
var schoolName = prompt("Enter Your School Name");
var standard = prompt("Enter Your Class");
var rollNumber = prompt("Enter Your Roll Number");
var isl = prompt("Enter Your Islamiat Marks");
var urdu = prompt("Enter Your Urdu Marks");
var eng = prompt("Enter Your English Marks");
var maths = prompt("Enter Your Maths Marks");
var science = prompt("Enter Your Science Marks");
var obtainedMarks = parseInt(isl) + parseInt(urdu) + parseInt(eng) + parseInt(maths) + parseInt(science);
var total = 500
var percentage = (obtainedMarks / total) * 100

document.write("Your Name :" + name)
document.write("<br> Father Name :" + father_name)
document.write("<br> Your School Name :" + schoolName)
document.write("<br> Your Class :" + standard)
document.write("<br> Your Roll Number :" + rollNumber)
document.write("<br> Obtained Marks : " + obtainedMarks)
document.write("<br> Total Marks : " + total)
document.write("<br> Percentage : " + percentage + "%")