var httpPost = function(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
     
    /**** Alternatively, we can redirect user to a diffrent page using below code. Here based on response text user will be directed to either "Fail.html" or "Success.html"
        // window.location.href = xmlHttp.responseText+'.html'; ***/
        if(xmlHttp.responseText == "Success")
        {
            document.getElementById('resultMessage').innerHTML="Login Successful!";
            // hide the other controls and only display the success message
            document.getElementById("Message").style.visibility = "hidden";
            document.getElementById("username").style.visibility = "hidden";
            document.getElementById("password").style.visibility = "hidden";
            document.getElementById("usernameSpace").style.visibility = "hidden";
            document.getElementById("passwordSpace").style.visibility = "hidden";
            document.getElementById("loginButton").style.visibility = "hidden";
        }
        if(xmlHttp.responseText == "Fail")
        {
            document.getElementById('Message').innerHTML="<b>Login Failed! Please login using correct credentials.</b>";
            document.getElementById('username').value="";
            document.getElementById('password').value="";
        }
        
        
    }
    const params = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    xmlHttp.open("POST", theUrl, true);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(JSON.stringify(params));
}
var validateUser = function() {
      console.log("inside validateUser():" + document.getElementById('username').value);
    if(document.getElementById('username').value =="" || document.getElementById('password').value =="")
    {
        document.getElementById('Message').innerHTML="Please enter Username and Password!";
        return;
    }
    else {
            getUser();
    }       
}

var getUser = function() {
    var theURL = '/users/';
    httpPost(theURL);
};