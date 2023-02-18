const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBthn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sidebar = document.querySelector(".sidebar").querySelectorAll("a");
const closeBtn = document.querySelector(".close-btn");
const closeBtn2 = document.querySelector(".close-btn2");
const showLogin = document.querySelector("#show-login");

sidebar.forEach((element) => {
  element.addEventListener("click", function () {
    sidebar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    document.querySelector(".popup").classList.remove("active");
  });
});

sidebar.forEach((element) => {
  closeBtn.addEventListener("click", function () {
    home.classList.add("active");
    showLogin.classList.remove("active");
  });
});
sidebar.forEach((element) => {
  closeBtn2.addEventListener("click", function () {
    home.classList.add("active");
    element.classList.remove("active");
  });
});

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBthn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

sidebar.forEach((a) => {
  a.addEventListener("click", function () {
    sidebar.forEach(btn.btn.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "block";
});
document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });

document.getElementById("show-form").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "flex";
});
closeBtn2.addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "none";
});

// Form Validation
function validate() {
  var uname = document.myform.uname.value;
  var pwd = document.myform.pwd.value;
  var cpwd = document.myform.cpwd.value;
  var contact = document.myform.contact.value;

  // var x = document.getElementById("uname").value;
  if (uname == null || uname == "") {
    alert("Username Should not be empty");
    return false;
  }
  if (pwd == null || pwd == "") {
    alert("Password Should not be empty");
    return false;
  } else if (pwd.length < 6) {
    alert("Password must be greater than 6 characters");
    return false;
  }
  if (cpwd != pwd) {
    alert("Password and Confirm password must match");
    return false;
  }
  if (contact == null || contact == "") {
    alert("contact number Should not be empty");
    return false;
  } else if (isNaN(contact)) {
    alert("Please enter numeric value");
    return false;
  } else if (contact.length < 10) {
    alert("Contact Number must consist 10 digits");
    return false;
  }
  return uname;
}
// function myfun() {
//   var x = document.getElementById("uname").value;
//   document.getElementById("demo").innerHTML = x;
// }
var emptyRow = "<tr><td>No product Added</td></tr>";
$(document).ready(function () {
  $("#mytable tbody").append(emptyRow);
  $("#btnAdd").click(function () {
    var name = $("#txtName").val().trim();
    var status = $("#txtStatus").val().trim();
    var payment = $("#txtPayment").val().trim();
    if (name != "" && status != "" && payment != "") {
      if ($("#mytable tbody").children().children().length == 1) {
        $("#mytable tbody").html("");
      }

      var prod_No =
        $("#mytable tbody").children().length +
        Math.floor(Math.random() * 10000) +
        10000;
      const tr = document.createElement("tr");

      var dynamicTr = `
                                      <td>${prod_No}</td>
                                      <td>${name}</td>
                                      <td>${status}</td>
                                      <td class="${
                                        payment === "Declined"
                                          ? "danger"
                                          : payment === "Pending"
                                          ? "warning"
                                          : "primary"
                                      }">${payment}</td>
                                    </td><td><button class=btn-sm >Delete</button></td></tr>

                                      `;
      tr.innerHTML = dynamicTr;
      document.querySelector("table tbody").appendChild(tr);
      $(".alert").addClass("hide");

      $("#txtName").val("");
      $("#txtStatus").val("");
      $("#txtPayment").val("");
      $(".btn-sm").click(function () {
        $(this).parent().parent().remove();
        if ($("#mytable tbody").children().children().length == 0) {
          $("#mytable tbody").append(emptyRow);
        }
      });
    } else {
      $(".alert").removeClass("hide");
      $(".alert").addClass("show");
    }
  });
  $(".close-btn3").click(function () {
    $(".alert").addClass("hide");
  });
});

// let prod_No = "";
// localStorage.clear();
// function manageData() {}
// function selectData() {}
// function editData() {}
// function manageData() {}
// document.getElementById("button").addEventListener("click", function () {
//   document.querySelector(".popup2").style.display = "flex";
// });
// document.getElementById("close-btn").addEventListener("click", function () {
//   document.querySelector(".popup2").style.display = "none";
// });
