function onClickLikeButton() {
    let presentImage = document.getElementById("puppyImage").src;
    if (presentImage.includes("white-puppy-img.png")) {
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        document.getElementById("likeButton").style.background = "#0967d2";
        document.getElementById("likeButton").style.color = "#cbd2d9";
        document.getElementById("likeIcon").style.color = "#0967d2";
    } else {
        document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        document.getElementById("likeButton").style.background = "#cbd2d9";
        document.getElementById("likeButton").style.color = "#9aa5b1";
        document.getElementById("likeIcon").style.color = "#cbd2d9";
    }
}