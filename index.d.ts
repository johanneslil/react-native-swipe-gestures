declare module 'react-native-swipe-detect' {
  import { Component } from 'react';
  import {
    PanResponderGestureState,
    ViewProps
  } from 'react-native';

  export interface GestureRecognizerProps extends ViewProps {
    config?: GestureRecognizerConfig;
    onSwipe?(gestureName: string, gestureState: PanResponderGestureState): void;
    onSwipeUp?(gestureState: PanResponderGestureState): void;
    onSwipeDown?(gestureState: PanResponderGestureState): void;
    onSwipeLeft?(gestureState: PanResponderGestureState): void;
    onSwipeRight?(gestureState: PanResponderGestureState): void;
  }

  interface GestureRecognizerConfig {
    /**
     * Velocity that has to be breached in order for swipe to be triggered (vx and vy properties of gestureState)
     * @default 0.3
     */
    velocityThreshold?: number;

    /**
     * Absolute offset that shouldn't be breached for swipe to be triggered (dy for horizontal swipe, dx for vertical swipe)
     * @default 80
     */
    directionalOffsetThreshold?: number;

    /**
     * Absolute distance that should be breached for the gesture to not be considered a click (dx or dy properties of gestureState)
     * @default 5
     */
    gestureIsClickThreshold?: number;

    /**
     * Determines whether upward swipes should be recognized
     * @default true
     */
    enableSwipeUp?: boolean;

    /**
     * Determines whether downward swipes should be recognized
     * @default true
     */
    enableSwipeDown?: boolean;

    /**
     * Determines whether left swipes should be recognized
     * @default true
     */
    enableSwipeLeft?: boolean;

    /**
     * Determines whether right swipes should be recognized
     * @default true
     */
    enableSwipeRight?: boolean;
  }

  class GestureRecognizer extends Component<GestureRecognizerProps> {}

  export default GestureRecognizer;
}
