let ord_num:number[]=[1,2,3,4,5,6,7,8,9];
// for loop...
for (let i=0;i<ord_num.length;i++)
{
    // now we use conditions...
    if(ord_num[i]==1)
    {
        console.log(`${ord_num[i]}st`);
    
    }

    else if(ord_num[i]==2)
    {

        console.log(`${ord_num[i]}nd`);
    


    }
    else if(ord_num[i]==3)
    {

        console.log(`${ord_num[i]}rd`);
    


    }
    else if(ord_num[i]>=4 && ord_num[i]<=9)
    {

        console.log(`${ord_num[i]}th`);
    


    }

}