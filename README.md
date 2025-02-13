# Sada Calls Mobile

This project contains the source code for the Sada Calls Mobile application.

## Senior Developer

Sohail Sheikh

## Building the Application

### Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Android Studio](https://developer.android.com/studio)
- Java Development Kit (JDK) version 8 or higher
- Gradle

### Steps to Build

#### 1. Navigate to the Android Directory

Open a terminal and navigate to the `android` folder of your project:

```bash
cd android
```

#### 2. Build the Release APK

Run the following command to assemble a release build of the app:

```bash
./gradlew assembleRelease
```

After the build completes successfully, the release APK will be located in the following directory:

```bash
android/app/build/outputs/apk/release/
```

#### 3. Build the Debug APK

If you need a debug version of the APK, run the following command:

```bash
./gradlew assembleDebug
```

The debug APK will be located in:

```bash
android/app/build/outputs/apk/debug/
```

## Notes

- Make sure your environment variables (e.g., `ANDROID_HOME`, `JAVA_HOME`) are properly configured.
- Use `assembleRelease` for production-ready builds and `assembleDebug` for testing purposes.
- If you encounter any issues, consult the logs for detailed error information or check your Gradle and Android setup.
