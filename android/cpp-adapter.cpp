#include <jni.h>
#include "react-native-rn-cpp-calculator.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rncppcalculator_RnCppCalculatorModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rncppcalculator::multiply(a, b);
}
