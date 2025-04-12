const memberInfo = new URLSearchParams(window.location.search);
console.log(memberInfo);

document.querySelector("#results").innerHTML = `
<p>First Name: ${memberInfo.get("firstName")}</p>
<p>Last Name: ${memberInfo.get("lastName")}</p>
<p>Email: ${memberInfo.get("email")}</p>
<p>Mobile Number: ${memberInfo.get("phone")}</p>
<p>Organization: ${memberInfo.get("orgName")}</p>
<p>Submitted At: ${memberInfo.get("timestamp")}</p>`