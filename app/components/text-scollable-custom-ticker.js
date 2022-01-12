import React from 'react';
import {Text, useWindowDimensions} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const TextScollableCustomTicker = ({
  message = '',
  duration = 5000,
  vertical = false,
  wrapperStyles = {},
  textStyles = {},
  easingAnimation = 'linear',
  numberOfLines = 1,
  dimensionDivider = 4,
}) => {
  const window = useWindowDimensions();
  const axisDimension = vertical ? window.height : window.width;
  const offset = useSharedValue(axisDimension / dimensionDivider);

  const easing = {
    linear: Easing.linear,
    ease: Easing.ease,
    quad: Easing.quad,
    cubic: Easing.cubic,
    poly: Easing.poly,
    sin: Easing.sin,
    circle: Easing.circle,
    exp: Easing.exp,
    elastic: Easing.elastic,
    back: Easing.back,
    bounce: Easing.bounce,
  };

  const animatedStyles = useAnimatedStyle(() => {
    if (vertical) {
      return {
        transform: [{translateY: withSpring(offset.value)}, {rotate: '90deg'}],
      };
    } else {
      return {
        transform: [{translateX: withSpring(offset.value)}],
      };
    }
  });

  offset.value = withRepeat(
    withTiming(-axisDimension / dimensionDivider, {
      duration: duration,
      easing: Easing.inOut(easing[easingAnimation]),
    }),
    -1,
    true,
  );

  return (
    <Animated.View style={[wrapperStyles, animatedStyles]}>
      <Text
        ellipsizeMode="clip"
        numberOfLines={numberOfLines}
        style={[textStyles, {width: axisDimension}]}>
        {message}
      </Text>
    </Animated.View>
  );
};

export default TextScollableCustomTicker;
