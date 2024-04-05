"use strict";
// LArge Shirts: Modify the make_shirt() function so that shirts are large by default eith a message that reads
//I love Typescript.Make a large shirt and medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = `Large`, text = `I love Typescript`) {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt(`Medium`);
make_shirt(`Small`, `I love Python`);
