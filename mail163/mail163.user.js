// ==UserScript==
// @name			mail163 
// @description		Auto-login of 163 mail
// @version			0.3.2
// @match			http://mail.163.com/*
// ==/UserScript==
// Copyright (c) 2015, Genghis Yang

//replace your username and password in the following expression;
var MY_USERNAME = "your_user_name@163.com";
var MY_PASSWORD = "your_password";

function autoFillForm() {
	var loginForm = document.getElementById("login163");
	alert(loginForm);
	if (loginForm) {
		var username = document.getElementById("idInput");
		alert(username);
		var password = document.getElementById("pwdInput");
		alert(password);
		var submit = document.getElementById("loginBtn");
		alert("Submit:" + submit);
		username.value = MY_USERNAME;
		password.value = MY_PASSWORD;
		submit.click();
	}
}

window.addEventListener("load", function() {
	setTimeout(autoFillForm, 0);
}, false);
