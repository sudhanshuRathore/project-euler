#include <stdio.h>
#include <math.h>
#include <stdbool.h>

bool isPrime(unsigned long number)
{
    double root = sqrt(number);
    double square = root * root;
    return square == number;
}

int main(void)
{
    unsigned long theNumber = 600851475143;
    unsigned long half = round(sqrt(theNumber)) + 1;
    unsigned long largestPrimeFactor = 2;
    unsigned long counter = 2;
    while (counter <= half)
    {
        if (theNumber % counter == 0)
        {
            printf("Divisible by %lu\n", counter);
            fflush(stdin);
            if (isPrime(counter))
            {
                largestPrimeFactor = counter;
                printf("Factor found %lu\n", largestPrimeFactor);
                fflush(stdin);
            }
        }
        counter++;
    }
}