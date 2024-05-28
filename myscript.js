var uniqueIDv, firstnameV, middlenameV,surnameV, addressV, emailV;

function readFom() {
  uniqueIDv = document.getElementById("uniqueID").value;
  firstnameV = document.getElementById("firstname").value;
  middlenameV = document.getElementById("middlename").value;
  surnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  console.log(uniqueIDv, firstnameV, middlenameV, surnameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueIDv)
    .set({
      uniqueID: uniqueIDv,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
  alert("Data Inserted");
  document.getElementById("uniqueID").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueIDv)
    .on("value", function (snap) {
      document.getElementById("uniqueID").value = snap.val().uniqueID;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("middlename").value = snap.val().middlename;
      document.getElementById("surname").value = snap.val().surname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueIDv)
    .update({
      //   uniqueID: uniqueIDV,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      email: emailV
    });
  alert("Data Update");
  document.getElementById("uniqueID").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueIDv)
    .remove();
  alert("Data Deleted");
  document.getElementById("uniqueID").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
