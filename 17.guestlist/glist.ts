let glist: string[]=["Ali","Asad","Ahsan","Aleem"];

let not_person:string="Farhan";
let new_gues:string="Saad";
glist[1]=new_gues;

glist.unshift("Sarfaraz","yaqoob","Mustafa");
 console.log("\nUnfortunately we can't arrange big table, only two people allow :");
 while(glist.length>2)
 {
let remove_guest=glist.pop();
console.log(`Sorry Sir/Madam${remove_guest} you are not invited for dinner`);

 }
 for(let i=0; i<=glist.length;i++)
 {
console.log(`Respected Sir/Madam`+glist[i]+`\n Yes you are invited on tommorrow dinner \n Thank You \n`);


 }
 glist.splice(0,2);
console.log(glist);
