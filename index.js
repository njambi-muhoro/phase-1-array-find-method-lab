function superbowlWin(record){
let win = record.find((records)=> records.result === "W")
   if(win){
      return win.year
   }
   else{
      undefined
   }
}
    

