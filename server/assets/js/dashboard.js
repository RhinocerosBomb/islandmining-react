/**
 * Copy text Function
 */
function copyText(id) {
    var input = document.createElement('input');
    input.id = 'temp_element'

    input.style.height = 0

    document.body.appendChild(input)

    input.value = document.getElementById(id).innerText

    var selector = document.querySelector('#temp_element')

    selector.select()
    selector.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // Remove the textarea
    document.body.removeChild(input)
}

function copyReferralAddress(id) {
    var input = document.createElement('input');
    input.id = 'temp_element'

    input.style.height = 0

    document.body.appendChild(input)

    input.value = window.location.host + '/ref?referralAddress=' + document.getElementById(id).innerText

    var selector = document.querySelector('#temp_element')

    selector.select()
    selector.setSelectionRange(0, 99999);
    document.execCommand('copy');
    // Remove the textarea
    document.body.removeChild(input)
}

/**
 * MNT to Cryptocurrencies Calculator
 * ----------------------------------
 * Grabs input and cryptocurrency
 * returns value with 8 decimal places
 * then displays it on the dashboard
 */
let inputMNT = document.getElementById('MNT-conversion-input');

if (inputMNT) {
    inputMNT.addEventListener('input', function() {
        document.getElementById('MNT-to-BTC').textContent = calculateMNT(inputMNT.value, document.getElementById('BTC-price').innerText);
        document.getElementById('MNT-to-ETH').textContent = calculateMNT(inputMNT.value, document.getElementById('ETH-price').innerText);
        document.getElementById('MNT-to-LTC').textContent = calculateMNT(inputMNT.value, document.getElementById('LTC-price').innerText);
    })
}

function calculateMNT(input, cryptocurrency) {
    return (input * 0.06 / cryptocurrency).toFixed(8);
}

/**
 * Display Dynamic Clock
 * --------------------
*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var suffix = "AM";
    if (h >= 12) {
        suffix = "PM";
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('official-time').innerHTML =
        h + ":" + m + " " + suffix;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

/**
 * Restrict Phone number input
 */
const phoneInput = document.getElementById("phone-input");
if (phoneInput) {
    phoneInput.addEventListener("input", function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
}

/**
 * Restrict Date input
 */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
const dateInput = document.getElementById("date-input");
if (dateInput) dateInput.setAttribute("max", today);


/**
 * Total Affiliate Awards
 */
const totalAffiliateRewards = document.getElementById('totalAffiliateRewards')
const currentRewards_1 = document.getElementById('current-awards--tier-1')
const currentRewards_2 = document.getElementById('current-awards--tier-2')
const totalPurchased_1 = parseInt(document.getElementById('total-purchased--tier-1').innerHTML)
const totalPurchased_2 = parseInt(document.getElementById('total-purchased--tier-2').innerHTML)

const firstTierPercentage_1 = parseInt(document.getElementById('11').innerHTML)
const firstTierPercentage_2 = parseInt(document.getElementById('12').innerHTML)
const firstTierPercentage_3 = parseInt(document.getElementById('13').innerHTML)

const secondTierPercentage_1 = parseInt(document.getElementById('21').innerHTML)
const secondTierPercentage_2 = parseInt(document.getElementById('22').innerHTML)
const secondTierPercentage_3 = parseInt(document.getElementById('23').innerHTML)


let firstTierRewards;
let secondTierRewards;

if(totalPurchased_1 < 10000) {
    firstTierRewards = (totalPurchased_1 * 0.05).toFixed(1);
} else if (totalPurchased_1 >= 10000 && totalPurchased_1 <= 50000) {
    firstTierRewards = (totalPurchased_1 * 0.065).toFixed(1);
} else if (totalPurchased_1 > 50000) {
    firstTierRewards = (totalPurchased_1 * 0.08).toFixed(1);
}

if(totalPurchased_2 < 10000) {
    secondTierRewards = (totalPurchased_2 * 0.01).toFixed(1);
} else if (totalPurchased_1 >= 10000 && totalPurchased_1 <= 50000) {
    secondTierRewards = (totalPurchased_2 * 0.015).toFixed(1);
} else if (totalPurchased_1 > 50000) {
    secondTierRewards = (totalPurchased_2 * 0.02).toFixed(1);
}

currentRewards_1.innerHTML = firstTierRewards
currentRewards_2.innerHTML = secondTierRewards
totalAffiliateRewards.innerHTML = parseInt(firstTierRewards) + parseInt(secondTierRewards);


function redirectToReferral() {
    const referralAddress = document.getElementById('referralAddress').innerText;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/referral/" + referralAddress, true );
    xmlHttp.send( null );
}

/**
 * Auto reload page
 */
$.ajax({
    url: `https://www.islandmining.io/api/user/${username}`,
    dataType: 'JSONP',
    jsonpCallback: 'callback',
    method: 'GET',
    headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    cache: false,
    success: function(data) {
        userVerified = data.user.verified
    }
})

function getUserData() {
    $.ajax({
        url: `https://www.islandmining.io/api/user/${username}`,
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        method: 'GET',
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        cache: false,
        success: function (data) {
            // Detects if state has been changed
            if (userVerified !== data.user.verified) {
                userVerified = data.userVerified
                console.log('state changed');
                window.location.reload();
            }             

        }
    });
}

        $(function() {
            setInterval(getUserData, 2000);
        })


        document.getElementById('registration-btn').addEventListener('click', function() {
            setTimeout(function() {
                document.getElementById('submitPendingForm').submit();
            }, 2000)
        })
