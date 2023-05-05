// console.log(navigator.cookieEnabled);
// document.cookie = "firstname = mugisho; expires=sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastname = mugisho; expires=sun, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie);

// setCookie("email", "roger@gmail.com", 235);

// deleteCookue("email");
// deleteCookue("firstname");

// console.log(document.cookie);

// function setCookie(name, value, daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//     let expires = "expires = " + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// function deleteCookue(name) {
//     setCookie(name, null, null);
// }