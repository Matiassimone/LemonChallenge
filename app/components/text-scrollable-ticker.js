import React from 'react';

import {luminusWhite} from '../constants/colors-off-themes';
import {smallText} from '../constants/text-styles';

import TextTicker from 'react-native-text-ticker';

const TextScrollableTicker = ({
  textStyle,
  message,
  duration,
  scrollSpeed,
  repeatSpacer = 10,
  isRTL = false,
  animationType = 'bounce',
}) => {
  return (
    <TextTicker
      loop
      bounce
      scroll
      style={[smallText, textStyle, {color: luminusWhite}, textStyle]}
      duration={duration}
      scrollSpeed={scrollSpeed}
      isRTL={isRTL}
      repeatSpacer={repeatSpacer}
      bounceSpeed={50}
      animationType={animationType}>
      {message}
    </TextTicker>
  );
};

export default TextScrollableTicker;
