'use strict';

goog.provide('Blockly.Arduino.sensor');
goog.require('Blockly.Arduino');

Blockly.Arduino.gps_init = function() {
  Blockly.Arduino.definitions_['include_TinyGPS++'] = '#include <TinyGPS++.h>';
  Blockly.Arduino.definitions_['include_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  var rx = Blockly.Arduino.valueToCode(this, 'RX',Blockly.Arduino.ORDER_ATOMIC);
  var tx = Blockly.Arduino.valueToCode(this, 'TX',Blockly.Arduino.ORDER_ATOMIC);
  var bt = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC)
  Blockly.Arduino.definitions_['var_declare_TinyGPSPlus_gps'] = 'TinyGPSPlus gps;';
  Blockly.Arduino.definitions_['var_declare_SoftwareSerial_gps_ss'] = 'SoftwareSerial gps_ss('+rx+', '+tx+');';
  Blockly.Arduino.setups_['setup_gps_ss_begin'] = 'gps_ss.begin('+bt+');';
  return '';
};

Blockly.Arduino.gps_data_available = function() {
  var code = 'gps_ss.available()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.gps_data_encode = function() {
  var code = 'gps.encode(gps_ss.read())';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.gps_xxx_isValid = function() {
  var WHAT = this.getFieldValue('WHAT');
  var code = 'gps.'+WHAT+'.isValid()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.gps_getData_xxx = function() {
  var WHAT = this.getFieldValue('WHAT');
  var code = 'gps.'+WHAT+'()';
  return [code,Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Arduino.chupeng = function () {
  var Trig = this.getFieldValue('Trig');
  var io='0';
  var adc='0';
  var pwm='0';

  switch(Trig){
    case '1':io='8';adc='A3';pwm='9';break;
    case '2':io='12';adc='A6';pwm='10';break;
    case '3':io='13';adc='A7';pwm='11';break;
    case '4':io='2';adc='A0';pwm='3';break;
    case '5':io='4';adc='A1';pwm='5';break;
    case '6':io='7';adc='A2';pwm='6';break;
}
  Blockly.Arduino.definitions_['include_Touch'] = '#include <Touch.h>';
  Blockly.Arduino.setups_['setup_output_' + io] = 'pinMode(' + io + ', INPUT);';

  var code ='Touch_get('+io+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}


Blockly.Arduino.xunji_set_ini = function () {
  var Trig = this.getFieldValue('Trig');
  var Type =  Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';  
  var io='0';
  var adc='0';
  var pwm='0';
  switch(Trig){
    case '1':io='8';adc='A3';pwm='9';break;
    case '2':io='12';adc='A6';pwm='10';break;
    case '3':io='13';adc='A7';pwm='11';break;
    case '4':io='2';adc='A0';pwm='3';break;
    case '5':io='4';adc='A1';pwm='5';break;
    case '6':io='7';adc='A2';pwm='6';break;
}
var code;
  Blockly.Arduino.definitions_['include_Tracking'] = '#include <Tracking.h>';
  Blockly.Arduino.definitions_['bl_Tracking'+adc] = 'int Tracking'+Trig+';';
    code ='Tracking'+Trig+'='+Type+';\n';
  return code;
}


Blockly.Arduino.xunji = function () {
  var Trig = this.getFieldValue('Trig');
  var Type = this.getFieldValue('Type');
  var io='0';
  var adc='0';
  var pwm='0';

  switch(Trig){
    case '1':io='8';adc='A3';pwm='9';break;
    case '2':io='12';adc='A6';pwm='10';break;
    case '3':io='13';adc='A7';pwm='11';break;
    case '4':io='2';adc='A0';pwm='3';break;
    case '5':io='4';adc='A1';pwm='5';break;
    case '6':io='7';adc='A2';pwm='6';break;
}
var code;
  Blockly.Arduino.definitions_['include_Tracking'] = '#include <Tracking.h>';
  if(Type=='1'){
    Blockly.Arduino.setups_['setup_output_' + adc] = 'Tracking_begin(' + adc + ');';
    code ='Tracking_get_ad('+adc+')';
  }else if(Type=='2'){
    Blockly.Arduino.setups_['setup_output_' + pwm] = 'Tracking_begin(' + pwm + ');';
    code ='Tracking_get_io('+pwm+')';
  }else{
    Blockly.Arduino.setups_['setup_output_' + adc] = 'Tracking_begin(' + adc + ');';
    code ='Tracking_get_ads('+adc+','+'Tracking'+Trig+')';
  }
  

  return [code, Blockly.Arduino.ORDER_ATOMIC];
}


Blockly.Arduino.apds9960 = function () {
  var Type = this.getFieldValue('type');
  Blockly.Arduino.definitions_['include_Apds9960'] = '#include <Trinity.h>';
  Blockly.Arduino.setups_['setup_apds9960'] = 'Trinity_begin();';
  var code = 'Trinity_get('+Type+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}





Blockly.Arduino.chaoshengbo2 = function () {
  var Trig = this.getFieldValue('Trig');
  var io='0';
  var adc='0';
  var pwm='0';

  switch(Trig){
    case '1':io='8';adc='A3';pwm='9';break;
    case '2':io='12';adc='A6';pwm='10';break;
    case '3':io='13';adc='A7';pwm='11';break;
    case '4':io='2';adc='A0';pwm='3';break;
    case '5':io='4';adc='A1';pwm='5';break;
    case '6':io='7';adc='A2';pwm='6';break;
}
Blockly.Arduino.definitions_['include_DHT'] = '#include <Ultrasonic.h>';
  Blockly.Arduino.setups_['Ultrasonic' + adc] = 'Ultrasonic_begin(' + pwm + ','+adc+');';

  return ['Ultrasonic_get('+pwm+','+adc+')', Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.DHT = function () {
  var sensor_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var io='0';
  var adc='0';
  var pwm='0';

  switch(dropdown_pin){
    case '1':io='8';adc='A3';pwm='9';break;
    case '2':io='12';adc='A6';pwm='10';break;
    case '3':io='13';adc='A7';pwm='11';break;
    case '4':io='2';adc='A0';pwm='3';break;
    case '5':io='4';adc='A1';pwm='5';break;
    case '6':io='7';adc='A2';pwm='6';break;
}


  var what = this.getFieldValue('WHAT');
  Blockly.Arduino.definitions_['include_DHT'] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht'+dropdown_pin+'('+adc+', '+sensor_type+');'
  Blockly.Arduino.setups_['DHT_SETUP'+dropdown_pin] = ' dht'+dropdown_pin+'.begin();';
  var code;
  if(what=="temperature")
    code= 'dht'+dropdown_pin+'.readTemperature()'
  else
    code= 'dht'+dropdown_pin+'.readHumidity()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}


//传感器-MPU6050-获取数据
Blockly.Arduino.MPU6050 = function() {
 Blockly.Arduino.definitions_['includeMPU6050'] = '#include <MPU6050.h>';
 Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
 Blockly.Arduino.definitions_['var_declare_MPU6050'] = 'MPU6050 mpu;';
 Blockly.Arduino.setups_['setup_ngyro'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);';
 var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
 var code = MPU6050_TYPE;
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//传感器-MPU6050-更新数据
Blockly.Arduino.MPU6050_update = function() {
 var code = 'Vector normAccel = mpu.readNormalizeAccel();\nVector normGyro = mpu.readNormalizeGyro();\n';
 return code;
};

//旋转编码器写
Blockly.Arduino.encoder_write = function() {
  var Encoder_NO= this.getFieldValue('Encoder_NO');
  var value= Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code='encoder_'+Encoder_NO+'.write('+value+');\n ';
  return code;
};

//旋转编码器读值
Blockly.Arduino.encoder_read = function() {
  var Encoder_NO= this.getFieldValue('Encoder_NO');
  var code = 'encoder_' +Encoder_NO+ '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//旋转编码管脚定义
Blockly.Arduino.encoder_init = function() {
  var CLK = this.getFieldValue('CLK');
  var DT = this.getFieldValue('DT');
  var Encoder_NO= this.getFieldValue('Encoder_NO');
  Blockly.Arduino.definitions_['include_Encoder'] ='#include <Encoder.h>\n';
  Blockly.Arduino.definitions_['var_declare_Encoder_'+Encoder_NO] = 'Encoder encoder_'+Encoder_NO+'('+CLK+','+DT+');\n ';
  var code='';
  return code;
};

//BME280读取
Blockly.Arduino.BME280_READ = function() {
 var TYPE = this.getFieldValue('TYPE');
 var address = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
 Blockly.Arduino.definitions_['include_SPI'] = '#include <SPI.h>';
 Blockly.Arduino.definitions_['include_Adafruit_Sensor'] = '#include <Adafruit_Sensor.h>';
 if(TYPE=="bme"){
  Blockly.Arduino.definitions_['include_Adafruit_BME280'] = '#include <Adafruit_BME280.h>';
  Blockly.Arduino.definitions_['var_declare_Adafruit_BME280'] = 'Adafruit_BME280 bme;';
}
else{
  Blockly.Arduino.definitions_['include_Adafruit_BMP280'] = '#include <Adafruit_BMP280.h>';
  Blockly.Arduino.definitions_['var_declare_Adafruit_BMP280'] = 'Adafruit_BMP280 bmp;';
}
Blockly.Arduino.setups_['setup_status'] = 'unsigned status;\n  status = '+TYPE+'.begin('+address+');';
Blockly.Arduino.definitions_['include_SEALEVELPRESSURE_HPA'] ='#define SEALEVELPRESSURE_HPA (1013.25)';
var code = this.getFieldValue('BME_TYPE');
return [TYPE+"."+code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.PS2_init = function() {
  Blockly.Arduino.definitions_['include_PS2X_lib'] = '#include <PS2X_lib.h>';   
  Blockly.Arduino.definitions_['var_declare_PS2X'] = 'PS2X ps2x;';
  var PS2_DAT = this.getFieldValue('PS2_DAT');
  var PS2_CMD = this.getFieldValue('PS2_CMD');
  var PS2_SEL = this.getFieldValue('PS2_SEL');
  var PS2_CLK = this.getFieldValue('PS2_CLK');
  var rumble=this.getFieldValue('rumble');
 
  Blockly.Arduino.setups_['setup_ps2x_config_gamepad'] = 'ps2x.config_gamepad('+PS2_CLK+','+PS2_CMD+','+PS2_SEL+','+PS2_DAT+', true, '+rumble+');\n  delay(300);\n';  
  return "";
};

Blockly.Arduino.PS2_update = function() {
 var code = 'ps2x.read_gamepad(false, 0);\ndelay(30);\n';
 return code;
};

Blockly.Arduino.PS2_Button = function() {
  var bt=this.getFieldValue('psbt');
  var btstate = this.getFieldValue('btstate');
  var code= "ps2x."+btstate+"("+bt+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.PS2_stk = function() {
  var stk=this.getFieldValue('psstk');
  var code= "ps2x.Analog("+stk+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// 改用DF TCS34725 颜色识别传感器库
Blockly.Arduino.TCS34725_Get_RGB = function() {
  Blockly.Arduino.definitions_['include_DFRobot_TCS34725'] = '#include <DFRobot_TCS34725.h>';
  Blockly.Arduino.definitions_['var_declare_TCS34725'] = 'DFRobot_TCS34725 tcs34725;\n';
  // Blockly.Arduino.setups_['setup_DFRobot_TCS34725' ] = 'if (tcs34725.begin()) {\n  Serial.println("Found sensor");\n} \nelse { \nSerial.println("No TCS34725 found ... check your connections");\nwhile (1);\n}';
  Blockly.Arduino.setups_['setup_DFRobot_TCS34725' ] = 'tcs34725.begin();';
  var RGB = this.getFieldValue('DF_TCS34725_COLOR');
  return [RGB, Blockly.Arduino.ORDER_ATOMIC];
};

//初始化TCS230颜色传感器
Blockly.Arduino.tcs230_init = function() {
  var value_tcs230_s0 = Blockly.Arduino.valueToCode(this, 'tcs230_s0', Blockly.Arduino.ORDER_ATOMIC);
  var value_tcs230_s1 = Blockly.Arduino.valueToCode(this, 'tcs230_s1', Blockly.Arduino.ORDER_ATOMIC);
  var value_tcs230_s2 = Blockly.Arduino.valueToCode(this, 'tcs230_s2', Blockly.Arduino.ORDER_ATOMIC);
  var value_tcs230_s3 = Blockly.Arduino.valueToCode(this, 'tcs230_s3', Blockly.Arduino.ORDER_ATOMIC);
  var value_tcs230_led = Blockly.Arduino.valueToCode(this, 'tcs230_led', Blockly.Arduino.ORDER_ATOMIC);
  var value_tcs230_out = Blockly.Arduino.valueToCode(this, 'tcs230_out', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_tcs230_pin'] = '#define tcs230_S0 '+value_tcs230_s0+''
  +'\n#define tcs230_S1 '+value_tcs230_s1+''
  +'\n#define tcs230_S2 '+value_tcs230_s2+''
  +'\n#define tcs230_S3 '+value_tcs230_s3+''
  +'\n#define tcs230_sensorOut '+value_tcs230_out+''
  +'\n#define tcs230_LED '+value_tcs230_led+'';

  Blockly.Arduino.definitions_['function_tcs230_Getcolor'] = '//TCS230颜色传感器获取RGB值'
  +'\nint tcs230_Getcolor(char data)'
  +'\n{'
  +'\n  int frequency = 0;'
  +'\n  switch(data)'
  +'\n  {'
  +'\n    case \'R\':'
  +'\n    {'
  +'\n      digitalWrite(tcs230_S2,LOW);'
  +'\n      digitalWrite(tcs230_S3,LOW);'
  +'\n      frequency = pulseIn(tcs230_sensorOut, LOW);'
  +'\n      frequency = map(frequency, 25, 72, 255, 0);'
  +'\n      break;'
  +'\n    }'
  +'\n    case \'G\':'
  +'\n    {'
  +'\n      digitalWrite(tcs230_S2,HIGH);'
  +'\n      digitalWrite(tcs230_S3,HIGH);'
  +'\n      frequency = pulseIn(tcs230_sensorOut, LOW);'
  +'\n      frequency = map(frequency, 30, 90, 255, 0);'
  +'\n      break;'
  +'\n    }'
  +'\n    case \'B\':'
  +'\n    {'
  +'\n      digitalWrite(tcs230_S2,LOW);'
  +'\n      digitalWrite(tcs230_S3,HIGH);'
  +'\n      frequency = pulseIn(tcs230_sensorOut, LOW);'
  +'\n      frequency = map(frequency, 25, 70, 255, 0);'
  +'\n      break;'
  +'\n    }'
  +'\n    default:'
  +'\n      return -1;'
  +'\n  }'
  +'\n  if (frequency < 0)'
  +'\n    frequency = 0;'
  +'\n  if (frequency > 255)'
  +'\n    frequency = 255;'
  +'\n  return frequency;'
  +'\n}\n';

  Blockly.Arduino.setups_['setup_tcs230_pin'] = 'pinMode(tcs230_S0, OUTPUT);'
  +'\n  pinMode(tcs230_S1, OUTPUT);'
  +'\n  pinMode(tcs230_S2, OUTPUT);'
  +'\n  pinMode(tcs230_S3, OUTPUT);'
  +'\n  pinMode(tcs230_LED, OUTPUT);'
  +'\n  pinMode(tcs230_sensorOut, INPUT);'
  +'\n  digitalWrite(tcs230_S0,HIGH);'
  +'\n  digitalWrite(tcs230_S1,LOW);'
  +'\n  digitalWrite(tcs230_LED,HIGH);';
  var code = '';
  return code;
};

//TCS230颜色传感器 获取RGB值
Blockly.Arduino.tcs230_Get_RGB = function() {
  var dropdown_tcs230_color = this.getFieldValue('tcs230_color');
  var code = 'tcs230_Getcolor(\''+dropdown_tcs230_color+'\')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Arduino_keypad_4_4_start = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var text_keypad_row = Blockly.Arduino.valueToCode(this, 'keypad_row',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_col = Blockly.Arduino.valueToCode(this, 'keypad_col',Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_type = Blockly.Arduino.valueToCode(this, 'keypad_type',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['var_keypadstart1' + text_keypad_name] = 'const byte '+text_keypad_name+'_ROWS = 4;';
  Blockly.Arduino.definitions_['var_keypadstart2' + text_keypad_name] = 'const byte '+text_keypad_name+'_COLS = 4;';
  Blockly.Arduino.definitions_['var_keypadstart3' + text_keypad_name] = 'char '+text_keypad_name+'_hexaKeys['+text_keypad_name+'_ROWS]['+text_keypad_name+'_COLS] = {' + '\n' + text_keypad_type + '\n};';
  Blockly.Arduino.definitions_['var_keypadstart4' + text_keypad_name] = 'byte '+text_keypad_name+'_rowPins['+text_keypad_name+'_ROWS] = '+text_keypad_row;
  Blockly.Arduino.definitions_['var_keypadstart5' + text_keypad_name] = 'byte '+text_keypad_name+'_colPins['+text_keypad_name+'_COLS] = '+text_keypad_col;
  Blockly.Arduino.definitions_['var_keypadstart6' + text_keypad_name] = 'Keypad '+text_keypad_name+' = Keypad(makeKeymap('+text_keypad_name+'_hexaKeys), '+text_keypad_name+'_rowPins, '+text_keypad_name+'_colPins, '+text_keypad_name+'_ROWS, '+text_keypad_name+'_COLS);';
  Blockly.Arduino.setups_['setup_serial_Serial'] = 'Serial.begin(9600);';
  var code = '';
  return code;
};

Blockly.Arduino.keypad_row_data= function() {
  var pin_keypad_row_1 = Blockly.Arduino.valueToCode(this, 'keypad_row_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_2 = Blockly.Arduino.valueToCode(this, 'keypad_row_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_3 = Blockly.Arduino.valueToCode(this, 'keypad_row_3',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_row_4 = Blockly.Arduino.valueToCode(this, 'keypad_row_4',Blockly.Arduino.ORDER_ATOMIC);
  var code = '{'+pin_keypad_row_1+', '+pin_keypad_row_2+', '+pin_keypad_row_3+', '+pin_keypad_row_4+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_col_data= function() {
  var pin_keypad_col_1 = Blockly.Arduino.valueToCode(this, 'keypad_col_1',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_2 = Blockly.Arduino.valueToCode(this, 'keypad_col_2',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_3 = Blockly.Arduino.valueToCode(this, 'keypad_col_3',Blockly.Arduino.ORDER_ATOMIC);
  var pin_keypad_col_4 = Blockly.Arduino.valueToCode(this, 'keypad_col_4',Blockly.Arduino.ORDER_ATOMIC);
  var code = '{'+pin_keypad_col_1+', '+pin_keypad_col_2+', '+pin_keypad_col_3+', '+pin_keypad_col_4+'};';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.keypad_type_data= function() {
  var text_keypad_1_1 = this.getFieldValue('keypad_1_1');
  var text_keypad_1_2 = this.getFieldValue('keypad_1_2');
  var text_keypad_1_3 = this.getFieldValue('keypad_1_3');
  var text_keypad_1_4 = this.getFieldValue('keypad_1_4');

  var text_keypad_2_1 = this.getFieldValue('keypad_2_1');
  var text_keypad_2_2 = this.getFieldValue('keypad_2_2');
  var text_keypad_2_3 = this.getFieldValue('keypad_2_3');
  var text_keypad_2_4 = this.getFieldValue('keypad_2_4');

  var text_keypad_3_1 = this.getFieldValue('keypad_3_1');
  var text_keypad_3_2 = this.getFieldValue('keypad_3_2');
  var text_keypad_3_3 = this.getFieldValue('keypad_3_3');
  var text_keypad_3_4 = this.getFieldValue('keypad_3_4');

  var text_keypad_4_1 = this.getFieldValue('keypad_4_1');
  var text_keypad_4_2 = this.getFieldValue('keypad_4_2');
  var text_keypad_4_3 = this.getFieldValue('keypad_4_3');
  var text_keypad_4_4 = this.getFieldValue('keypad_4_4');
  var code =   
  '  {\''+text_keypad_1_1+'\',\''+text_keypad_1_2+'\',\''+text_keypad_1_3+'\',\''+text_keypad_1_4+'\'},'+
  '\n  {\''+text_keypad_2_1+'\',\''+text_keypad_2_2+'\',\''+text_keypad_2_3+'\',\''+text_keypad_2_4+'\'},'+
  '\n  {\''+text_keypad_3_1+'\',\''+text_keypad_3_2+'\',\''+text_keypad_3_3+'\',\''+text_keypad_3_4+'\'},'+
  '\n  {\''+text_keypad_4_1+'\',\''+text_keypad_4_2+'\',\''+text_keypad_4_3+'\',\''+text_keypad_4_4+'\'}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.get_keypad_num = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var code = ''+text_keypad_name+'.getKey()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_keypad_event'] = function() {
  var text_keypad_name = this.getFieldValue('keypad_name');
  var value_keypad_event_input = Blockly.Arduino.valueToCode(this, 'keypad_event_input', Blockly.Arduino.ORDER_ATOMIC);
  var text_keypad_start_event_delay = this.getFieldValue('keypad_start_event_delay');
  var statements_keypad_event_data = Blockly.Arduino.statementToCode(this, 'keypad_event_data');

  Blockly.Arduino.definitions_['define_variate_' + value_keypad_event_input] = 'volatile char ' + value_keypad_event_input + ';';
  Blockly.Arduino.definitions_['var_keypadstart7_event' + text_keypad_name] = 'void keypadEvent_' + text_keypad_name + '(KeypadEvent ' + value_keypad_event_input + ') {' + 
  '\n' + statements_keypad_event_data +
  '\n}';
  Blockly.Arduino.setups_['setup_keypad_event_and_delay' + text_keypad_name] = text_keypad_name + '.addEventListener(keypadEvent_' + text_keypad_name + ');' + 
  '\n  ' + text_keypad_name + '.setHoldTime(' + text_keypad_start_event_delay + ');';

  var code = '';
  return code;
};

//传感器_重力感应块_获取9轴数据
Blockly.Arduino.mixgo_MPU9250 = function() {
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_FaBo9Axis_MPU9250'] = '#include <FaBo9Axis_MPU9250.h>';
  Blockly.Arduino.definitions_['var_declare_FaBo9Axis'] = 'FaBo9Axis fabo_9axis;\n float ax,ay,az,gx,gy,gz,mx,my,mz;';
  Blockly.Arduino.setups_['setup_fabo_9axis'] = 'fabo_9axis.begin();';
  var dropdown_type = this.getFieldValue('MixGo_MPU9250_GETAB');
  var code = '';
  if (dropdown_type == "a") code += 'fabo_9axis.readAccelX()';
  if (dropdown_type == "b") code += 'fabo_9axis.readAccelY()';
  if (dropdown_type == "c") code += 'fabo_9axis.readAccelZ()';
  if (dropdown_type == "d") code += 'fabo_9axis.readGyroX()';
  if (dropdown_type == "e") code += 'fabo_9axis.readGyroY()';
  if (dropdown_type == "f") code += 'fabo_9axis.readGyroZ()';
  if (dropdown_type == "g") code += 'fabo_9axis.readMagnetX()';
  if (dropdown_type == "h") code += 'fabo_9axis.readMagnetY()';
  if (dropdown_type == "i") code += 'fabo_9axis.readMagnetZ()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.NTC_TEMP = function () {
  var PIN = this.getFieldValue('PIN');
  var NominalResistance= Blockly.Arduino.valueToCode(this, 'NominalResistance', Blockly.Arduino.ORDER_ATOMIC);
  var betaCoefficient= Blockly.Arduino.valueToCode(this, 'betaCoefficient', Blockly.Arduino.ORDER_ATOMIC);
  var seriesResistor= Blockly.Arduino.valueToCode(this, 'seriesResistor', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_thermistor'] = '#include <thermistor.h>';
  Blockly.Arduino.definitions_['var_declare_thermistor'+PIN] = 'THERMISTOR thermistor'+PIN+'(' + PIN + ',' + NominalResistance+","+betaCoefficient+","+seriesResistor+");";
  var code = 'thermistor'+PIN+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
//AHT20/21温湿度传感器
Blockly.Arduino.AHT20_21 = function() {
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_RL_AHT21'] = '#include <RL_AHT21.h>';
  Blockly.Arduino.definitions_['var_declare_AHT21'] = 'AHT21Class AHT21;\n';  
  Blockly.Arduino.setups_['setup_Wire.begin'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_AHT21.begin'] = 'AHT21.begin();\n';
  var dropdown_type = this.getFieldValue('AHT21_TYPE');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};