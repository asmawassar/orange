
=== Overview ===

This is a touchless applicaiton designed to allow touchless touch-screen interaction via Ultraleap hand tracking using a Leap Motion Controller.


=== Requirements ===

- Windows 10
- Leap Motion tracking module
- Leap Motion V4 installed


=== Getting started ===

- Set up your monitor to be a comfortable height and distance from you.
- Place your tracking module on the desk face up, in front and below the monitor between 5cm - 20cm away.
- Ensure Leap Motion V4 service is installed and running on your machine: https://www2.leapmotion.com/v4-developer-beta-windows
- You should open the Leap Motion Control Panel and disable "Auto-orient Tracking".
    - Open the Diagnostic Visualizer to check the hand is being tracked. You may need to click "Reverse Orientation" if the camera orientation is incorrect. The wrist should be coming from the bottom of the image.
- Run the .exe included with this build.

You will now need to configure the application for your screen size and Leap position.
It is best if you have a ruler or tape measure to hand in order to check the measurements that will be taken in the following step.


=== Setting up ===


== Selecting the correct screen ==

The applicaiton will automatically run on the "main display".
If you have more than 1 monitor connected, either unplug them, or set the monitor you want to test with to be your "Main Display" in Windows Display Settings.


== Automatic Setup ==

By default the setup wizard will load. If it is not open, ensure the application is focussed and press 'C' to open the setup wizard.

Note:   Automatic Setup can be used if the screen and Leap are orthogonal to each other, with Leap underneath the screen, facing upwards.
        For any other Leap-Screen rotation angle (beyond orthogonal), you will need to use Manual Setup or the config file and enter these distances and angles manually.
        Read on for top-down mounting guide.

In the first instance, choose Automatic Setup where you will be given instructions to follow to calibrate the screen and Leap.
    Place your finger as close to the screen as you can and in the centre of the dots (only half of each dot will be visible on screen).

Once complete, you may test the calibration of the cursor. If this is not sufficient, you can re-run the automatic setup, or move to Manual Setup to adjust.


== Manual Setup ==

If you have measurements of the screen and distance to the Leap, or have run Automatic Setup and need to slightly adjust values, use Manual Setup from the Setup Wizard ('C').

This screen provides various values which are default and you are able to adjust these values by typing in the text boxes.

Descriptions of each value accompany them but more detailed descriptions can be found in this document below.


== Configuring screen size & tilt and Leap position & tilt ==

The application requires knowledge about the height of your screen, as well as the Leap position relative to the bottom of the screen pixel area.

The config parameters are stored in the TouchlessConfig.json file which can be found at %userprofile%/AppData/LocalLow/Ultraleap/*APP NAME*/TouchlessConfig.json. This file can be opened by opening the setup screen (press 'C') and then press 'F'.
If you modify this file, click the Application icon in the taskbar to focus the application then press the 'R' key to load the values.
All values denoted with "M" are in meters. Values with "D" as in degrees.

= Screen size =

This is the distance in meters between the top of the pixels and bottom of the pixels of the screen itself.
Do not measure the bezel or outside of the pixel area of the screen.
The bottom of the screen is relative to the bottom of the pixel area.

= Screen tilt =

For a rotated screen, set the "ScreenRotationD" property.
0 degrees is a vertical screen facing towards the user.
90 degrees is a horizontal screen facing the ceiling.

= Leap position =

For the Leap position, set the "LeapPositionRelativeToScreenBottomM" property.
Spacial axis for the Leap position relative to the centre of the bottom of the screen (pixel area, not the bezel or any other edge):
    X is right and left (positive right, negative left)
    Y is up and down (positive up, negative down)
    Z is towards or away from screen (positive toward the screen, negative away from screen)

= Leap tilt =

To tilt the tracking camera, change the "LeapRotationD" X property:

 - a positive X value will tilt the Leap towards the screen.
 - a negative X value will tilt the Leap away from the screen.

For example, a bottom mount at 30 degrees tilted towards the screen:

    "LeapRotationD": {
        "x": 30.0,
        "y": 0.0,
        "z": 0.0
    },

And a top mount at 20 degrees tilted away from the screen:

    "LeapRotationD": {
        "x": -20.0,
        "y": 0.0,
        "z": 180.0
    },

== Top-down tracking placement ==

To mount the tracking camera above the screen, do the following:

 - Attach the tracking camera above the screen so that:
    - For LMC: The green light is still facing forwards and the USB cable is coming out of the right of the device.
 - Open TouchlessConfig.json (in app press 'C' then 'F') and set the "LeapRotationD" Z property to 180.0:

    "LeapRotationD": {
        "x": 0.0,
        "y": 0.0,
        "z": 180.0
    },

See above for tilting towards/away from the screen once mounted in a bottom or top orientation.


=== Using the Application ===

- Hold your finger up in front of your monitor. You will see a cursor projected onto the screen.
- Move your finger forwards towards the screen. A circle will appear and begin to shrink inwards.
- Once the circle touches the center, the dot will turn orange and a "touch event" will register with Windows.
- Move your finger away to confirm your click event.
- To drag, hold your finger in then either drag across the screen or hold it still for a moment. The dot will turn purple to indicate a drag action is occurring.


=== Configuring touch distance from screen ===

The distance at which a "touch" is registered can be configured in the TouchlessConfig.json by changing the "TouchPlaneDistanceFromScreenM" value.
The default is 0.06 meters (6cm).


=== Appendix ===

== List of TouchlessConfig.json properties ==

After modifying the TouchlessConfig.json file directly, click the Application icon in the taskbar to focus the application then press the 'R' key to load the values.

ScreenHeightM                           -   Height of the pixel area of the screen. If the pixels of the display don't reach the edge of the monitor, measure just from the bottom to the top of the pixels (do not include a bezel or anything else). Positive number.

LeapPositionRelativeToScreenBottomM     -   Position of the center of your tracking module relative to the bottom of the pixel area of your screen.
                                                X is right and left (positive right, negative left)
                                                Y is up and down (positive up, negative down)
                                                Z is towards or away from screen (positive toward the screen, negative away from screen)

LeapRotationD                           -   Rotation of your tracking module.
                                                If bottom mounted:
                                                    X is towards/away from the screen (Pitch) - positive tilts towards the screen, negative tilts away from the screen.
                                                    Y is spinning from above (Yaw) - positive is clockwise, negative is counter-clockwise.
                                                    Z is flip parallel to the screen (Roll) - for bottom mounting, this should be set to 0.0.
                                                If top mounted:
                                                    X is towards/away from the screen (Pitch) - positive tilts towards the screen, negative tilts away from the screen.
                                                    Y is spinning from above (Yaw) - positive is still clockwise, negative is counter-clockwise.
                                                    Z is flip parallel to the screen (Roll) - for top mounting, this should be set to 180.0.

ScreenRotationD                         -   Tilt angle of the screen (0 is vertical with screen facing outward, 90 is horizontal with screen facing directly up to ceiling)

TouchPlaneDistanceFromScreenM           -   Virtual screen position. The distance from the physical screen that a "touch" event will be triggered. Positive number.
DistanceBetweenHoverStartToButtonPressM -   Distance between the virtual screen and when a "hover" event will begin as you move your finger towards it. Positive number.

Example structure:

{
    "ScreenHeightM": 0.33,
    "LeapPositionRelativeToScreenBottomM": {
        "x": 0.0,
        "y": -0.20,
        "z": -0.22
    },
    "LeapRotationD": {
        "x": 0.0,
        "y": 0.0,
        "z": 0.0
    },
    "ScreenRotationD": 0.0,
    "TouchPlaneDistanceFromScreenM": 0.02,
    "DistanceBetweenHoverStartToButtonPressM": 0.01
}

== List of Settings.json properties ==

The settings parameters are stored in the Settings.json file which can be found at %userprofile%/AppData/LocalLow/Ultraleap/*APP NAME*/Settings.json.


CursorRingColor                         -   Hex colour value (RGBA) for the ring of the ring cursor.
CursorRingOpacity                       -   Opacity for the ring of the ring cursor.
CursorDotFillColor                      -   Hex colour value (RGBA) for the fill of the dot cursor.
CursorDotFillOpacity                    -   Opacity for the fill of the dot cursor.
CursorDotBorderColor                    -   Hex colour value (RGBA) for the border of the dot cursor.
CursorDotBorderOpacity                  -   Opacity for the border of the dot cursor.
CursorColourPreset                      -   Current colour preset index for the cursor.
CursorDotSizeM                          -   Size of the cursor dot in physical meters as it will appear on the screen.
CursorRingMaxScale                      -   How big the ring will be when the user’s hand is at distance specified in CursorMaxRingScaleAtDistanceM.
CursorMaxRingScaleAtDistanceM           -   The distance the user’s hand must be so that the ring is at max scale and will begin shrinking inwards.
UseScrollingOrDragging                  -   Whether to allow the cursor to do a drag command or to instant-click. True will allow events down-hold-drag-up and down-hold-up. False will "instant-click" on screen but instantly doing down-up events.
InteractionType							-	The index for the type of interaction the user is expected to use.
ShowSetupScreenOnStartup				-	Should the setup screen appear on startup of the application?
DeadzoneRadius							-	The size of the deadzone for cusor stabilisation

Example structure:

{
    "CursorRingColor": "#F4F4F4",
    "CursorRingOpacity": 1.0,
    "CursorDotFillColor": "#F4F4F4",
    "CursorDotFillOpacity": 1.0,
    "CursorDotBorderColor": "#2B2B2B",
    "CursorDotBorderOpacity": 0.5,
    "CursorColourPreset": 1,
    "CursorDotSizeM": 0.005,
    "CursorRingMaxScale": 5.0,
    "CursorMaxRingScaleAtDistanceM": 0.1,
    "UseScrollingOrDragging": true,
    "InteractionType": 0,
    "ShowSetupScreenOnStartup": true,
    "DeadzoneRadius": 10.0
}