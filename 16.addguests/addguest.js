var guest = ["Ali", "Aslam", "Irfan", "Iqra"];
var mess = "\nRespected Sir/Madam ";
/*for(let i=0; i<guest.length; i++)
{
    console.log(mess+guest[i]+"\n I invited to you on dinner \n Thank You");


}
*/
var newguest = "Ahmed";
var not_present = "Iqra";
/*for(let i=0; i<guest.length; i++)
{
    console.log(mess+guest[i]+" I invited to you on dinner \n\n Thank You");


}
*/
guest.unshift("Shayan", "Qaisar", "Hasnain");
for (var i = 0; i < guest.length; i++) {
    console.log(mess + guest[i] + " I invited to you on dinner \n\n Thank You");
}
