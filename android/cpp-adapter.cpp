#include <jni.h>
#include "react-native-rn-cpp-calculator.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rncppcalculator_RnCppCalculatorModule_nativeAdd(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rncppcalculator::add(a, b);
}
