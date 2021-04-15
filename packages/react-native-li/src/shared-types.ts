import type { CounterStyleRenderer, RtlOptions } from '@jsamr/counter-style';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

/**
 * Props for the {@link MarkerBox} component.
 *
 * @public
 */
export interface MarkerBoxProps {
  /**
   * Style for the container `Text` element.
   */
  style: StyleProp<TextStyle>;
  /**
   * Style for any text element. Should not contain CSS box model properties.
   */
  markerTextStyle: TextStyle;
  /**
   * The width for the marker text element.
   */
  markerTextWidth: number;
  /**
   * The renderer to generate the marker string.
   */
  counterRenderer: CounterStyleRenderer;
  /**
   * The index to render.
   */
  counterIndex: number;
  /**
   * The maximum length of the `markerString` in range.
   */
  maxNumOfCodepoints: number;
}

/**
 * Props for the {@link MarkedList} component.
 *
 * @public
 */
export interface MarkedListProps {
  /**
   * The counter renderer for this list.
   */
  counterRenderer: CounterStyleRenderer;
  /**
   * Set the line layout in `flexDirection: 'row-reverse'` and left-align the
   * marker box.
   *
   * @remarks Will be ignored if `I18nManager.isRTL` is `true`.
   *
   * @defaultValue false
   */
  rtlLineReversed?: boolean;
  /**
   * Should the marker string be rendered in reverse order?
   *
   * @remarks Fine-grained options are available when you provide an option
   * object. See `@jsamr/counter-style` documentation.
   *
   * @defaultValue false
   */
  rtlMarkerReversed?: true | false | RtlOptions;
  /**
   * The index for the first item in the list. Negative indexes are supported.
   *
   * @defaultValue 1
   */
  startIndex?: number;
  /**
   * Style for the line wrapper.
   */
  lineStyle?: StyleProp<ViewStyle>;
  /**
   * A plain JavaScript object text style for the marker string. It is
   * advised to pass the same `fontSize` and `lineHeight` as the list content
   * for perfect horizontal alignment.
   *
   * @remarks It should not contain CSS box model properties and it should be a
   * plain JavaScript object. **Do not** use StyleSheet or array styles.
   */
  markerTextStyle?: TextStyle;
  /**
   * Style for the marker box container. It is discouraged to set
   * `(min,max)width` that way. Use
   * {@link MarkedListProps.computeMarkerBoxWidth} instead.
   */
  markerBoxStyle?: StyleProp<ViewStyle>;
  /**
   * A function to compute marker box width depending on the maximum length of
   * the marker string in range.
   *
   * @remarks Font size is derived from `markerStyle` prop.
   */
  computeMarkerBoxWidth?: (
    maxCodepointsLengthInRange: number,
    fontSize: number
  ) => number;
  /**
   * A custom Marker render function.
   *
   * @remarks You are advised to use {@link MarkerBox} component.
   */
  renderMarker?: (props: MarkerBoxProps) => ReactNode;
}
