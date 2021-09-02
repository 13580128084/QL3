#include "Motion.h"










//1,2--------------

void Motion_begin(uint8_t port1,uint8_t port2)
{

	pinMode(port1,OUTPUT);
	pinMode(port2,OUTPUT);
	
}
void Motion_begin2(uint8_t port1_1,uint8_t port1_2,uint8_t port2_1,uint8_t port2_2)
{

	pinMode(port1_1,OUTPUT);
	pinMode(port1_2,OUTPUT);
	pinMode(port2_1,OUTPUT);
	pinMode(port2_2,OUTPUT);
	
}
void Motion_one(uint8_t port1,uint8_t port2,uint8_t fx,uint8_t speed)
{
	if (fx==0){
	
		digitalWrite(port1,LOW);
		analogWrite(port2,speed);
	}else{
	
		digitalWrite(port1,HIGH);
		analogWrite(port2,255-speed);
	}
}

void Motion_two(uint8_t port1_1,uint8_t port1_2,uint8_t port2_1,uint8_t port2_2,uint8_t fx1,uint8_t speed1,uint8_t fx2,uint8_t speed2)
{
	if (fx1==0){

		digitalWrite(port1_1,LOW);
		analogWrite(port1_2,speed1);

	}else{

		digitalWrite(port1_1,HIGH);
		analogWrite(port1_2,255-speed1);

	}
	if (fx2==0){

		digitalWrite(port2_1,LOW);
		analogWrite(port2_2,speed2);
	}else{
	
		digitalWrite(port2_1,HIGH);
		analogWrite(port2_2,255-speed2);
	}

}

