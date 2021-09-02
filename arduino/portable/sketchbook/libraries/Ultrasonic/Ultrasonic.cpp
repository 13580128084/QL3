#include "Ultrasonic.h"
unsigned long Time_Echo_us = 0;
unsigned long Len_mm  = 0;
unsigned long s=0;
int Ultrasonic_get(uint8_t port1 ,uint8_t port2 )
{
	

		digitalWrite(port2, HIGH);              //begin to send a high pulse, then US-025/US-026 begin to measure the distance
	    delayMicroseconds(20);                    //set this high pulse width as 20us (>10us)
	    digitalWrite(port2, LOW);               //end this high pulse
	    
	    Time_Echo_us = pulseIn(port1, HIGH);               //calculate the pulse width at EchoPin, 
	    if((Time_Echo_us < 60000) && (Time_Echo_us > 1))     //a valid pulse width should be between (1, 60000).
	    {
	      Len_mm = (Time_Echo_us*34/100)/2;      //calculate the distance by pulse width, Len_mm = (Time_Echo_us * 0.34mm/us) / 2 (mm)
	    }
	   
   	return Len_mm;
}

void Ultrasonic_begin(uint8_t port1 ,uint8_t port2 )
{
pinMode(port1, INPUT);                    //Set EchoPin as input, to receive measure result from US-025,US-026
pinMode(port2, OUTPUT);                   //Set TrigPin as output, used to send high pusle to trig measurement (>10us)
}

