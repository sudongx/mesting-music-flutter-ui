[Skip to main content](https://developer.android.com/reference/android/media/audiofx/Equalizer#main-content)

[![Android Developers](https://www.gstatic.com/devrel-devsite/prod/veed85ba0e3651062c793a40796e84fb34afbf8489308d45f92d5448e587e3f03/android/images/lockup.png)](https://developer.android.com/)

`/`

- English
- Deutsch
- Español – América Latina
- Français
- Indonesia
- Polski
- Português – Brasil
- Tiếng Việt
- 中文 – 简体
- 日本語
- 한국어

[Android Studio](https://developer.android.com/studio)Sign in

- [API reference](https://developer.android.com/reference)

- [Android Developers](https://developer.android.com/)
- [Develop](https://developer.android.com/develop)
- [API reference](https://developer.android.com/reference)


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

Summary:

[Nested Classes](https://developer.android.com/reference/android/media/audiofx/Equalizer#nestedclasses)


\| [Constants](https://developer.android.com/reference/android/media/audiofx/Equalizer#constants)


\| [Inherited Constants](https://developer.android.com/reference/android/media/audiofx/Equalizer#inhconstants)


\| [Inherited Fields](https://developer.android.com/reference/android/media/audiofx/Equalizer#inhfields)


\| [Ctors](https://developer.android.com/reference/android/media/audiofx/Equalizer#pubctors)


\| [Methods](https://developer.android.com/reference/android/media/audiofx/Equalizer#pubmethods)


\| [Inherited Methods](https://developer.android.com/reference/android/media/audiofx/Equalizer#inhmethods)

# Equalizer    Stay organized with collections      Save and categorize content based on your preferences.

* * *

[Kotlin](https://developer.android.com/reference/kotlin/android/media/audiofx/Equalizer "View this page in Kotlin") \|Java

`
public

class
Equalizer
`

`

``

    extends AudioEffect

``

`

|     |     |     |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object) |
| ↳ | [android.media.audiofx.AudioEffect](https://developer.android.com/reference/android/media/audiofx/AudioEffect) |
|  | ↳ | android.media.audiofx.Equalizer |

* * *

An Equalizer is used to alter the frequency response of a particular music source or of the main
output mix.

An application creates an Equalizer object to instantiate and control an Equalizer engine
in the audio framework. The application can either simply use predefined presets or have a more
precise control of the gain in each frequency band controlled by the equalizer.

The methods, parameter types and units exposed by the Equalizer implementation are directly
mapping those defined by the OpenSL ES 1.0.1 Specification (http://www.khronos.org/opensles/)
for the SLEqualizerItf interface. Please refer to this specification for more details.

To attach the Equalizer to a particular AudioTrack or MediaPlayer, specify the audio session
ID of this AudioTrack or MediaPlayer when constructing the Equalizer.

NOTE: attaching an Equalizer to the global audio output mix by use of session 0 is deprecated.

See `MediaPlayer.getAudioSessionId()` for details on audio sessions.

See `AudioEffect` class for more details on controlling audio
effects.

## Summary

| ### Nested classes |
| --- |
| `<br>        interface` | `Equalizer.OnParameterChangeListener`<br>The OnParameterChangeListener interface defines a method called by the Equalizer when a<br>parameter value has changed. |
| `<br>        class` | `Equalizer.Settings`<br>The Settings class regroups all equalizer parameters. |

| ### Constants |
| --- |
| `int` | `PARAM_BAND_FREQ_RANGE`<br>Band frequency range. |
| `int` | `PARAM_BAND_LEVEL`<br>Band level. |
| `int` | `PARAM_CENTER_FREQ`<br>Band center frequency. |
| `int` | `PARAM_CURRENT_PRESET`<br>Current preset. |
| `int` | `PARAM_GET_BAND`<br>Band for a given frequency. |
| `int` | `PARAM_GET_NUM_OF_PRESETS`<br>Request number of presets. |
| `int` | `PARAM_GET_PRESET_NAME`<br>Request preset name. |
| `int` | `PARAM_LEVEL_RANGE`<br>Band level range. |
| `int` | `PARAM_NUM_BANDS`<br>Number of bands. |
| `int` | `PARAM_STRING_SIZE_MAX`<br>Maximum size for preset name |

| ### Inherited constants |
| --- |
| From class
`android.media.audiofx.AudioEffect`

|     |     |
| --- | --- |
| `String` | `ACTION_CLOSE_AUDIO_EFFECT_CONTROL_SESSION`<br>Intent to signal to the effect control application or service that an audio session<br>is closed and that effects should not be applied anymore. |
| `String` | `ACTION_DISPLAY_AUDIO_EFFECT_CONTROL_PANEL`<br>Intent to launch an audio effect control panel UI. |
| `String` | `ACTION_OPEN_AUDIO_EFFECT_CONTROL_SESSION`<br>Intent to signal to the effect control application or service that a new audio session<br>is opened and requires audio effects to be applied. |
| `int` | `ALREADY_EXISTS`<br>Internal operation status. |
| `int` | `CONTENT_TYPE_GAME`<br>Value for `EXTRA_CONTENT_TYPE` when the type of content played is game audio |
| `int` | `CONTENT_TYPE_MOVIE`<br>Value for `EXTRA_CONTENT_TYPE` when the type of content played is video or movie |
| `int` | `CONTENT_TYPE_MUSIC`<br>Value for `EXTRA_CONTENT_TYPE` when the type of content played is music |
| `int` | `CONTENT_TYPE_VOICE`<br>Value for `EXTRA_CONTENT_TYPE` when the type of content played is voice audio |
| `String` | `EFFECT_AUXILIARY`<br>Effect connection mode is auxiliary. |
| `String` | `EFFECT_INSERT`<br>Effect connection mode is insert. |
| `String` | `EFFECT_POST_PROCESSING`<br>Effect connection mode is post processing. |
| `String` | `EFFECT_PRE_PROCESSING`<br>Effect connection mode is pre processing. |
| `int` | `ERROR`<br>Unspecified error. |
| `int` | `ERROR_BAD_VALUE`<br>Operation failed due to bad parameter value. |
| `int` | `ERROR_DEAD_OBJECT`<br>Operation failed due to dead remote object. |
| `int` | `ERROR_INVALID_OPERATION`<br>Operation failed because it was requested in wrong state. |
| `int` | `ERROR_NO_INIT`<br>Operation failed due to bad object initialization. |
| `int` | `ERROR_NO_MEMORY`<br>Operation failed due to lack of memory. |
| `String` | `EXTRA_AUDIO_SESSION`<br>Contains the ID of the audio session the effects should be applied to. |
| `String` | `EXTRA_CONTENT_TYPE`<br>Indicates which type of content is played by the application. |
| `String` | `EXTRA_PACKAGE_NAME`<br>Contains the package name of the calling application. |
| `int` | `SUCCESS`<br>Successful operation. | |

| ### Inherited fields |
| --- |
| From class
`android.media.audiofx.AudioEffect`

|     |     |
| --- | --- |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_AEC`<br>UUID for Acoustic Echo Canceler (AEC) |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_AGC`<br>UUID for Automatic Gain Control (AGC) |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_BASS_BOOST`<br>UUID for bass boost effect |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_DYNAMICS_PROCESSING`<br>UUID for Dynamics Processing |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_ENV_REVERB`<br>UUID for environmental reverberation effect |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_EQUALIZER`<br>UUID for equalizer effect |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_HAPTIC_GENERATOR`<br>UUID for Haptic Generator. |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_LOUDNESS_ENHANCER`<br>UUID for Loudness Enhancer |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_NS`<br>UUID for Noise Suppressor (NS) |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_PRESET_REVERB`<br>UUID for preset reverberation effect |
| `<br>    public<br>    static<br>    final<br>    UUID` | `EFFECT_TYPE_VIRTUALIZER`<br>UUID for virtualizer effect | |

| ### Public constructors |
| --- |
| `<br>      Equalizer(int priority, int audioSession)<br>`<br>Class constructor. |

| ### Public methods |
| --- |
| `<br>        short` | `<br>      getBand(int frequency)<br>`<br>Gets the band that has the most effect on the given frequency. |
| `<br>        int[]` | `<br>      getBandFreqRange(short band)<br>`<br>Gets the frequency range of the given frequency band. |
| `<br>        short` | `<br>      getBandLevel(short band)<br>`<br>Gets the gain set for the given equalizer band. |
| `<br>        short[]` | `<br>      getBandLevelRange()<br>`<br>Gets the level range for use by `setBandLevel(short, short)`. |
| `<br>        int` | `<br>      getCenterFreq(short band)<br>`<br>Gets the center frequency of the given band. |
| `<br>        short` | `<br>      getCurrentPreset()<br>`<br>Gets current preset. |
| `<br>        short` | `<br>      getNumberOfBands()<br>`<br>Gets the number of frequency bands supported by the Equalizer engine. |
| `<br>        short` | `<br>      getNumberOfPresets()<br>`<br>Gets the total number of presets the equalizer supports. |
| `<br>        String` | `<br>      getPresetName(short preset)<br>`<br>Gets the preset name based on the index. |
| `<br>        Equalizer.Settings` | `<br>      getProperties()<br>`<br>Gets the equalizer properties. |
| `<br>        void` | `<br>      setBandLevel(short band, short level)<br>`<br>Sets the given equalizer band to the given gain value. |
| `<br>        void` | `<br>      setParameterListener(Equalizer.OnParameterChangeListener listener)<br>`<br>Registers an OnParameterChangeListener interface. |
| `<br>        void` | `<br>      setProperties(Equalizer.Settings settings)<br>`<br>Sets the equalizer properties. |
| `<br>        void` | `<br>      usePreset(short preset)<br>`<br>Sets the equalizer according to the given preset. |

| ### Inherited methods |
| --- |
| From class
`

          android.media.audiofx.AudioEffect

`

|     |     |
| --- | --- |
| `<br>        void` | `<br>      finalize()<br>`<br>Called by the garbage collector on an object when garbage collection<br>determines that there are no more references to the object. |
| `<br>        AudioEffect.Descriptor` | `<br>      getDescriptor()<br>`<br>Get the effect descriptor. |
| `<br>        boolean` | `<br>      getEnabled()<br>`<br>Returns effect enabled state |
| `<br>        int` | `<br>      getId()<br>`<br>Returns effect unique identifier. |
| `<br>        boolean` | `<br>      hasControl()<br>`<br>Checks if this AudioEffect object is controlling the effect engine. |
| `<br>        static<br>        Descriptor[]` | `<br>      queryEffects()<br>`<br>Query all effects available on the platform. |
| `<br>        void` | `<br>      release()<br>`<br>Releases the native AudioEffect resources. |
| `<br>        void` | `<br>      setControlStatusListener(AudioEffect.OnControlStatusChangeListener listener)<br>`<br>Sets the listener AudioEffect notifies when the effect engine control is<br>taken or returned. |
| `<br>        void` | `<br>      setEnableStatusListener(AudioEffect.OnEnableStatusChangeListener listener)<br>`<br>Sets the listener AudioEffect notifies when the effect engine is enabled<br>or disabled. |
| `<br>        int` | `<br>      setEnabled(boolean enabled)<br>`<br>Enable or disable the effect. | |
| From class
`

          java.lang.Object

`

|     |     |
| --- | --- |
| `<br>        Object` | `<br>      clone()<br>`<br>Creates and returns a copy of this object. |
| `<br>        boolean` | `<br>      equals(Object obj)<br>`<br>Indicates whether some other object is "equal to" this one. |
| `<br>        void` | `<br>      finalize()<br>`<br>Called by the garbage collector on an object when garbage collection<br>determines that there are no more references to the object. |
| `<br>        final<br>        Class<?>` | `<br>      getClass()<br>`<br>Returns the runtime class of this `Object`. |
| `<br>        int` | `<br>      hashCode()<br>`<br>Returns a hash code value for the object. |
| `<br>        final<br>        void` | `<br>      notify()<br>`<br>Wakes up a single thread that is waiting on this object's<br>monitor. |
| `<br>        final<br>        void` | `<br>      notifyAll()<br>`<br>Wakes up all threads that are waiting on this object's monitor. |
| `<br>        String` | `<br>      toString()<br>`<br>Returns a string representation of the object. |
| `<br>        final<br>        void` | `<br>      wait(long timeoutMillis, int nanos)<br>`<br>Causes the current thread to wait until it is awakened, typically<br>by being _notified_ or _interrupted_, or until a<br>certain amount of real time has elapsed. |
| `<br>        final<br>        void` | `<br>      wait(long timeoutMillis)<br>`<br>Causes the current thread to wait until it is awakened, typically<br>by being _notified_ or _interrupted_, or until a<br>certain amount of real time has elapsed. |
| `<br>        final<br>        void` | `<br>      wait()<br>`<br>Causes the current thread to wait until it is awakened, typically<br>by being _notified_ or _interrupted_. | |

## Constants

### PARAM\_BAND\_FREQ\_RANGE


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_BAND_FREQ_RANGE
```

Band frequency range. Parameter ID for
`Equalizer.OnParameterChangeListener`

Constant Value:

4
(0x00000004)



### PARAM\_BAND\_LEVEL


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_BAND_LEVEL
```

Band level. Parameter ID for OnParameterChangeListener

Constant Value:

2
(0x00000002)



### PARAM\_CENTER\_FREQ


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_CENTER_FREQ
```

Band center frequency. Parameter ID for OnParameterChangeListener

Constant Value:

3
(0x00000003)



### PARAM\_CURRENT\_PRESET


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_CURRENT_PRESET
```

Current preset. Parameter ID for OnParameterChangeListener

Constant Value:

6
(0x00000006)



### PARAM\_GET\_BAND


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_GET_BAND
```

Band for a given frequency. Parameter ID for OnParameterChangeListener

Constant Value:

5
(0x00000005)



### PARAM\_GET\_NUM\_OF\_PRESETS


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_GET_NUM_OF_PRESETS
```

Request number of presets. Parameter ID for OnParameterChangeListener

Constant Value:

7
(0x00000007)



### PARAM\_GET\_PRESET\_NAME


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_GET_PRESET_NAME
```

Request preset name. Parameter ID for OnParameterChangeListener

Constant Value:

8
(0x00000008)



### PARAM\_LEVEL\_RANGE


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_LEVEL_RANGE
```

Band level range. Parameter ID for OnParameterChangeListener

Constant Value:

1
(0x00000001)



### PARAM\_NUM\_BANDS


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_NUM_BANDS
```

Number of bands. Parameter ID for OnParameterChangeListener

Constant Value:

0
(0x00000000)



### PARAM\_STRING\_SIZE\_MAX


Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public static final int PARAM_STRING_SIZE_MAX
```

Maximum size for preset name

Constant Value:

32
(0x00000020)



## Public constructors

### Equalizer

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public Equalizer (int priority,
                int audioSession)
```

Class constructor.

| Parameters |
| --- |
| `priority` | `int`: the priority level requested by the application for controlling the Equalizer<br>engine. As the same engine can be shared by several applications, this parameter indicates<br>how much the requesting application needs control of effect parameters. The normal priority<br>is 0, above normal is a positive number, below normal a negative number. |
| `audioSession` | `int`: system wide unique audio session identifier. The Equalizer will be<br>attached to the MediaPlayer or AudioTrack in the same audio session. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.RuntimeException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `RuntimeException` |  |
| `UnsupportedOperationException` |  |

## Public methods

### getBand

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public short getBand (int frequency)
```

Gets the band that has the most effect on the given frequency.

| Parameters |
| --- |
| `frequency` | `int`: frequency in milliHertz which is to be equalized via the returned band. |

| Returns |
| --- |
| `short` | the frequency band that has most effect on the given frequency. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getBandFreqRange

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public int[] getBandFreqRange (short band)
```

Gets the frequency range of the given frequency band.

| Parameters |
| --- |
| `band` | `short`: frequency band whose frequency range is requested. The numbering of the bands<br>starts from 0 and ends at (number of bands - 1). |

| Returns |
| --- |
| `int[]` | the frequency range in millHertz in an array of integers. The first element is the<br>lower limit of the range, the second element the upper limit. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getBandLevel

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public short getBandLevel (short band)
```

Gets the gain set for the given equalizer band.

| Parameters |
| --- |
| `band` | `short`: frequency band whose gain is requested. The numbering of the bands starts<br>from 0 and ends at (number of bands - 1). |

| Returns |
| --- |
| `short` | the gain in millibels of the given band. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getBandLevelRange

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public short[] getBandLevelRange ()
```

Gets the level range for use by `setBandLevel(short, short)`. The level is expressed in
milliBel.

| Returns |
| --- |
| `short[]` | the band level range in an array of short integers. The first element is the lower<br>limit of the range, the second element the upper limit. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getCenterFreq

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public int getCenterFreq (short band)
```

Gets the center frequency of the given band.

| Parameters |
| --- |
| `band` | `short`: frequency band whose center frequency is requested. The numbering of the bands<br>starts from 0 and ends at (number of bands - 1). |

| Returns |
| --- |
| `int` | the center frequency in milliHertz |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getCurrentPreset

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public short getCurrentPreset ()
```

Gets current preset.

| Returns |
| --- |
| `short` | the preset that is set at the moment. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getNumberOfBands

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public short getNumberOfBands ()
```

Gets the number of frequency bands supported by the Equalizer engine.

| Returns |
| --- |
| `short` | the number of bands |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getNumberOfPresets

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public short getNumberOfPresets ()
```

Gets the total number of presets the equalizer supports. The presets will have indices
\[0, number of presets-1\].

| Returns |
| --- |
| `short` | the number of presets the equalizer supports. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### getPresetName

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public String getPresetName (short preset)
```

Gets the preset name based on the index.

| Parameters |
| --- |
| `preset` | `short`: index of the preset. The valid range is \[0, number of presets-1\]. |

| Returns |
| --- |
| `String` | a string containing the name of the given preset. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |

### getProperties

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public Equalizer.Settings getProperties ()
```

Gets the equalizer properties. This method is useful when a snapshot of current
equalizer settings must be saved by the application.

| Returns |
| --- |
| `Equalizer.Settings` | an Equalizer.Settings object containing all current parameters values |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### setBandLevel

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public void setBandLevel (short band,
                short level)
```

Sets the given equalizer band to the given gain value.

| Parameters |
| --- |
| `band` | `short`: frequency band that will have the new gain. The numbering of the bands starts<br>from 0 and ends at (number of bands - 1). |
| `level` | `short`: new gain in millibels that will be set to the given band. getBandLevelRange()<br>will define the maximum and minimum values. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

**See also:**

- `getNumberOfBands()`

### setParameterListener

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public void setParameterListener (Equalizer.OnParameterChangeListener listener)
```

Registers an OnParameterChangeListener interface.

| Parameters |
| --- |
| `listener` | `Equalizer.OnParameterChangeListener`: OnParameterChangeListener interface registered |

### setProperties

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public void setProperties (Equalizer.Settings settings)
```

Sets the equalizer properties. This method is useful when equalizer settings have to
be applied from a previous backup.

| Parameters |
| --- |
| `settings` | `Equalizer.Settings`: an Equalizer.Settings object containing the properties to apply |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

### usePreset

Added in [API level 9](https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels)

```
public void usePreset (short preset)
```

Sets the equalizer according to the given preset.

| Parameters |
| --- |
| `preset` | `short`: new preset that will be taken into use. The valid range is \[0,<br>number of presets-1\]. |

| Throws |
| --- |
| `` | java.lang.IllegalArgumentException |
| `` | java.lang.IllegalStateException |
| `` | java.lang.UnsupportedOperationException |
| `IllegalArgumentException` |  |
| `IllegalStateException` |  |
| `UnsupportedOperationException` |  |

**See also:**

- `getNumberOfPresets()`

Content and code samples on this page are subject to the licenses described in the [Content License](https://developer.android.com/license). Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2026-08-03 UTC.




\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2026-08-03 UTC."\],\[\],\[\]\]