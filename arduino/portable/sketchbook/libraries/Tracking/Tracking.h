

#ifndef _TRACKING_H_
#define _TRACKING_H_

#include <Arduino.h>
    	int Tracking_get_ad(uint8_t port);
    	int Tracking_get_ads(uint8_t port,int num);
    	uint8_t Tracking_get_io(uint8_t port);
    	void Tracking_begin(uint8_t port);
#endif