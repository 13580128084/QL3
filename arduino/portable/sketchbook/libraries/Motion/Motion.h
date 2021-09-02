#ifndef _MOTION_H_
#define _MOTION_H_
#include <Arduino.h>

		void Motion_begin(uint8_t port1,uint8_t port2);
		void Motion_one(uint8_t port1,uint8_t port2,uint8_t fx,uint8_t speed);
    	void Motion_two(uint8_t port1_1,uint8_t port1_2,uint8_t port2_1,uint8_t port2_2,uint8_t fx1,uint8_t speed1,uint8_t fx2,uint8_t speed2);

#endif
