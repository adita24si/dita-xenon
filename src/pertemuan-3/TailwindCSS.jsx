export default function TailwindCSS() {
    return (
        <div className="min-h-screen bg-black text-white p-8">

            {/* HEADER */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    ⚡ Tailwind CSS Showcase
                </h1>
                <p className="text-gray-400 mt-2">UI modern dengan RGB style</p>
            </div>

            {/* GRID LAYOUT */}
            <div className="grid md:grid-cols-2 gap-6">

                <Spacing title="Spacing" content="Margin & padding bikin layout rapi dan gak nabrak." />
                <Typography />
                <BorderRadius />
                <BackgroundColors />
                <FlexboxGrid />
                <ShadowEffects />

            </div>

        </div>
    )
}

/* 1. SPACING */
function Spacing(props){
    return (
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
            <div className="bg-black p-6 rounded-xl h-full">
                <h2 className="text-lg font-semibold text-cyan-400">{props.title}</h2>
                <p className="mt-2 text-gray-300">{props.content}</p>
            </div>
        </div>
    )
}

/* 2. TYPOGRAPHY */
function Typography(){
    return (
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <div className="bg-black p-6 rounded-xl">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
                    Typography
                </h1>
                <p className="text-gray-300 mt-2">
                    Teks dengan kombinasi warna RGB gradient 🔥
                </p>
            </div>
        </div>
    )
}

/* 3. BORDER & RADIUS */
function BorderRadius(){
    return (
        <div className="flex items-center justify-center">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition duration-300">
                Klik Saya
            </button>
        </div>
    )
}

/* 4. BACKGROUND */
function BackgroundColors(){
    return(
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 shadow-lg">
            <h3 className="text-xl font-bold">halobessss</h3>
            <p className="mt-2 text-white/90">999⚡</p>
        </div>
    )
}

/* 5. FLEXBOX */
function FlexboxGrid(){
    return (
        <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-cyan-400">Flexbox</h1>
                <div className="flex gap-3">
                    <span className="hover:text-cyan-400 cursor-pointer">Home</span>
                    <span className="hover:text-cyan-400 cursor-pointer">About</span>
                    <span className="hover:text-cyan-400 cursor-pointer">Contact</span>
                </div>
            </div>
        </div>
    )
}

/* 6. SHADOW */
function ShadowEffects(){
    return (
        <div className="p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
            <div className="bg-black p-6 rounded-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition duration-300">
                <h3 className="text-xl font-semibold text-blue-400">Shadow RGB</h3>
                <p className="text-gray-300 mt-2">
                    🔥
                </p>
            </div>
        </div>
    )
}