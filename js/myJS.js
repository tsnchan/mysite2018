
var username = "terence";
var email = "terence.sn.chan@gmail.com"

function getConfirmation() {
    var retVal = confirm("Do you want to continue?");

    if(retVal == true) {
/*                     document.write("User will proceed ...")
        return true */
        document.getElementById("my_name").value = username;
        document.getElementById("my_email").value = email;
    } else {
/*                     document.write("User has cancelled the operation");
        return false; */
    }
}