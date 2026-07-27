

const quoteBox=document.querySelector('.qoute-cont');

const api_url="https://motivational-spark-api.vercel.app/api/quotes/random"

const quotes=document.getElementById("quote");
const authors=document.getElementById("author");



async function getqoute(url)
{
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    quotes.innerHTML=data.quote;
    authors.innerHTML=data.author;
    
}

function tweet()
{
    window.open("https://twitter.com/intent/tweet?text=ss&url=ur")
}

getqoute(api_url);