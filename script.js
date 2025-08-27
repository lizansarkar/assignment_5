//******************* Assignment 5 vanilla js code here *******************
// heart icon work *************
let heartIcon = document.querySelectorAll(".heart-icon");
let heartCounter = document.getElementById("heart-counter");

let hCount = 0;

heartIcon.forEach((heart) => {
    heart.addEventListener("click", () => {
        hCount++;
        heartCounter.innerText = hCount;
        heartIcon
    });
});

// call button work ************
let coinNumber = document.getElementById("coin");
let callButton = document.querySelectorAll(".call-btn");
let availableCoin = 100;

callButton.forEach((call) => {
    call.addEventListener("click", () => {
        let ownCard = call.closest(".service-box");

        let serviceName = ownCard.querySelector(".service-name").innerText;
        console.log(serviceName);
        let serviceNumber = ownCard.querySelector(".service-number").innerText;
        console.log(serviceNumber);

        if(availableCoin < 20) {
            alert("❌ আগে টাকা ভরানি গরিবস যা ভাগ এখানথেকে 👊👊👊");
            return;
        }

        alert(`এই ${serviceName} সার্ভিস এ এই ${serviceNumber} নম্বর এ কল হবে কি ? `);

        availableCoin = availableCoin - 20;
        coinNumber.innerText = availableCoin;

        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        let nowTime = `${hours}:${minutes}:${seconds} ${amPm}`;
        // console.log(nowTime);

        let callHistory = document.querySelector(".history-container");
        let div = document.createElement("div");
        div.innerHTML = `
                    <div class="history flex items-center justify-between">
                        <div class="history-text">
                            <h1 class="text-[18px]">${serviceName}</h1>
                            <p class="text-[18px]">${serviceNumber}</p>
                        </div>
                        <div class="history-time">${nowTime}</div>
                    </div>
        `;

        callHistory.appendChild(div);
    });
});

// copy button work ************

let copyButton = document.querySelectorAll(".copy-btn");

let copyCount = 0;

copyButton.forEach((copy) => {
    copy.addEventListener("click", () => {
        let copyCountBtn = document.getElementById("copy-count-number");
        copyCount++;
        copyCountBtn.innerText = copyCount;
        let ownCard = copy.closest(".service-box");

        let serviceNumber = ownCard.querySelector(".service-number").innerText;
        console.log(serviceNumber);

        navigator.clipboard.writeText(serviceNumber);
    })
});




let now = new Date();
console.log(now);












