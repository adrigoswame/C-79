name_of_the_students_array=[];
function submit(){
    var n1=document.getElementById("student1").value;
    var n2=document.getElementById("student2").value;
    var n3=document.getElementById("student3").value;
    var n4=document.getElementById("student4").value;
    name_of_the_students_array.push(n1);
    name_of_the_students_array.push(n2);
    name_of_the_students_array.push(n3);
    name_of_the_students_array.push(n4);
    console.log(name_of_the_students_array);
document.getElementById("displayname").innerHTML=name_of_the_students_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";}
function sorting(){
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
document.getElementById("displayname").innerHTML=name_of_the_students_array;
}

















