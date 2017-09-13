export const sortByYear=function(data){
  let mySort=(a, b)=> {
    let item1=a["year"];
    let item2=b["year"];
    if (item2 > item1) {return -1;}
    if (item2 < item1) {return 1;}
    return 0;
  };
  return data.sort(mySort);
};
