$(document).ready(() => {
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 300;
    canvas.crossOrigin = "Anonymous";
    ctx.drawImage($('.card-img.front').get(0), 0, 0);
})

$(document).on('input', '#card-number', async function() {
    if (!$(this).val().match(/^\d+$/g) && $(this).val().length > 16) return;
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.front').get(0), 0, 0);

    ctx.font = "26pt Open sans";
    ctx.fillStyle = "white";
    const str = $(this).val(),
        parts = str.match(/[\s\S]{1,4}/g);

    
    const cardType = await verifyCard($(this).val()),
        img = new Image();
    img.src = `./cardLogo/${cardType}.png`;
    
    if(cardType != undefined) {
        ctx.drawImage(img, 350, 20, 120, 75);
    }

    //elements of canvas
    ctx.fillText($('#card-name').val(), 20, 278);
    ctx.fillText(parts.join(' '), 47, 200);
});
$(document).on('input', '#card-name', async function () {
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.front').get(0), 0, 0);

    ctx.font = "26pt Open sans";
    ctx.fillStyle = "white";

    //for card number
    const str = $('#card-number').val(),
        parts = str.match(/[\s\S]{1,4}/g);

    const cardType = await verifyCard($('#card-number').val()),
        img = new Image();
    img.src = `./cardLogo/${cardType}.png`;

    if (cardType != undefined) {
        ctx.drawImage(img, 350, 20, 120, 75);
    }

    //elements of canvas
    ctx.fillText(parts.join(' '), 47, 200);
    ctx.fillText($(this).val(), 20, 278);
});

$(document).on("click", "#card-cvv", function() { 
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.back').get(0), 0, 0);
    ctx.font = "26pt Open sans";
    ctx.fillStyle = "black";
    ctx.fillText($(this).val(), 295, 190);
})
$(document).on("blur", "#card-cvv", async () => {
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.front').get(0), 0, 0);

    ctx.font = "26pt Open sans";
    ctx.fillStyle = "white";

    ctx.fillText($('#mouth :selected').val() + "/" != null ? $('#mouth :selected').val() + "/" : "", 270, 245);
    ctx.fillText($('#year :selected').val() != null ? $('#year :selected').val() : "", 330, 245);

    //for card number
    const str = $('#card-number').val() != "" ? $('#card-number').val() : "",
        parts = str.match(/[\s\S]{1,4}/g);

    const cardType = await verifyCard(str),
        img = new Image();
    img.src = `./cardLogo/${cardType}.png`;

    if (cardType != undefined) {
        ctx.drawImage(img, 350, 20, 120, 75);
    }

    //elements of canvas
    ctx.fillText(parts != null ? parts.join(' ') : "", 47, 200);
    ctx.fillText($('#card-name').val() != null ? $('#card-name').val() : "", 20, 278);
})

async function getValOfSelectMouthInput(sel) {
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.front').get(0), 0, 0);

    ctx.font = "26pt Open sans";
    ctx.fillStyle = "white";

    ctx.fillText($('#year :selected').val() != null ? $('#year :selected').val() : "", 330, 245);
    ctx.fillText(sel.value + "/", 270, 245);

    //for card number
    const str = $('#card-number').val() != "" ? $('#card-number').val() : "",
        parts = str.match(/[\s\S]{1,4}/g);

    const cardType = await verifyCard(str),
        img = new Image();
    img.src = `./cardLogo/${cardType}.png`;

    if (cardType != undefined) {
        ctx.drawImage(img, 350, 20, 120, 75);
    }


    //elements of canvas
    ctx.fillText(parts != null ? parts.join(' ') : "", 47, 200);
    ctx.fillText($('#card-name').val() != null ? $('#card-name').val() : "", 20, 278);
}

async function getValOfSelectYearInput(sel) {
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.front').get(0), 0, 0);

    ctx.font = "26pt Open sans";
    ctx.fillStyle = "white";

    ctx.fillText($('#mouth :selected').val() + "/" != null ? $('#mouth :selected').val() + "/" : "", 270, 245);
    ctx.fillText(sel.value, 330, 245);

    //for card number
    const str = $('#card-number').val() != "" ? $('#card-number').val() : "",
        parts = str.match(/[\s\S]{1,4}/g);

    const cardType = await verifyCard(str),
        img = new Image();
    img.src = `./cardLogo/${cardType}.png`;

    if (cardType != undefined) {
        ctx.drawImage(img, 350, 20, 120, 75);
    }



    //elements of canvas
    ctx.fillText(parts != null ? parts.join(' ') : "", 47, 200);
    ctx.fillText($('#card-name').val() != null ? $('#card-name').val() : "", 20, 278);
}

$(document).on('input', '#card-cvv', function () {
    if (!$(this).val().match(/^\d+$/g) && $(this).val().length >= 3) return;
    let canvas = document.getElementById("card-canvas"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage($('.card-img.back').get(0), 0, 0);

    ctx.font = "26pt Open sans";
    ctx.fillStyle = "black";

    ctx.fillText($(this).val(), 295, 190);
});


function limit(element, limit) {
    if (element.value.match(/^\d+$/g))
        if (element.value.length > limit) element.value = element.value.substr(0, limit);
}