export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
      {/* Mor blur daire */}
      <div className="
        absolute 
        top-[-80px] left-[20%] 
        sm:top-[-80px] sm:left-[15%] 
        md:top-[-100px] md:left-[20%] 
        lg:top-[-100px] lg:left-[20%] 
        h-[200px] w-[200px] 
        sm:h-[250px] sm:w-[250px] 
        md:h-[300px] md:w-[300px] 
        rounded-full bg-purple-700 opacity-20 blur-3xl
      " />

      {/* </> ikonu */}
      <div className="
        absolute 
        bottom-10 right-5 
        sm:bottom-16 sm:right-10 
        md:bottom-20 md:right-16
        text-white opacity-40 text-4xl 
        sm:text-5xl md:text-6xl font-bold
      ">
        <span>&lt;/&gt;</span>
      </div>

      {/* Dikine yazı gibi görünen konsol komutları */}
      <div className="
        absolute 
        top-[40%] sm:top-[40%] md:top-[40%] lg:top-[40%]
        sm:left-[-10px] md:left-[0px] lg:left-[0px] 
        rotate-[-90deg] 
        text-fuchsia-300 font-mono text-xs 
        sm:text-md opacity-40 tracking-widest
      ">
        <p>Console.WriteLine("hello dev");</p>
      </div>

      {/* Diğer blur daireler */}
      <div className="
        absolute 
        top-[600px] left-[80%] 
        sm:top-[550px] sm:left-[70%]
        md:top-[600px] md:left-[80%]
        h-[150px] w-[150px] 
        sm:h-[200px] sm:w-[200px] 
        md:h-[300px] md:w-[300px]
        rounded-full bg-purple-500 opacity-10 blur-3xl
      " />
      <div className="
        absolute 
        top-[100px] left-[80%] 
        sm:top-[80px] sm:left-[70%]
        md:top-[100px] md:left-[80%]
        h-[150px] w-[150px] 
        sm:h-[200px] sm:w-[200px] 
        md:h-[300px] md:w-[300px]
        rounded-full bg-purple-500 opacity-10 blur-3xl
      " />

      <div className="
        absolute 
        top-[600px] left-[10%] 
        sm:top-[550px] sm:left-[5%]
        md:top-[600px] md:left-[10%]
        h-[150px] w-[150px] 
        sm:h-[200px] sm:w-[200px] 
        md:h-[300px] md:w-[300px]
        rounded-full bg-purple-600 opacity-10 blur-3xl
      " />
    </div>
  );
}
