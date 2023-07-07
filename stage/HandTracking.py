import cv2
import mediapipe as mp
import pyautogui
import time


def up(lst):
    if (lst.landmark[5].y*100 - lst.landmark[4].y*100) > 15:
        return True
    return False


def down(lst):
    if (lst.landmark[5].y*100 - lst.landmark[4].y*100) < 15:
        return True
    return False


def right(lst):
    if (lst.landmark[5].x*100 - lst.landmark[4].x*100) < -10:
        return True
    return False


def left(lst):
    if (lst.landmark[5].x*100 - lst.landmark[4].x*100) > 10:
        return True
    return False


def index(lst):
    if (lst.landmark[5].y*100 - lst.landmark[8].y*100) > 20:
        return True
    return False


def middle(lst):
    print(lst.landmark[9].y*100 - lst.landmark[12].y*100)
    if (lst.landmark[9].y*100 - lst.landmark[12].y*100) > 20:
        return True
    return False


cap = cv2.VideoCapture(0)
hand_detector = mp.solutions.hands.Hands(max_num_hands=1)
drawing = mp.solutions.drawing_utils
screen_w, screen_h = pyautogui.size()

index_y = 0

while True:
    _, frame = cap.read()
    frame = cv2.flip(frame, 1)
    frame_h, frame_w, _ = frame.shape
    # hand output
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    output = hand_detector.process(rgb_frame)
    hands = output.multi_hand_landmarks
    if hands:
        hand_keyPoints = output.multi_hand_landmarks[0]

        downs = down(hand_keyPoints)
        ups = up(hand_keyPoints)
        lefts = left(hand_keyPoints)
        rights = right(hand_keyPoints)
        indexs = index(hand_keyPoints)
        middles = middle(hand_keyPoints)

        if not (indexs or middles):
            if ups and not (lefts or rights):
                pyautogui.press("up")

            if downs and not (lefts or rights):
                pyautogui.press("down")

            if lefts and not indexs:
                pyautogui.press("left")
                pyautogui.sleep(0.5)

            if rights and not indexs:
                pyautogui.press("right")
                pyautogui.sleep(0.5)

            if indexs and lefts and not downs:
                print("true")

        if indexs:
            landmark = hand_keyPoints.landmark[8]
            x = int(landmark.x*frame_w)
            y = int(landmark.y*frame_h)
            index_x = screen_w/frame_w*x
            index_y = screen_h/frame_h*y
            print(index_x, index_y)
            pyautogui.moveTo(index_x, index_y)
        if (middles and indexs):
            pyautogui.click()
            pyautogui.sleep(1)

        drawing.draw_landmarks(frame, hand_keyPoints,
                               mp.solutions.hands.HAND_CONNECTIONS)
    cv2.imshow("win", frame)
    cv2.waitKey(1)
