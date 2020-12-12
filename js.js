var obj= {title:false, first:false, last:false, Position:false, company:false, 
        busines:false, street:false, additional:false, zip:false, place:false,
        country:false, code:false, phone:false, email:false,terms:false};
function validation(){
    if (validTitle()){
        obj.title=false;
        alert(document.getElementById("selectorT").style);
        openMenu("უნდა იყოს არჩეული Tittle");
        return;
    }else{
        obj.title=true;
        makenormal(document.getElementById("selectorT").style);
    }
    
    if (validname(document.getElementById("fname").value)){
        obj.first=true;
        makenormal(document.getElementById("fname").style);
    }else{
        obj.first=false;
        alert(document.getElementById("fname").style);
        openMenu("უნდა ეწეროს სახელი სწორად , მინიმუმ 2 სიმბოლო და არაფერი სიმბოლოს გარდა,ასევე ინგლისური ასოებით.");
        return
    }

    if (validname(document.getElementById("lname").value)){
        obj.last=true;
        makenormal(document.getElementById("lname").style);
    }else{
        obj.last=false;
        alert(document.getElementById("lname").style);
        openMenu("უნდა ეწეროს გვარი სწორად , მინიმუმ 2 სიმბოლო და არაფერი სიმბოლოს გარდა,ასევე ინგლისური ასოებით.");
        return;
    }

    if (validPosition()){
        obj.Position=false;
        alert(document.getElementById("selectorP").style);
        openMenu("უნდა იყოს არჩეული Position");
        return;
    }else{
        obj.Position=true;
        makenormal(document.getElementById("selectorP").style);
    }

    if (validCompany()){
        obj.company=true;
        makenormal(document.getElementById("company").style);
    }else{
        obj.company=false;
        alert(document.getElementById("company").style);
        openMenu("კომპანიის სახელი უნდა შედგებოდეს ერთი სიტყვისგან და პირველი ასო უნდა იყოს დიდი");
        return;
    }

    if (validstr()){
        obj.street=true;
        makenormal1(document.getElementById("str").style);
    }else{
        obj.street=false;
        alert(document.getElementById("str").style);
        openMenu("ქუჩის სახელი უნდა იყოს მინიმუმ 10 სიმბოლოსგან შემდგარი ასევე შეიცავდეს მხოლოდ მძიმეს , სიმბოლოებს და რიცხვებს");
        return;
    }

    if (validAdditional()){
        obj.additional=true;
        makenormal1(document.getElementById("addit").style);
    }else{
        obj.additional=false;
        alert(document.getElementById("addit").style);
        openMenu("ინფორმაცია უნდა იყოს მინიმუმ 10 სიმბოლოსგან შემდგარი.");
        return;
    }

    if (validZip()){
        obj.zip=true;
        makenormal1(document.getElementById("zip").style);
    }else{
        obj.zip=false;
        alert(document.getElementById("zip").style);
        openMenu("კოდი უნდა შეიცავდეს მხოლოდ ციფრებს და მინიმუმ 4 სიმბოლოს");
        return;
    }

    if (validPlace()){
        obj.place=false;
        alert(document.getElementById("selectorPl").style);
        openMenu("აირჩიეთ მითითებული ადგილიდან ერთ–ერთი.");
        return;
    }else{
        obj.place=true;
        makenormal1(document.getElementById("selectorPl").style);
    }

    if (validCountry()){
        alert(document.getElementById("selectorC").style);
        openMenu("აირჩიეთ მითითებული ქვეყანა.");
        return;
    }else{
        makenormal1(document.getElementById("selectorC").style);
    }

    if (validCode()){
        obj.code=true;
        makenormal1(document.getElementById("code").style);
    }else{
        obj.code=false;
        alert(document.getElementById("code").style);
        openMenu("პირველი სიმბოლო უნდა იყოს  '+' ხოლო მინიმუმ უნდა შედგებოდეს 3 სიმბოლოსგან.");
        return;
    }

    if (validPhone()){
        obj.phone=true;
        makenormal1(document.getElementById("phone").style);
    }else{
        obj.phone=false;
        alert(document.getElementById("phone").style);
        openMenu("ტელეფონის ნომერი უნდა შეიცავდეს მხოლოდ ციფრებს და ზუსტად 6 ცალს");
        return;
    }

    if (validEmail()){
        obj.email=true;
        makenormal1(document.getElementById("email").style);
    }else{
        obj.email=false;
        alert(document.getElementById("email").style);
        openMenu("ჩაწერეთ ვალიდური იმეილი.");
        return;
    }

    if (validCheck()){
        obj.checked=true;
        makenormal1(document.getElementById("check").style);
    }else{
        obj.checked=false
        alert(document.getElementById("check").style);
        openMenu("დარწმუნდით რომ მონიშნული გაქვთ ჩეკბოქსი");
        return;
    }

    openMenu("გილოცავთ წარმატებით გაიარეთ რეგისტრაცია");
}

//for vaildating email.
function validEmail(){
    let cnt=0,ans=0,cnt1=0,ans1=0;
    let inp=document.getElementById("email").value;
    for (var i=0; i<inp.length; i++){
        if (inp[i]=='@'){
            cnt++;
            ans=i;
        }
        if (inp[i]=='.'&&cnt!=0){
            cnt1++;
            ans1=i;
        }
    }
    if (cnt>1||cnt==0){
        return false;
    }
    if (cnt1>1||cnt1==0){
        return false;
    }
    if (inp.length-ans<3||ans==0){
        return false;
    }
    if (inp.length-ans1<=2||ans1-ans<=2){
        return false;
    }
    return true;
}

//for validating checkbox.
function validCheck(){
    return document.getElementById("check").checked;
}

// for making error colors and after fixing error color.
function alert(x){
    x.backgroundColor="red";
    x.color="white";
}
function makenormal(x){
    x.backgroundColor="white";
    x.color="rgb(123, 98, 218)";
}

//for making error colors and after fixing error color for second page.
function makenormal1(x){
    x.backgroundColor="rgb(72, 53, 212)";
    x.color="rgb(177, 175, 175)";
}

//for validate phone.
function validPhone(){
    let numbers=/^[0-9]+$/;
    let inp=document.getElementById("phone").value;
    if (inp.length!=6){
        return false;
    }else{
        return  inp.match(numbers);
    }
}

//for validate tittle.
function validTitle(){
    return document.getElementById("selectorT").value=="Title";
}

//for validate position
function validPosition(){
    return document.getElementById("selectorP").value=="Position";
}

//for validating Company
function validCompany(){
    let inp=document.getElementById("company").value;
    if (inp==""){
        return false;
    }
    if ( inp[0] !== inp[0].toUpperCase() ){
        return false;
    }else{
        console.log(1);
        for (i=0; i<inp.length; i++){
            if (inp[i]==' '){
                return false;
            }
        }
        return true;
    }
}

//for validating code.
function validCode(){
    let numbers=/^[0-9]+$/;
    let inp=document.getElementById("code").value;
    if (inp[0]!="+"){
        return false;
    }
    if (inp.length<3){
        return false;
    }else{
        inp=inp.substr(1);
        return inp.match(numbers);
    }
}

//for validating place.
function validPlace(){
    return document.getElementById("selectorPl").value=="place";
}

//for validating country.
function validCountry(){
    return document.getElementById("selectorC").value=="Country";
}

//for validate first name.
function validname(x){
    let letters = /^[A-Za-z]+$/;
    if (x.length<=2){
        return false;
    }else{
        return x.match(letters);
    }

}

//for validate zip.
function validZip(){
    let numbers = /^[0-9]+$/;
    let inp=document.getElementById("zip").value;
    if (inp.length<4){
        return false;
    }else{
        return inp.match(numbers);
    }
}

//for validate str.
function validstr(){
    let letters = /^[A-Za-z]+$/;
    let inp=document.getElementById("str").value;
    if (inp.length<10){
        return false;
    }else{
        for (i=0; i<inp.length; i++){
            if (inp[i].match(letters)||isNumeric(inp[i])||inp[i]==','){
                continue;
            }else{
                return false;
            }
        }
        return true;
    }
}

//for open and close pop-up menu
function openMenu(txt) {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("menu").innerHTML=txt;
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

//validate aditional info.
function validAdditional(){
    let inp=document.getElementById("addit").value;
    if (inp.length<10){
        return false;
    }else{
        return true;
    }
}



function isNumeric(x){
    return !isNaN(x);
}