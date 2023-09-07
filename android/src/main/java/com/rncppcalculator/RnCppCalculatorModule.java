package com.rncppcalculator;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = RnCppCalculatorModule.NAME)
public class RnCppCalculatorModule extends NativeRnCppCalculatorSpec {
  public static final String NAME = "RnCppCalculator";

  public RnCppCalculatorModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("cpp");
  }

  private static native double nativeAdd(double a, double b);

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @Override
  public double add(double a, double b) {
    return nativeAdd(a, b);
  }
}
