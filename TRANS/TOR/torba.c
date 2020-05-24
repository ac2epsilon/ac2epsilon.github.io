#include <stdio.h>
#include <stdlib.h>  
#include <time.h> 
#include <math.h>
#include <stdint.h>

static struct { double lat; double lng;} ll[2];
#define D2R 3.14159265359f/180.f
#define R 6371e3
double d2r(double d) { return d*D2R; }
double randfrom(double min, double max) 
{
    double div = RAND_MAX / fabs(max - min);
    return min + (rand() / div);
}

typedef unsigned uint128_t __attribute__((mode(TI)));
int func1(uint64_t a, uint64_t b) {
  uint128_t c = ((uint128_t)a) * b;
  int ok = ((uint64_t)(c>>96)) == 522859 &&
    (((uint64_t)(c>>64))&0xffffffffL) == 3604448702L &&
    (((uint64_t)(c>>32))&0xffffffffL) == 2351960064L &&
    (((uint64_t)(c))&0xffffffffL) == 0;
  return ok;
}
int func2(uint64_t a, uint64_t b) {
  uint128_t c = ((uint128_t)a) * b;
  int ok = ((uint64_t)(c>>96)) == 522859 &&
    (((uint64_t)(c>>64))&0xffffffffL) == 3604448702L &&
    (((uint64_t)(c>>32))&0xffffffffL) == 2351960064L &&
    (((uint64_t)(c))&0xffffffffL) == 0;
  return ok;
}
int main() { 
    srand (time ( NULL));
    clock_t t; 
    t = clock(); 
    int ok1 = func1( ((uint64_t)2000000000) * 1000000000,((uint64_t)1234567890) << 24);
    int ok2 = func2( ((uint64_t)2000000000) * 1000000000,((uint64_t)1234567890) << 24);
    t = clock() - t; 
    double time_taken = ((double)t)/CLOCKS_PER_SEC;
    printf("fun() took %f seconds to execute \n", time_taken);

    printf("can run = %u can link = %u \n", ok1, ok2); 
    return 0; 
} 