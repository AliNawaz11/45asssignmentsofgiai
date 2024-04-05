var glist = ["Ali", "Asad", "Ahsan", "Aleem"];
var not_person = "Farhan";
var new_gues = "Saad";
glist[1] = new_gues;
glist.unshift("Sarfaraz", "yaqoob", "Mustafa");
console.log("\nUnfortunately we can't arrange big table, only two people allow :");
while (glist.length > 2) {
    var remove_guest = glist.pop();
    console.log("Sorry Sir/Madam".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i <= glist.length; i++) {
    console.log("Respected Sir/Madam" + glist[i] + "\n Yes you are invited on tommorrow dinner \n Thank You \n");
}
glist.splice(0, 2);
console.log(glist);
