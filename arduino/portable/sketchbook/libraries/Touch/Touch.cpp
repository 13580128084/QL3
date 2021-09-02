#include "Touch.h"
uint8_t Touch_get(uint8_t port)
{
   return digitalRead(port);
}

void Touch_begin(uint8_t port)
{
pinMode(port,INPUT);
}

