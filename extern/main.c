#include<stdio.h>
#include "header.h"


int main(){
    int res;
    res = add(10,20);
    printf("%d \n",res);
    res = sub(10, 20);
    printf("%d \n",res);
    res = mul(10,20);
    printf("%d \n",res);
    res = div(10, 20);
    printf("%d \n",res);

    return 0;
}