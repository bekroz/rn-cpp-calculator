#ifdef __cplusplus
#import "react-native-rn-cpp-calculator.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnCppCalculatorSpec.h"

@interface RnCppCalculator : NSObject <NativeRnCppCalculatorSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnCppCalculator : NSObject <RCTBridgeModule>
#endif

@end
