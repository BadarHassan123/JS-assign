// alert("You have submited");

    // var abc = "Hello JS";
    // alert(abc);

    // var a = 10;
    // var b = 30;
    // var c = a+b;

    // alert(c)

    // var a = 10;
    // var b = "40";
    // var c = b-a;

    // alert(c)

    // var a=10;
    // var b= 20;

    // a++;
    // b--;

    // console.log(a);
    // console.log(b);

    // var a = 10
    // var b = 20

    // var c=a++ - --b + a - b + b - --a - ++a + --b;

    // console.log(c)

// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter Last name: ");
// var city = prompt("Enter city", "Karachi");
// console.log(firstName);
// console.log(lastName);
// console.log(city);

// var sub1 = prompt("Enter marks 1");
// var sub2 = prompt("Enter marks 2");
// var sub3 = prompt("Enter marks 3");
// var sub4 = prompt("Enter marks 4");
// var sub5 = prompt("Enter marks 5");
// console.log(sub1);
// console.log(sub2);
// console.log(sub3);
// console.log(sub4);
// console.log(sub5);

// var total = parseFloat(sub2) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5)


// var per = parseFloat(total / 500) * 100;
// console.log("Total Marks",total);
// console.log("Percentage",per);
// if(total<600)
// {
// if(per>90)
// {
//     console.log("A+");
// }
// else if(per>70 && per<=90)
// {
//     console.log("B+");
// }
// else if(per>60 && per<=70)
// {
//     console.log("C+");
// }
// else
// {
//     console.log("Fail");
// }
// }
// else
// {
//     console.log("Ziyada marks btare ho bhai");
// }

// var officer = "yes";
// if(officer == "yes")
// {
//     console.log("Document submitted");
// }
// else
// {
//     console.log("wapsi");
// }



// var age = prompt("Enter your age");
// var studentCard = false;

// if(age>18)
// {
//     console.log("Student Allow");
// }
// else if(studentCard == true)
// {
//     console.log("Student allow on student card");
// }
// else
// {
//     console.log("Not allow");
// }
// var a = ["a","b","c","d"];
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }

// var a = ["a","b","c","d","e","f","g","h"]
// var b = "f";
// for(let i=0;i<a.length;i++)
// {
//     if(b==a[i])
//     {
//         found= true;
//         alert("Element found");
        
//     }
// }


// var a = ["a","b","c","d","e","f","g","h"]
// var b = "f";
// var found = false;
// for(let i=0;i<a.length;i++)
// {
//     if(b==a[i])
//     {
//         found= true;
//         break;
//     }
// }
// if(found == true)
// {
//     alert("element found");
// }
// else
// {
//     alert("not found");
// }

var a = ["a","b","c","d","e"];
var b = [1,2,3,4,5];

for(i=0;i<a.length;i++)
{
    for(j=0;j<b.length;j++)
    {
        console.log(a[i]+b[j]);
    }
}
