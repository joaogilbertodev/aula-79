var listPresent=[];
function send(){
    var s1=document.getElementById("n1").value 
    var s2=document.getElementById("n2").value 
    var s3=document.getElementById("n3").value 
    var s4=document.getElementById("n4").value 

    listPresent.push(s1)
    listPresent.push(s2)
    listPresent.push(s3)
    listPresent.push(s4)

    document.getElementById("show").innerHTML=listPresent
}

function org(){
    var secondList=listPresent
    secondList.sort()
    document.getElementById("show").innerHTML=secondList
}