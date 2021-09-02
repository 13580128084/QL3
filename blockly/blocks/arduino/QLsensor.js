'use strict';

goog.provide('Blockly.Blocks.sensor');
goog.require('Blockly.Blocks');
Blockly.Blocks.sensor.HUE = 40;

Blockly.Blocks['gps_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_GPS_INIT)
    this.appendValueInput("RX", Number)
    .appendField("RX#")
    .setCheck(Number);
    this.appendValueInput("TX", Number)
    .appendField("TX#")
    .setCheck(Number);
    this.appendValueInput("CONTENT", Number)
    .appendField(Blockly.MIXLY_SERIAL_BEGIN)
    .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_GPS_INIT);
  }
};

Blockly.Blocks.gps_data_available = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_GPS_DATA_AVAILABLE);
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_GPS_DATA_AVAILABLE);
  }
};

Blockly.Blocks.gps_data_encode = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_GPS_DATA_ENCODE);
    this.setOutput(true, Boolean);
  }
};

Blockly.Blocks.gps_xxx_isValid = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField("GPS")
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_GPS_LOCATION, "location"],[Blockly.MIXLY_GPS_DATE, "date"], [Blockly.MIXLY_GPS_TIME, "time"]]), "WHAT")
    .appendField(Blockly.MIXLY_GPS_ISVALID);
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_GPS_DATA_VAILD);
  }
};

Blockly.Blocks.gps_getData_xxx = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_GPS_GET)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_GPS_LOCATION_LAT, "location.lat"],[Blockly.MIXLY_GPS_LOCATION_LNG, "location.lng"], [Blockly.MIXLY_GPS_DATE_YEAR, "date.year"], [Blockly.MIXLY_GPS_DATE_MONTH, "date.month"], [Blockly.MIXLY_GPS_DATE_DAY, "date.day"], [Blockly.MIXLY_GPS_TIME_HOUR, "time.hour"], [Blockly.MIXLY_GPS_TIME_MINUTE, "time.minute"], [Blockly.MIXLY_GPS_TIME_SECOND, "time.second"], [Blockly.MIXLY_GPS_TIME_CENTISECOND, "time.centisecond"]]), "WHAT");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_GPS_GETDATA.replace('%1',this.getFieldValue('WHAT')));
  }
};
Blockly.Blocks.chupeng = {
  init: function () {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField("触碰");
    this.appendDummyInput("")  
    .appendField('端口')
    .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), 'Trig')
    this.setInputsInline(true);
    this.setOutput(true, Number);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    // this.setFieldValue("2","Trig");
    // this.setFieldValue("4","Echo");
  }
};


Blockly.Blocks.xunji_set_ini = {
 init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE); 
   this.appendDummyInput("")
   .appendField("红外循迹")
    .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), 'Trig')
   this.appendValueInput("value").setCheck(Number).appendField("参考值");
   this.setInputsInline(true);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
 }
};


Blockly.Blocks.xunji = {
  init: function () {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField("红外循迹")
    .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), 'Trig');
    this.appendDummyInput("")
    .appendField('类型')
    .appendField(new Blockly.FieldDropdown([['模拟数值','1'],['高低电平','2'],['模拟电平','3']]), 'Type')
    this.setInputsInline(true);
    this.setOutput(true, Number);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    // this.setFieldValue("2","Trig");
    // this.setFieldValue("4","Echo");
  }
};

Blockly.Blocks.chaoshengbo2 = {
  init: function () {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_CHAOSHENGBO);
    this.appendDummyInput("")  
    .appendField('端口')
    .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), 'Trig')
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
    // this.setFieldValue("2","Trig");
    // this.setFieldValue("4","Echo");
  }
};



//TCS230颜色传感器 获取RGB值
Blockly.Blocks.apds9960= {
  init: function() { 
    this.appendDummyInput()  
    .appendField("Apds9960")
    .appendField(Blockly.MIXLY_GET)
    .appendField(new Blockly.FieldDropdown([["环境光",'0'],[Blockly.Msg.COLOUR_RGB_RED,'1'],[Blockly.Msg.COLOUR_RGB_GREEN,'2'],[Blockly.Msg.COLOUR_RGB_BLUE,'3'],["接近",'4']]), 'type');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.setTooltip("颜色与距离");
    this.setHelpUrl("");
  }
};




//DHT11温湿度传感器
Blockly.Blocks.DHT = {
  init: function () {
    var WHAT = [[Blockly.MIXLY_GETTEMPERATUE, 'temperature'], [Blockly.MIXLY_GETHUMIDITY, 'humidity']];
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
    .appendField('Prot#')
    .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6']]), "PIN")
    .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
    this.setOutput(true, Number);
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('WHAT');
      var TOOLTIPS = {
        'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
        'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
      };
      return TOOLTIPS[op];
    });
  }
};




//传感器-MPU6050-获取数据
Blockly.Blocks.MPU6050= {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_MPU6050);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown([
      [Blockly.MIXLY_Accel_X, "normAccel.XAxis"], 
      [Blockly.MIXLY_Accel_Y, "normAccel.YAxis"], 
      [Blockly.MIXLY_Accel_Z, "normAccel.ZAxis"],
      [Blockly.MIXLY_Gyro_X, "normGyro.XAxis"],
      [Blockly.MIXLY_Gyro_Y, "normGyro.YAxis"],
      [Blockly.MIXLY_Gyro_Z, "normGyro.ZAxis"],
      [Blockly.MIXLY_readTempC, "mpu.readTemperature()"]
      ]), "MPU6050_TYPE");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

//传感器-MPU6050-更新数据
Blockly.Blocks.MPU6050_update= {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.MIXLY_MPU6050+Blockly.MIXLY_update_data);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setInputsInline(true);
 }
};

var Encoder_NO = [
[Blockly.MIXLY_ENCODER+1,"1"], 
[Blockly.MIXLY_ENCODER+2,"2"], 
[Blockly.MIXLY_ENCODER+3,"3"], 
[Blockly.MIXLY_ENCODER+4,"4"]
];
//旋转编码器定义
Blockly.Blocks['encoder_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETUP)
    .appendField(Blockly.MIXLY_ENCODER);
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(Encoder_NO), "Encoder_NO");
    this.appendDummyInput("")  
    .appendField('DT')
    .appendField(new Blockly
      .FieldDropdown(profile.default.digital), "DT")
    .appendField('CLK')
    .appendField(new Blockly
      .FieldDropdown(profile.default.digital), "CLK");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl("");
    // this.setFieldValue("2","DT");
    // this.setFieldValue("4","CLK");
  }
};

//旋转编码器赋值
Blockly.Blocks['encoder_write'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(Encoder_NO), "Encoder_NO");
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_VALUE2);
    this.appendValueInput("value")
    .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

//旋转编码器读值
Blockly.Blocks['encoder_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(Encoder_NO), "Encoder_NO");
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SERIAL_READ);
    this.setOutput(true, Number);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

//BME280读取
Blockly.Blocks['BME280_READ'] = {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput()
   .appendField(Blockly.MIXLY_SERIAL_READ)
   .appendField(new Blockly.FieldDropdown([["BME280","bme"], ["BMP280","bmp"]]), "TYPE");
   this.appendValueInput("address")
   .appendField(Blockly.MIXLY_LCD_ADDRESS);
   this.appendDummyInput()
.appendField(Blockly.MIXLY_GET)
   .appendField(new Blockly.FieldDropdown([[Blockly.blynk_IOT_IR_TEMP,"readTemperature()"], [Blockly.MIXLY_Humidity,"readHumidity()"], [Blockly.MIXLY_Altitude,"readPressure()"],[ Blockly.MIXLY_HEIGHT ,"readAltitude(SEALEVELPRESSURE_HPA)"] ]), "BME_TYPE")
   this.setOutput(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
 }
};

//PS2
Blockly.Blocks.PS2_init={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.MIXLY_SETUP+Blockly.PS2);
   this.appendDummyInput("")  
   .appendField('DAT#')
   .appendField(new Blockly.FieldDropdown(profile.default.digital), "PS2_DAT")
   .appendField('CMD#')
   .appendField(new Blockly.FieldDropdown(profile.default.digital), "PS2_CMD")
   .appendField('SEL#')
   .appendField(new Blockly.FieldDropdown(profile.default.digital), "PS2_SEL")
   .appendField('CLK#')
   .appendField(new Blockly.FieldDropdown(profile.default.digital), "PS2_CLK");
   this.appendDummyInput("")
   .appendField(Blockly.PS2_setRumble)
   .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON,"true"],[Blockly.MIXLY_OFF,"false"]]), "rumble");
   this.setInputsInline(true);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setTooltip('');
   this.setFieldValue("2","PS2_DAT");
   this.setFieldValue("4","PS2_CMD");
   this.setFieldValue("5","PS2_SEL");
   this.setFieldValue("12","PS2_CLK");
 }
};
Blockly.Blocks.PS2_update= {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.PS2+Blockly.MIXLY_update_data);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setInputsInline(true);
 }
};
var PSBUTTON =[
[Blockly.PS2_TRIANGLE,"PSB_GREEN"],
[Blockly.PS2_CIRCLE,"PSB_RED"],
[Blockly.PS2_CROSS,"PSB_BLUE"],
[Blockly.PS2_SQUARE,"PSB_PINK"],
[Blockly.PS2_L1,"PSB_L1"],
[Blockly.PS2_L2,"PSB_L2"],
// ["PSB_L3","PSB_L3"],
[Blockly.PS2_R1,"PSB_R1"],
[Blockly.PS2_R2,"PSB_R2"],
// ["PSB_R3","PSB_R3"],
[Blockly.PS2_UP,"PSB_PAD_UP"],
[Blockly.PS2_RIGHT,"PSB_PAD_RIGHT"],
[Blockly.PS2_DOWN,"PSB_PAD_DOWN"],
[Blockly.PS2_LEFT,"PSB_PAD_LEFT"],
[Blockly.PS2_SELECT,"PSB_SELECT"],
[Blockly.PS2_START,"PSB_START"]
];

//
Blockly.Blocks.PS2_Button={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.PS2_BUTTON)
   .appendField(new Blockly.FieldDropdown(PSBUTTON), "psbt")
   .appendField(Blockly.MIXLY_PULSEIN_STAT)
   .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_BUTTON_HOLD ,"Button"],[Blockly.MIXLY_BUTTON_PRESSED, "ButtonPressed"],[Blockly.MIXLY_BUTTON_RELEASED,"ButtonReleased"],[Blockly.MIXLY_CHANGE,"NewButtonState"]]), "btstate");
   this.setOutput(true, Boolean);
   this.setTooltip('');
 }
};

Blockly.Blocks.PS2_stk={
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    var PSSTK =[
    [Blockly.PS2_RX,"PSS_RX"],
    [Blockly.PS2_RY,"PSS_RY"],
    [Blockly.PS2_LX,"PSS_LX"],
    [Blockly.PS2_LY,"PSS_LY"],
    ];
    this.appendDummyInput("")
    .appendField(Blockly.PS2_stick)
    .appendField(new Blockly.FieldDropdown(PSSTK), "psstk");
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

//传感器-颜色识别-获取数据
var TCS34725_GETRGB = [
[Blockly.Msg.COLOUR_RGB_RED, "getR()"],
[Blockly.Msg.COLOUR_RGB_GREEN, "getG()"],
[Blockly.Msg.COLOUR_RGB_BLUE, "getB()"]
];

var DF_TCS34725_COLOR = [
[Blockly.Msg.COLOUR_RGB_RED, "tcs34725.getRedToGamma()"],
[Blockly.Msg.COLOUR_RGB_GREEN, "tcs34725.getGreenToGamma()"],
[Blockly.Msg.COLOUR_RGB_BLUE, "tcs34725.getBlueToGamma()"],
];

Blockly.Blocks.TCS34725_Get_RGB = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.TCS34725_Get_RGB)
    .appendField(new Blockly.FieldDropdown(DF_TCS34725_COLOR), "DF_TCS34725_COLOR");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

//初始化TCS230颜色传感器
Blockly.Blocks.tcs230_init= {
  init: function() { 
    this.appendDummyInput()  
    .appendField(Blockly.MIXLY_SETUP+" TCS230");
    this.appendValueInput("tcs230_s0")
    .setCheck(null)  
    .appendField("S0");
    this.appendValueInput("tcs230_s1")
    .setCheck(null)  
    .appendField("S1");
    this.appendValueInput("tcs230_s2")
    .setCheck(null)  
    .appendField("S2");
    this.appendValueInput("tcs230_s3")
    .setCheck(null)  
    .appendField("S3");
    this.appendValueInput("tcs230_led")
    .setCheck(null)  
    .appendField("LED");
    this.appendValueInput("tcs230_out")
    .setCheck(null)  
    .appendField("OUT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//TCS230颜色传感器 获取RGB值
Blockly.Blocks.tcs230_Get_RGB= {
  init: function() { 
    this.appendDummyInput()  
    .appendField("TCS230")
    .appendField(Blockly.MIXLY_GET)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.COLOUR_RGB_RED,"R"],[Blockly.Msg.COLOUR_RGB_GREEN,"G"],[Blockly.Msg.COLOUR_RGB_BLUE,"B"]]), "tcs230_color");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['Arduino_keypad_4_4_start'] = {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_CENTRE)
   .appendField(Blockly.MIXLY_SETUP+Blockly.MIXLY_Keypad);
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField(new Blockly.FieldTextInput("KEYPAD_4_4"), "keypad_name");
   this.appendValueInput("keypad_row")
   .setCheck(null)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField(Blockly.Msg.DATAFRAME_RAW+Blockly.MIXLY_PIN);
   this.appendValueInput("keypad_col")
   .setCheck(null)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField(Blockly.Msg.DATAFRAME_COLUMN+Blockly.MIXLY_PIN);
   this.appendValueInput("keypad_type")
   .setCheck(null)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField(Blockly.MIXLY_Keypad_define);
   this.setNextStatement(true, null);
   this.setPreviousStatement(true);  
   this.setTooltip("");
   this.setHelpUrl("");
 }
};

Blockly.Blocks['keypad_row_data'] = {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendValueInput("keypad_row_1", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("1#");
   this.appendValueInput("keypad_row_2", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("2#");
   this.appendValueInput("keypad_row_3", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("3#");
   this.appendValueInput("keypad_row_4", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("4#");
   this.setInputsInline(true);
   this.setOutput(true, null);    
   this.setTooltip("");
   this.setHelpUrl("");
 }
};

Blockly.Blocks['keypad_col_data'] = {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendValueInput("keypad_col_1", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("1#");
   this.appendValueInput("keypad_col_2", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("2#");
   this.appendValueInput("keypad_col_3", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("3#");
   this.appendValueInput("keypad_col_4", Number)
   .setCheck(Number)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField("4#");
   this.setInputsInline(true);
   this.setOutput(true, null);    
   this.setTooltip("");
   this.setHelpUrl("");
 }
};

Blockly.Blocks['keypad_type_data'] = {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_CENTRE)
   .appendField(new Blockly.FieldTextInput("1"), "keypad_1_1")
   .appendField(new Blockly.FieldTextInput("2"), "keypad_1_2")
   .appendField(new Blockly.FieldTextInput("3"), "keypad_1_3")
   .appendField(new Blockly.FieldTextInput("A"), "keypad_1_4");
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_CENTRE)
   .appendField(new Blockly.FieldTextInput("4"), "keypad_2_1")
   .appendField(new Blockly.FieldTextInput("5"), "keypad_2_2")
   .appendField(new Blockly.FieldTextInput("6"), "keypad_2_3")
   .appendField(new Blockly.FieldTextInput("B"), "keypad_2_4");
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_CENTRE)
   .appendField(new Blockly.FieldTextInput("7"), "keypad_3_1")
   .appendField(new Blockly.FieldTextInput("8"), "keypad_3_2")
   .appendField(new Blockly.FieldTextInput("9"), "keypad_3_3")
   .appendField(new Blockly.FieldTextInput("C"), "keypad_3_4");
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_CENTRE)
   .appendField(new Blockly.FieldTextInput("*"), "keypad_4_1")
   .appendField(new Blockly.FieldTextInput("0"), "keypad_4_2")
   .appendField(new Blockly.FieldTextInput("#"), "keypad_4_3")
   .appendField(new Blockly.FieldTextInput("D"), "keypad_4_4");
   this.setOutput(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
 }
};

Blockly.Blocks['get_keypad_num'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput("KEYPAD_4_4"), "keypad_name")
    .appendField(Blockly.MIXLY_Keypad_GETKEY);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino_keypad_event'] = {
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput()
   .appendField(Blockly.MIXLY_Keypad)
   .appendField(new Blockly.FieldTextInput("KEYPAD_4_4"), "keypad_name");
   this.appendValueInput("keypad_event_input")
   .setCheck(null)
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField(Blockly.MIXLY_Keypad_EVENT);
   this.appendDummyInput()
   .setAlign(Blockly.ALIGN_RIGHT)
   .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_INTERVAL)
   .appendField(new Blockly.FieldTextInput("1000"), "keypad_start_event_delay")
   .appendField(Blockly.MIXLY_MILLIS);
   this.appendStatementInput("keypad_event_data")
   .setCheck(null)
   .appendField(Blockly.MIXLY_DO );
   this.setInputsInline(false);    
   this.setTooltip("");
   this.setHelpUrl("");
 }
};


var MixGo_MPU9250_GETAB = [
[Blockly.MixGo_MPU9250_AX, "a"],
[Blockly.MixGo_MPU9250_AY, "b"],
[Blockly.MixGo_MPU9250_AZ, "c"],
[Blockly.MixGo_MPU9250_GX, "d"],
[Blockly.MixGo_MPU9250_GY, "e"],
[Blockly.MixGo_MPU9250_GZ, "f"],
[Blockly.MixGo_MPU9250_MX, "g"],
[Blockly.MixGo_MPU9250_MY, "h"],
[Blockly.MixGo_MPU9250_MZ, "i"]
];

//传感器_重力感应块_获取9轴数据
Blockly.Blocks.mixgo_MPU9250 = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField("MPU9250"+Blockly.MixGo_MPU9250);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown(MixGo_MPU9250_GETAB), "MixGo_MPU9250_GETAB");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip("");
    this.setHelpUrl('');
  }
};

//NTC电阻
Blockly.Blocks.NTC_TEMP = {
  init: function () {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("")
    .appendField("NTC")
    .appendField(Blockly.MIXLY_TEMP);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("NominalResistance")
    .setCheck(Number)
    .appendField(Blockly.MIXLY_NominalResistance);
    this.appendValueInput("betaCoefficient")
    .setCheck(Number)
    .appendField(Blockly.MIXLY_betaCoefficient);
    this.appendValueInput("seriesResistor")
    .setCheck(Number)
    .appendField(Blockly.MIXLY_seriesResistor);
    this.setInputsInline(false);
    this.setOutput(true, Number);
    this.setTooltip();
  }
};

//AHT20/21温湿度传感器
Blockly.Blocks.AHT20_21 = {
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    this.appendDummyInput("").appendField("AHT20/21"+Blockly.MIXLY_TEM_HUM)
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_TEMPERATURE, "AHT21.GetTemperature()"],[Blockly.MIXLY_Humidity, "AHT21.GetHumidity()"],[Blockly.MIXLY_DewPoint, "AHT21.GetDewPoint()"]]), "AHT21_TYPE");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip();
  }
};
