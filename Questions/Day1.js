
const  findLongestWord= (str)=>{
    if(str.trim().length===0)
    {
        return false;
    }

    words=str.split(" ");
//     words=words.sort((a,b)=>a.length-b.length)
//    console.log(words);  

//    return words.at(-1) //Es script
//   return words.at(0)

  return  words.reduce((accum, currWord)=> currWord.length >accum.length ? currWord :accum,"")


}

console.log(
    findLongestWord("Watch Thapa Technical awesomeRawatTechnical Javascript course on youtube")
);



