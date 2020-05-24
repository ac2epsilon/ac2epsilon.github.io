#include <stdio.h>
#include <stdlib.h>  
#include <time.h> 
#include <math.h>

static struct { double lat; double lng;} ll[2];
#define D2R 3.14159265359f/180.f
#define R 6371e3
double d2r(double d) { return d*D2R; }
double randfrom(double min, double max) 
{
    double div = RAND_MAX / fabs(max - min);
    return min + (rand() / div);
}
int main() 
{ 
    srand (time ( NULL));
    clock_t t; 
    t = clock(); 
    double mmin = 1e6, mmax = 0;
    for (long i=0;i<=10000000;i++) 
    {
        ll[0].lat = randfrom(-90.0,+90.0); 
        ll[0].lng = randfrom(-180.0,+180.0);
        ll[1].lat = randfrom(-90.0,+90.0);
        ll[1].lng = randfrom(-180.0,+180.0);

        double phi1 = d2r(ll[0].lat);
        double phi2 = d2r(ll[1].lat);
        double lambda1 = d2r(ll[0].lng);
        double lambda2 = d2r(ll[1].lng);
        double d_phi = phi2-phi1;
        double d_lambda = lambda2-lambda1;

        double a = sin(d_phi/2) * sin(d_phi/2) + 
            cos(phi1) * cos(phi2) * 
            sin(d_lambda/2) * sin(d_lambda/2);
        double d1 = R * 2 * atan2(sqrt(a), sqrt(1-a));
        
        double d2 = R * acos(sin(phi1) * sin(phi2) + 
            cos(phi1) * cos(phi2) * cos(d_lambda));

        // double deglen = 110.25;
        // double x = d_lambda * cos((phi1+phi2)/2.0);
        // double y = d_phi;
        // double d3 = R * sqrt(x*x + y*y);

        double d_d = fabs(d1-d2);
        mmax = fmax(mmax, d_d);
        mmin = fmin(mmin, d_d); 
      
     }
    
    t = clock() - t; 
    printf("mmin %f mmax %f \n", mmin,mmax);

    double time_taken = ((double)t)/CLOCKS_PER_SEC;
    printf("fun() took %f seconds to execute \n", time_taken); 
    return 0; 
} 