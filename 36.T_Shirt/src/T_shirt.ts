// T_shirt:Write a function called make_shirt() thatt accept a size and the text of a message.
//that should be printed on the shirt.The function should print a sentence summarizing the sizze of the shirt and the message printed on it.

import { log } from "console";

//cal the function .


function make_shirt(size:string,text:string)
{
console.log(`Creating a ${size} shirt with the message :${text}`);

}
make_shirt(`large`,`hello handsome`);
make_shirt(`medium`,`hello beautiful`);
make_shirt(`small`,`hello new world`);