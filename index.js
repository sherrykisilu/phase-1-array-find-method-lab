// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
    //...
  ]
   function superbowlWin(records){
    let win = records.find((record) =>record.result==="W");
    if (typeof win==='undefined'){
        return undefined;
    }
    else{
        return win.year;
    }
   }
  console.log (superbowlWin(record));