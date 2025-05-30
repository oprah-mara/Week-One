

// function userInfo(){
    
// let userName = document.getElementById("nameInput").value.trim().toLowerCase();
// let userAge = document.getElementById("ageInput").value.trim();
// let userCountry = document.getElementById("countryInput").value.trim().toLowerCase();
// let userOutput = document.getElementById("result");


// if(userAge < 18 || userAge > 60 ){
//     userOutput.innerHTML = `Dear ${userName} from ${userCountry} because you're ${userAge} you're unqualified to enroll at sheCodes`;
// } else {
//     userOutput.innerHTML = `Dear ${userName} from ${userCountry} you successfully enrolled at sheCodes`;
// }
// if (!userName || isNaN(userAge) || !userCountry) {
//   result.innerHTML = "⚠️ Please fill out all fields correctly.";
//   return;
// }
// }

// let userButton = document.getElementById("checkBtn");
// userButton.addEventListener("click", userInfo);









// function userInteraction(){

//     let userName = document.querySelector("#nameInput").value.toLowerCase().trim();
//     let userAge = document.querySelector("#ageInput").value.toLowerCase().trim();
//     let userCountry = document.querySelector("#countryInput").value.toLowerCase().trim();

//     let userOutput = document.querySelector("#result");


//     if(userAge < 18 || userAge > 61){
//         userOutput.innerHTML = `Dear ${userName} from ${userCountry} due to our Age limit youre unqualifed to enroll!`;
//     }else{
//         userOutput.innerHTML = `Dear ${userName} from ${userCountry} you're qualified to enroll!`;
//     }

//     if(isNaN(userAge) || !userCountry || !userName){
//         userOutput.innerHTML = `Please Fill in the required inputs`;
//         return;
//     }
// }   
//     let userBtn = document.querySelector("#checkBtn");
//     userBtn.addEventListener("click", userInteraction);







function userDetails(){

    let userName = document.getElementById("nameInput").value.toLowerCase().trim();
    let userAge = parseInt(document.getElementById("ageInput").value.trim());
    let userCountry = document.getElementById("countryInput").value.toLowerCase().trim();

    let userOutput = document.getElementById("result");

    if (userAge < 18 || userAge > 60){
        userOutput.innerHTML = `❌ Dear ${userName} you dont qualify due to our Age limit`;
    }else {
        userOutput.innerHTML = `✅ Dear ${userName} from ${userCountry} congratulations on your enrollment`;
    }

    if(isNaN(userAge) || !userName || !userCountry){
        userOutput.innerHTML = `Kindly fill in the required information`;
        return;
    }
}
let userBtn = document.getElementById("checkBtn");
userBtn.addEventListener ("click", userDetails);