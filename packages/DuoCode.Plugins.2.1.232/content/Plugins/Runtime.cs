using System;
using DuoCode.Dom;
using DuoCode.Runtime;

using any = System.Object;
using number = System.Double;
using boolean = System.Boolean;
using EventListenerOrEventListenerObject = System.Object;

#pragma warning disable CS0108
#pragma warning disable CS0114
#pragma warning disable CS0626
#pragma warning disable CS0824

namespace DuoCode.Runtime
{
	#region DuoCode Union Alias
	public class Union
	{
		public static bool Is<T>(T anything) { return anything is T; }
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1>(T1 t);
		public static extern explicit operator T1(Alias<T1> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2>(T1 t);
		public static extern implicit operator Alias<T1, T2>(T2 t);
		public static extern explicit operator T1(Alias<T1, T2> value);
		public static extern explicit operator T2(Alias<T1, T2> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2, T3> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2, T3>(T1 t);
		public static extern implicit operator Alias<T1, T2, T3>(T2 t);
		public static extern implicit operator Alias<T1, T2, T3>(T3 t);
		public static extern explicit operator T1(Alias<T1, T2, T3> value);
		public static extern explicit operator T2(Alias<T1, T2, T3> value);
		public static extern explicit operator T3(Alias<T1, T2, T3> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2, T3, T4> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2, T3, T4>(T1 t);
		public static extern implicit operator Alias<T1, T2, T3, T4>(T2 t);
		public static extern implicit operator Alias<T1, T2, T3, T4>(T3 t);
		public static extern implicit operator Alias<T1, T2, T3, T4>(T4 t);
		public static extern explicit operator T1(Alias<T1, T2, T3, T4> value);
		public static extern explicit operator T2(Alias<T1, T2, T3, T4> value);
		public static extern explicit operator T3(Alias<T1, T2, T3, T4> value);
		public static extern explicit operator T4(Alias<T1, T2, T3, T4> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2, T3, T4, T5> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2, T3, T4, T5>(T1 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5>(T2 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5>(T3 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5>(T4 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5>(T5 t);
		public static extern explicit operator T1(Alias<T1, T2, T3, T4, T5> value);
		public static extern explicit operator T2(Alias<T1, T2, T3, T4, T5> value);
		public static extern explicit operator T3(Alias<T1, T2, T3, T4, T5> value);
		public static extern explicit operator T4(Alias<T1, T2, T3, T4, T5> value);
		public static extern explicit operator T5(Alias<T1, T2, T3, T4, T5> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2, T3, T4, T5, T6> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6>(T1 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6>(T2 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6>(T3 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6>(T4 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6>(T5 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6>(T6 t);
		public static extern explicit operator T1(Alias<T1, T2, T3, T4, T5, T6> value);
		public static extern explicit operator T2(Alias<T1, T2, T3, T4, T5, T6> value);
		public static extern explicit operator T3(Alias<T1, T2, T3, T4, T5, T6> value);
		public static extern explicit operator T4(Alias<T1, T2, T3, T4, T5, T6> value);
		public static extern explicit operator T5(Alias<T1, T2, T3, T4, T5, T6> value);
		public static extern explicit operator T6(Alias<T1, T2, T3, T4, T5, T6> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2, T3, T4, T5, T6, T7> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T1 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T2 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T3 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T4 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T5 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T6 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7>(T7 t);
		public static extern explicit operator T1(Alias<T1, T2, T3, T4, T5, T6, T7> value);
		public static extern explicit operator T2(Alias<T1, T2, T3, T4, T5, T6, T7> value);
		public static extern explicit operator T3(Alias<T1, T2, T3, T4, T5, T6, T7> value);
		public static extern explicit operator T4(Alias<T1, T2, T3, T4, T5, T6, T7> value);
		public static extern explicit operator T5(Alias<T1, T2, T3, T4, T5, T6, T7> value);
		public static extern explicit operator T6(Alias<T1, T2, T3, T4, T5, T6, T7> value);
		public static extern explicit operator T7(Alias<T1, T2, T3, T4, T5, T6, T7> value);
	}

	[Js(Name = "Object", Extern = true)]
	public class Alias<T1, T2, T3, T4, T5, T6, T7, T8> : Union
	{
		protected extern Alias();
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T1 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T2 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T3 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T4 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T5 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T6 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T7 t);
		public static extern implicit operator Alias<T1, T2, T3, T4, T5, T6, T7, T8>(T8 t);
		public static extern explicit operator T1(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T2(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T3(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T4(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T5(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T6(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T7(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
		public static extern explicit operator T8(Alias<T1, T2, T3, T4, T5, T6, T7, T8> value);
	}
	#endregion
	
	#region DuoCode New Instance
	public static class Instance
	{
		/// <summary>
		/// Create a new class instance
		/// </summary>
		public static T @new<T>() where T : class
		{
			return Js.referenceAs<T>(@"{}");
		}
		/// <summary>
		/// Gets the instance property object.
		/// </summary>
		public static dynamic @get(dynamic source, string name)
		{
			return source[name];
		}
		/// <summary>
		/// Sets the instance property object.
		/// </summary>
		public static void @set(dynamic source, string name, dynamic anything)
		{
			source[name] = anything;
		}
	}
	#endregion
}

namespace DuoCode.Dom
{
	#region DuoCode Property Bag
	public class Bag : PropertyDescriptor { }
	public class TypedPropertyDescriptor<T> : PropertyDescriptor
	{
		public new T value { get { return (T)base.value; } set { base.value = value; } }
		public new Func<T> get { get { return (Func<T>)base.value; } set { base.value = value; } }
		public new Action<T> set { get { return (Action<T>)base.value; } set { base.value = value; } }
	}
	#endregion

	#region DuoCode Core Library
	[Js(Extern = true)]
	public class ArrayLike<T> : Array<T> {}

	/// <summary>
	/// A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0. 
	/// If the requested number of bytes could not be allocated an exception is raised.
	/// </summary>
	[Js(Extern = true)]
	public class Uint8ClampedArray
	{
		/// <summary>
		/// The size in bytes of each element in the array.
		/// </summary>
		public number BYTES_PER_ELEMENT { get; set; }

		/// <summary>
		/// The ArrayBuffer instance referenced by the array.
		/// </summary>
		public ArrayBuffer buffer { get; set; }

		/// <summary>
		/// The length in bytes of the array.
		/// </summary>
		public number byteLength { get; set; }

		/// <summary>
		/// The offset in bytes of the array.
		/// </summary>
		public number byteOffset { get; set; }

		/// <summary>
		/// The length of the array.
		/// </summary>
		public number length { get; set; }

		public extern number this[number index] { get; set; }

		/// <summary>
		/// Returns the this object after copying a section of the array identified by start and end
		/// to the same array starting at position target
		/// </summary>
		public extern Uint8ClampedArray copyWithin(number target, number start, number end = default(number));

		/// <summary>
		/// Determines whether all the members of an array satisfy the specified test.
		/// </summary>
		public extern boolean every(Func<number, number, Uint8ClampedArray, boolean> callbackfn, any thisArg = default(any));

		/// <summary>
		/// Returns the this object after filling the section identified by start and end with value
		/// </summary>
		public extern Uint8ClampedArray fill(number value, number start = default(number), number end = default(number));

		/// <summary>
		/// Returns the elements of an array that meet the condition specified in a callback function.
		/// </summary>
		public extern Uint8ClampedArray filter(Func<number, number, Uint8ClampedArray, boolean> callbackfn, any thisArg = default(any));

		/// <summary>
		/// Returns the value of the first element in the array where predicate is true, and undefined 
		/// otherwise.
		/// </summary>
		public extern number find(Func<number, number, Array<number>, boolean> predicate, any thisArg = default(any));

		/// <summary>
		/// Returns the index of the first element in the array where predicate is true, and undefined 
		/// otherwise.
		/// </summary>
		public extern number findIndex(Func<number, boolean> predicate, any thisArg = default(any));

		/// <summary>
		/// Performs the specified action for each element in an array.
		/// </summary>
		public extern void forEach(Action<number, number, Uint8ClampedArray> callbackfn, any thisArg = default(any));

		/// <summary>
		/// Returns the index of the first occurrence of a value in an array.
		/// </summary>
		public extern number indexOf(number searchElement, number fromIndex = default(number));

		/// <summary>
		/// Adds all the elements of an array separated by the specified separator string.
		/// </summary>
		public extern string join(string separator = default(string));

		/// <summary>
		/// Returns the index of the last occurrence of a value in an array.
		/// </summary>
		public extern number lastIndexOf(number searchElement, number fromIndex = default(number));

		/// <summary>
		/// Calls a defined callback function on each element of an array, and returns an array that 
		/// contains the results.
		/// </summary>
		public extern Uint8ClampedArray map(Func<number, number, Uint8ClampedArray, number> callbackfn, any thisArg = default(any));

		/// <summary>
		/// Calls the specified callback function for all the elements in an array. The return value of 
		/// the callback function is the accumulated result, and is provided as an argument in the next 
		/// call to the callback function.
		/// </summary>
		public extern number reduce(Func<number, number, number, Uint8ClampedArray, number> callbackfn, number initialValue = default(number));

		/// <summary>
		/// Calls the specified callback function for all the elements in an array. The return value of 
		/// the callback function is the accumulated result, and is provided as an argument in the next 
		/// call to the callback function.
		/// </summary>
		public extern U reduce<U>(Func<U, number, number, Uint8ClampedArray, U> callbackfn, U initialValue);

		/// <summary>
		/// Calls the specified callback function for all the elements in an array, in descending order. 
		/// The return value of the callback function is the accumulated result, and is provided as an 
		/// argument in the next call to the callback function.
		/// </summary>
		public extern number reduceRight(Func<number, number, number, Uint8ClampedArray, number> callbackfn, number initialValue = default(number));

		/// <summary>
		/// Calls the specified callback function for all the elements in an array, in descending order. 
		/// The return value of the callback function is the accumulated result, and is provided as an 
		/// argument in the next call to the callback function.
		/// </summary>
		public extern U reduceRight<U>(Func<U, number, number, Uint8ClampedArray, U> callbackfn, U initialValue);

		/// <summary>
		/// Reverses the elements in an Array.
		/// </summary>
		public extern Uint8ClampedArray reverse();

		/// <summary>
		/// Sets a value or an array of values.
		/// </summary>
		public extern void set(number index, number value);

		/// <summary>
		/// Sets a value or an array of values.
		/// </summary>
		public extern void set(Uint8ClampedArray array, number offset = default(number));

		/// <summary>
		/// Returns a section of an array.
		/// </summary>
		public extern Uint8ClampedArray slice(number start = default(number), number end = default(number));

		/// <summary>
		/// Determines whether the specified callback function returns true for any element of an array.
		/// </summary>
		public extern boolean some(Func<number, number, Uint8ClampedArray, boolean> callbackfn, any thisArg = default(any));

		/// <summary>
		/// Sorts an array.
		/// </summary>
		public extern Uint8ClampedArray sort(Func<number, number, number> compareFn = default(Func<number, number, number>));

		/// <summary>
		/// Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
		/// at begin, inclusive, up to end, exclusive.
		/// </summary>
		public extern Uint8ClampedArray subarray(number begin, number end = default(number));

		/// <summary>
		/// Converts a number to a string by using the current locale.
		/// </summary>
		public extern string toLocaleString();

		/// <summary>
		/// Returns a string representation of an array.
		/// </summary>
		public extern string toString();
	}

	[Js(Extern = true)]
	public class AudioContext : EventTarget
	{
		public number rrentTime { get; set; }
		public AudioDestinationNode stination { get; set; }
		public AudioListener stener { get; set; }
		public number mpleRate { get; set; }
		public string state { get; set; }

		public extern AnalyserNode createAnalyser();
		public extern BiquadFilterNode createBiquadFilter();
		public extern AudioBuffer createBuffer(number numberOfChannels, number length, number sampleRate);
		public extern AudioBufferSourceNode createBufferSource();
		public extern ChannelMergerNode createChannelMerger(number numberOfInputs = default(number));
		public extern ChannelSplitterNode createChannelSplitter(number numberOfOutputs = default(number));
		public extern ConvolverNode createConvolver();
		public extern DelayNode createDelay(number maxDelayTime = default(number));
		public extern DynamicsCompressorNode createDynamicsCompressor();
		public extern GainNode createGain();
		public extern MediaElementAudioSourceNode createMediaElementSource(HTMLMediaElement mediaElement);
		public extern MediaStreamAudioSourceNode createMediaStreamSource(MediaStream mediaStream);
		public extern OscillatorNode createOscillator();
		public extern PannerNode createPanner();
		public extern PeriodicWave createPeriodicWave(Float32Array real, Float32Array imag, PeriodicWaveConstraints constraints = default(PeriodicWaveConstraints));
		public extern ScriptProcessorNode createScriptProcessor(number bufferSize = default(number), number numberOfInputChannels = default(number), number numberOfOutputChannels = default(number));
		public extern StereoPannerNode createStereoPanner();
		public extern WaveShaperNode createWaveShaper();
		public extern PromiseLike<AudioBuffer> decodeAudioData(ArrayBuffer audioData, DecodeSuccessCallback successCallback = default(DecodeSuccessCallback), DecodeErrorCallback errorCallback = default(DecodeErrorCallback));
	}

	[Js(Extern = true)]
	public class AudioDestinationNode : AudioNode
	{
		public number xChannelCount { get; set; }
	}

	[Js(Extern = true)]
	public class AudioListener
	{
		public number dopplerFactor { get; set; }
		public number speedOfSound { get; set; }

		public extern void setOrientation(number x, number y, number z, number xUp, number yUp, number zUp);
		public extern void setPosition(number x, number y, number z);
		public extern void setVelocity(number x, number y, number z);
	}

	[Js(Extern = true)]
	public class AnalyserNode : AudioNode
	{
		public number fftSize { get; set; }
		public number equencyBinCount { get; set; }
		public number maxDecibels { get; set; }
		public number minDecibels { get; set; }
		public number smoothingTimeConstant { get; set; }

		public extern void getByteFrequencyData(Uint8Array array);
		public extern void getByteTimeDomainData(Uint8Array array);
		public extern void getFloatFrequencyData(Float32Array array);
		public extern void getFloatTimeDomainData(Float32Array array);
	}

	[Js(Extern = true)]
	public class AudioNode : EventTarget
	{
		public number channelCount { get; set; }
		public string channelCountMode { get; set; }
		public string channelInterpretation { get; set; }
		public AudioContext ntext { get; set; }
		public number mberOfInputs { get; set; }
		public number mberOfOutputs { get; set; }

		public extern void connect(AudioNode destination, number output = default(number), number input = default(number));
		public extern void disconnect(number output = default(number));
		public extern void disconnect(AudioNode destination, number output = default(number), number input = default(number));
		public extern void disconnect(AudioParam destination, number output = default(number));
	}

	[Js(Extern = true)]
	public class BiquadFilterNode : AudioNode
	{
		public AudioParam tune { get; set; }
		public AudioParam equency { get; set; }
		[Js(Name = "in")]
		public AudioParam @in { get; set; }
		public string type { get; set; }

		public extern void getFrequencyResponse(Float32Array frequencyHz, Float32Array magResponse, Float32Array phaseResponse);
	}

	[Js(Extern = true)]
	public class AudioBufferSourceNode : AudioNode
	{
		public Union<AudioBuffer, any> buffer { get; set; }
		public AudioParam tune { get; set; }
		public boolean loop { get; set; }
		public number loopEnd { get; set; }
		public number loopStart { get; set; }
		public Func<any, MediaStreamErrorEvent, any> onended { get; set; }
		public AudioParam aybackRate { get; set; }

		public extern void start(number when = default(number), number offset = default(number), number duration = default(number));
		public extern void stop(number when = default(number));
		public extern void addEventListener(string type, Func<any, MediaStreamErrorEvent, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, EventListenerOrEventListenerObject listener, boolean useCapture = default(boolean));
	}

	[Js(Extern = true)]
	public class AudioBuffer
	{
		public number ration { get; set; }
		public number ngth { get; set; }
		public number mberOfChannels { get; set; }
		public number mpleRate { get; set; }

		public extern void copyFromChannel(Float32Array destination, number channelNumber, number startInChannel = default(number));
		public extern void copyToChannel(Float32Array source, number channelNumber, number startInChannel = default(number));
		public extern Float32Array getChannelData(number channel);
	}

	[Js(Extern = true)]
	public class ChannelMergerNode : AudioNode
	{
	}

	[Js(Extern = true)]
	public class ChannelSplitterNode : AudioNode
	{
	}

	[Js(Extern = true)]
	public class ConvolverNode : AudioNode
	{
		public Union<AudioBuffer, any> buffer { get; set; }
		public boolean normalize { get; set; }
	}

	[Js(Extern = true)]
	public class DelayNode : AudioNode
	{
		public AudioParam layTime { get; set; }
	}

	[Js(Extern = true)]
	public class AudioParam
	{
		public number faultValue { get; set; }
		public number value { get; set; }

		public extern void cancelScheduledValues(number startTime);
		public extern void exponentialRampToValueAtTime(number value, number endTime);
		public extern void linearRampToValueAtTime(number value, number endTime);
		public extern void setTargetAtTime(number target, number startTime, number timeConstant);
		public extern void setValueAtTime(number value, number startTime);
		public extern void setValueCurveAtTime(Float32Array values, number startTime, number duration);
	}

	[Js(Extern = true)]
	public class DynamicsCompressorNode : AudioNode
	{
		public AudioParam tack { get; set; }
		public AudioParam ee { get; set; }
		public AudioParam tio { get; set; }
		public AudioParam duction { get; set; }
		public AudioParam lease { get; set; }
		public AudioParam reshold { get; set; }
	}

	[Js(Extern = true)]
	public class GainNode : AudioNode
	{
		[Js(Name = "in")]
		public AudioParam @in { get; set; }
	}

	[Js(Extern = true)]
	public class OscillatorNode : AudioNode
	{
		public AudioParam tune { get; set; }
		public AudioParam equency { get; set; }
		public Func<any, MediaStreamErrorEvent, any> onended { get; set; }
		public string type { get; set; }

		public extern void setPeriodicWave(PeriodicWave periodicWave);
		public extern void start(number when = default(number));
		public extern void stop(number when = default(number));
		public extern void addEventListener(string type, Func<any, MediaStreamErrorEvent, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, EventListenerOrEventListenerObject listener, boolean useCapture = default(boolean));
	}

	[Js(Extern = true)]
	public class PannerNode : AudioNode
	{
		public number coneInnerAngle { get; set; }
		public number coneOuterAngle { get; set; }
		public number coneOuterGain { get; set; }
		public string distanceModel { get; set; }
		public number maxDistance { get; set; }
		public string panningModel { get; set; }
		public number refDistance { get; set; }
		public number rolloffFactor { get; set; }

		public extern void setOrientation(number x, number y, number z);
		public extern void setPosition(number x, number y, number z);
		public extern void setVelocity(number x, number y, number z);
	}

	[Js(Extern = true)]
	public class PeriodicWave
	{
	}

	[Js(Extern = true)]
	public class ScriptProcessorNode : AudioNode
	{
		public number fferSize { get; set; }
		public Func<any, AudioProcessingEvent, any> onaudioprocess { get; set; }

		public extern void addEventListener(string type, Func<any, AudioProcessingEvent, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, EventListenerOrEventListenerObject listener, boolean useCapture = default(boolean));
	}

	[Js(Extern = true)]
	public class StereoPannerNode : AudioNode
	{
		public AudioParam n { get; set; }
	}

	[Js(Extern = true)]
	public class AudioProcessingEvent : Event
	{
		// FIX - Added external constructor
		#pragma warning disable CS0824
		public extern AudioProcessingEvent(string type = default(string), EventInit eventInitDict = default(EventInit));
		#pragma warning restore CS0824
		public AudioBuffer putBuffer { get; set; }
		public AudioBuffer tputBuffer { get; set; }
		public number aybackTime { get; set; }
	}

	[Js(Extern = true)]
	public class WaveShaperNode : AudioNode
	{
		public Union<Float32Array, any> curve { get; set; }
		public string oversample { get; set; }
	}

	[Js(Extern = true)]
	public delegate void DecodeSuccessCallback(AudioBuffer decodedData);

	[Js(Extern = true)]
	public delegate void DecodeErrorCallback(DOMException error);

	[Js(Extern = true)]
	public class PromiseLike<T>
	{
		// FIX - Known Parsing Issue
		public extern PromiseLike<TResult> then<TResult>(Func<T, Union<TResult, PromiseLike<TResult>>> onfulfilled = default(Func<T, Union<TResult, PromiseLike<TResult>>>), Func<any, Union<TResult, PromiseLike<TResult>>> onrejected = default(Func<any, Union<TResult, PromiseLike<TResult>>>));
		public extern PromiseLike<TResult> then<TResult>(Func<T, Union<TResult, PromiseLike<TResult>>> onfulfilled = default(Func<T, Union<TResult, PromiseLike<TResult>>>), Func<any, any> onrejected = default(Func<any, any>));
	}

	[Js(Extern = true)]
	public class PeriodicWaveConstraints
	{
		public boolean disableNormalization { get; set; }
	}

	[Js(Extern = true)]
	public class MediaStream : EventTarget
	{
		public boolean tive { get; set; }
		public Func<any, Event, any> onactive { get; set; }
		public Func<any, TrackEvent, any> onaddtrack { get; set; }
		public Func<any, Event, any> oninactive { get; set; }
		public Func<any, TrackEvent, any> onremovetrack { get; set; }

		public extern void addTrack(MediaStreamTrack track);
		public extern MediaStream clone();
		public extern MediaStreamTrack[] getAudioTracks();
		public extern Union<MediaStreamTrack, any> getTrackById(string trackId);
		public extern MediaStreamTrack[] getTracks();
		public extern MediaStreamTrack[] getVideoTracks();
		public extern void removeTrack(MediaStreamTrack track);
		public extern void stop();
		public extern void addEventListener(string type, Func<any, Event, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, Func<any, TrackEvent, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, EventListenerOrEventListenerObject listener, boolean useCapture = default(boolean));
	}

	[Js(Extern = true)]
	public class MediaElementAudioSourceNode : AudioNode
	{
	}

	[Js(Extern = true)]
	public class MediaStreamAudioSourceNode : AudioNode
	{
	}

	[Js(Extern = true)]
	public class MediaStreamError
	{
		public Union<string, any> nstraintName { get; set; }
		public Union<string, any> ssage { get; set; }
		public string me { get; set; }
	}

	[Js(Extern = true)]
	public class MediaStreamErrorEvent : Event
	{
		// FIX - Added external constructor
		#pragma warning disable CS0824
		public extern MediaStreamErrorEvent(string type = default(string), EventInit eventInitDict = default(EventInit));
		#pragma warning restore CS0824

		public Union<MediaStreamError, any> ror { get; set; }
	}

	[Js(Extern = true)]
	public class MediaStreamTrack : EventTarget
	{
		public boolean enabled { get; set; }
		public string nd { get; set; }
		public string bel { get; set; }
		public boolean ted { get; set; }
		public Func<any, MediaStreamErrorEvent, any> onended { get; set; }
		public Func<any, Event, any> onmute { get; set; }
		public Func<any, MediaStreamErrorEvent, any> onoverconstrained { get; set; }
		public Func<any, Event, any> onunmute { get; set; }
		public boolean adonly { get; set; }
		public string adyState { get; set; }
		public boolean mote { get; set; }

		public extern PromiseLike<dynamic> applyConstraints(MediaTrackConstraints constraints);
		public extern MediaStreamTrack clone();
		public extern MediaTrackCapabilities getCapabilities();
		public extern MediaTrackConstraints getConstraints();
		public extern MediaTrackSettings getSettings();
		public extern void stop();
		public extern void addEventListener(string type, Func<any, MediaStreamErrorEvent, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, Func<any, Event, any> listener, boolean useCapture = default(boolean));
		public extern void addEventListener(string type, EventListenerOrEventListenerObject listener, boolean useCapture = default(boolean));
	}

	[Js(Extern = true)]
	public class MediaTrackConstraintSet
	{
		public Union<number, ConstrainLongRange> width { get; set; }
		public Union<number, ConstrainLongRange> height { get; set; }
		public Union<number, ConstrainDoubleRange> aspectRatio { get; set; }
		public Union<number, ConstrainDoubleRange> frameRate { get; set; }
		public Union<string, string[], ConstrainDOMStringParameters> facingMode { get; set; }
		public Union<number, ConstrainDoubleRange> volume { get; set; }
		public Union<number, ConstrainLongRange> sampleRate { get; set; }
		public Union<number, ConstrainLongRange> sampleSize { get; set; }
		public Union<boolean, ConstrainBooleanParameters> echoCancelation { get; set; }
		public Union<string, string[], ConstrainDOMStringParameters> deviceId { get; set; }
		public Union<string, string[], ConstrainDOMStringParameters> groupId { get; set; }
	}

	[Js(Extern = true)]
	public class MediaTrackConstraints : MediaTrackConstraintSet
	{
		public MediaTrackConstraintSet[] advanced { get; set; }
	}

	[Js(Extern = true)]
	public class MediaTrackCapabilities
	{
		public Union<number, LongRange> width { get; set; }
		public Union<number, LongRange> height { get; set; }
		public Union<number, DoubleRange> aspectRatio { get; set; }
		public Union<number, DoubleRange> frameRate { get; set; }
		public string facingMode { get; set; }
		public Union<number, DoubleRange> volume { get; set; }
		public Union<number, LongRange> sampleRate { get; set; }
		public Union<number, LongRange> sampleSize { get; set; }
		public boolean[] echoCancellation { get; set; }
		public string deviceId { get; set; }
		public string groupId { get; set; }
	}

	[Js(Extern = true)]
	public class MediaTrackSettings
	{
		public number width { get; set; }
		public number height { get; set; }
		public number aspectRatio { get; set; }
		public number frameRate { get; set; }
		public string facingMode { get; set; }
		public number volume { get; set; }
		public number sampleRate { get; set; }
		public number sampleSize { get; set; }
		public boolean echoCancellation { get; set; }
		public string deviceId { get; set; }
		public string groupId { get; set; }
	}

	[Js(Extern = true)]
	public class MediaTrackSupportedConstraints
	{
		public boolean width { get; set; }
		public boolean height { get; set; }
		public boolean aspectRatio { get; set; }
		public boolean frameRate { get; set; }
		public boolean facingMode { get; set; }
		public boolean volume { get; set; }
		public boolean sampleRate { get; set; }
		public boolean sampleSize { get; set; }
		public boolean echoCancellation { get; set; }
		public boolean deviceId { get; set; }
		public boolean groupId { get; set; }
	}

	[Js(Extern = true)]
	public class Algorithm
	{
		public string name { get; set; }
	}

	[Js(Extern = true)]
	public class AriaRequestEventInit : EventInit
	{
		public string attributeName { get; set; }
		public string attributeValue { get; set; }
	}

	[Js(Extern = true)]
	public class CommandEventInit : EventInit
	{
		public string commandName { get; set; }
		public string detail { get; set; }
	}

	[Js(Extern = true)]
	public class CompositionEventInit : UEventInit
	{
		public string data { get; set; }
	}

	[Js(Extern = true)]
	public class ConfirmSiteSpecificExceptionsInformation : ExceptionInformation
	{
		public string[] arrayOfDomainStrings { get; set; }
	}

	[Js(Extern = true)]
	public class ConstrainBooleanParameters
	{
		public boolean exact { get; set; }
		public boolean ideal { get; set; }
	}

	[Js(Extern = true)]
	public class ConstrainDOMStringParameters
	{
		public Union<string, string[]> exact { get; set; }
		public Union<string, string[]> ideal { get; set; }
	}

	[Js(Extern = true)]
	public class ConstrainDoubleRange : DoubleRange
	{
		public number exact { get; set; }
		public number ideal { get; set; }
	}

	[Js(Extern = true)]
	public class ConstrainLongRange : LongRange
	{
		public number exact { get; set; }
		public number ideal { get; set; }
	}

	[Js(Extern = true)]
	public class ConstrainVideoFacingModeParameters
	{
		public Union<string, string[]> exact { get; set; }
		public Union<string, string[]> ideal { get; set; }
	}

	[Js(Extern = true)]
	public class CustomEventInit : EventInit
	{
		public any detail { get; set; }
	}

	[Js(Extern = true)]
	public class DeviceAccelerationDict
	{
		public number x { get; set; }
		public number y { get; set; }
		public number z { get; set; }
	}

	[Js(Extern = true)]
	public class DeviceLightEventInit : EventInit
	{
		public number value { get; set; }
	}

	[Js(Extern = true)]
	public class DeviceRotationRateDict
	{
		public number alpha { get; set; }
		public number beta { get; set; }
		public number gamma { get; set; }
	}

	[Js(Extern = true)]
	public class DoubleRange
	{
		public number max { get; set; }
		public number min { get; set; }
	}

	[Js(Extern = true)]
	public class LongRange
	{
		public number max { get; set; }
		public number min { get; set; }
	}

	[Js(Extern = true)]
	public class UEventInit : EventInit
	{
		public Window view { get; set; }
		public number detail { get; set; }
	}
	#endregion
}

#pragma warning restore CS0108
#pragma warning restore CS0114
#pragma warning restore CS0626
#pragma warning restore CS0824
