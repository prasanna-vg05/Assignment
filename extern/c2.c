#include "header.h"

extern int offset;
// 
int mul(int a, int b){
    return (a*b+offset);
}

int div(int a, int b){
    return (a/b+offset);
}