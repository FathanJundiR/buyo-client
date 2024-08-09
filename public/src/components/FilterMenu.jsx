export default function FilterMenu() {
  return (
    <div className=" h-full w-full bg-blue-600 rounded-lg flex flex-col flex-wrap justify-start">
      <div className="flex text-zinc-300 text-2xl justify-center">FILTER</div>
      <div className=" my-2 bg-slate-950 text-zinc-300 flex flex-col">
        <div className="flex flex-row justify-center bg-emerald-700 text-zinc-300 text-2xl ">
          Judul
        </div>
        <div className="flex p-1 bg-yellow-500 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            value={"AMD Ryzen 7 6800H"}
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD Ryzen 7 6800H</div>
        </div>
        <div className="flex p-1 bg-yellow-600 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
        <div className="flex p-1 bg-yellow-500 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
        <div className="flex p-1 bg-yellow-600 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
      </div>
      <div className=" my-2 bg-slate-950 text-zinc-300 flex flex-col">
        <div className="flex flex-row justify-center bg-emerald-700 text-zinc-300 text-2xl ">
          Judul
        </div>
        <div className="flex p-1 bg-yellow-500 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
        <div className="flex p-1 bg-yellow-600 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
        <div className="flex p-1 bg-yellow-500 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
        <div className="flex p-1 bg-yellow-600 text-zinc-300 flex-row justify-start">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox h-6 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
          <div className="mx-2">AMD CPU</div>
        </div>
      </div>
      <div className="h-64 bg-red-400 text-zinc-300">hello</div>
    </div>
  );
}
