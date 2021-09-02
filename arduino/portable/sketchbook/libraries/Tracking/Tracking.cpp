#include "Tracking.h"

int Tracking_get_ads(uint8_t port,int num)
{
   if(analogRead(port)>=num){return 0;}else{return 1;}
   
}
int Tracking_get_ad(uint8_t port)
{
   return analogRead(port);
}
uint8_t Tracking_get_io(uint8_t port)
{
   return digitalRead(port);
}
void Tracking_begin(uint8_t port)
{
	pinMode(port,INPUT);

}

