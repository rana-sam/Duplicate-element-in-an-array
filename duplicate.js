let array=[1,1,23,34,32,1,2,3,23,5,1,87,32,34,1];
for(var i=0;i<array.length;i++)
{
    let count=0;
    for(var x=i+1;x<array.length;x++)
    {
        if(array[i]==array[x])
        {
            count=count+1
            array.splice(x,1)
        }
    }
    console.log(array[i]+" is repeated "+count+" times.");
}