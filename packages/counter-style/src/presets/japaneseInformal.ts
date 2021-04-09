import { CJK_SUFFIX } from '../constants';
import CounterStyle from '../CounterStyle';
import cjkDecimal from './cjkDecimal';

const japaneseInformal = CounterStyle.additive({
  /* 9000 九千, 8000 八千, 7000 七千, 6000 六千, 5000 五千, 4000 四千,
     3000 三千, 2000 二千, 1000 千, 900 九百, 800 八百, 700 七百,
     600 六百, 500 五百, 400 四百, 300 三百, 200 二百, 100 百, 90 九十,
     80 八十, 70 七十, 60 六十, 50 五十, 40 四十, 30 三十, 20 二十, 10 十,
     9 九, 8 八, 7 七, 6 六, 5 五, 4 四, 3 三, 2 二, 1 一, 0 〇 */
  9000: '\u4E5D\u5343',
  8000: '\u516B\u5343',
  7000: '\u4E03\u5343',
  6000: '\u516D\u5343',
  5000: '\u4E94\u5343',
  4000: '\u56DB\u5343',
  3000: '\u4E09\u5343',
  2000: '\u4E8C\u5343',
  1000: '\u5343',
  900: '\u4E5D\u767E',
  800: '\u516B\u767E',
  700: '\u4E03\u767E',
  600: '\u516D\u767E',
  500: '\u4E94\u767E',
  400: '\u56DB\u767E',
  300: '\u4E09\u767E',
  200: '\u4E8C\u767E',
  100: '\u767E',
  90: '\u4E5D\u5341',
  80: '\u516B\u5341',
  70: '\u4E03\u5341',
  60: '\u516D\u5341',
  50: '\u4E94\u5341',
  40: '\u56DB\u5341',
  30: '\u4E09\u5341',
  20: '\u4E8C\u5341',
  10: '\u5341',
  9: '\u4E5D',
  8: '\u516B',
  7: '\u4E03',
  6: '\u516D',
  5: '\u4E94',
  4: '\u56DB',
  3: '\u4E09',
  2: '\u4E8C',
  1: '\u4E00',
  0: '\u3007'
})
  .withNegative('\u30DE\u30A4\u30CA\u30B9' /* マイナス */)
  .withRange(-9999, 9999)
  .withFallback(
    cjkDecimal.withNegative('\u30DE\u30A4\u30CA\u30B9' /* マイナス */)
  )
  .withSuffix(CJK_SUFFIX);

export default japaneseInformal;
