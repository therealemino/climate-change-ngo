// alert("hi");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(".navbar-toggler").click(function(){
  $(".animated-icon").toggleClass("open");
});

const info = document.getElementById("flutterwave");
// console.log(info.elements);

info.addEventListener("submit", payNow);

function payNow (e) {
  //prevent default submission
  e.preventDefault();

  //set config
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-99b1d872a3a0800009486c4a58ed90ab-X",
    tx_ref: "BETTER_EARTH"+ Math.floor((Math.random()*100000000)+1),
    amount: info.amount.value,
    currency: "NGN",
    country: "NG",
    customer: {
      email: info.elements.customerEmail.value,
      phonenumber: info.elements.customerPhoneNumber.value,
      name: info.elements.customerName.value
    },
    callback: function (data) {
      // console.log(data);
      const refrence = data.tx_ref;
      alert("Transaction Succesful! Id:" + refrence);
    },
    customizations: {
      title: "Better Earth - Donate",
      description: "Donate to our Organization",
      logo: "https://previews.123rf.com/images/nasaimages/nasaimages1610/nasaimages161000067/112976307-solar-system-earth-isolated-planet-on-white-background-.jpg",
    },
    // redirect_url: // specified redirect URL
    //   "https://localhost:5000/donate.html"
  });
}
