// ==UserScript==
// @name			mail163 
// @description		Auto-login of 163 mail
// @version			0.0.2
// @match			http://mail.163.com/*
// ==/UserScript==
// Copyright (c) 2015, Genghis Yang

//replace your username and password in the following expression;
var MY_USERNAME = "your_user_name@163.com";
var MY_PASSWORD = "your_password";

function autoFillForm() {
	var loginForm = document.getElementById("login163");
	if (loginForm) {
		var username = document.getElementById("idInput");
		var password = document.getElementById("pwdInput");
		var submit = document.getElementById("loginBtn");
		username.value = MY_USERNAME;
		password.value = MY_PASSWORD;
		submit.click();
	}
}

window.addEventListener("load", function() {
	setTimeout(autoFillForm, 0);
}, false);
