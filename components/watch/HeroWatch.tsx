
type HeroWatchProps = {
    imageSrc: string;
    onUp?: () => void;
    onDown?: () => void;
};

export default function HeroWatch({ imageSrc, onUp, onDown, }: HeroWatchProps) {
    return (
        <div className="relative w-[340px] h-[340px] flex items-center justify-center">
            {/* Watch Case */}
            <div className="relative w-[300px] h-[300px] rounded-full
                            bg-gradient-to-br from-gray-700 to-gray-900
                            shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
                {/* Watch Bezel */}
                <div className="absolute inset-4 rounded-full
                                bg-black ring-1 ring-white/20
                                flex items-center justify-center" >
                    {/* Up & Down Markers */}
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 tracking-widest">
                        UP
                    </span>
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 tracking-widest">
                        DOWN
                    </span>

                    {/* Watch Screen */}
                    <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden bg-gray-900">

                        <img
                            src={imageSrc}
                            alt="Profile Photo"
                            className="w-full h-full object-cover object-[50%_15%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Up Button */}
            <button
                onClick={onUp}
                type ="button"
                aria-label="Scroll Up"
                className="absolute left-[-30px] top-[110px]
                   w-7 h-14 rounded-md
                   bg-gradient-to-b from-gray-600 to-gray-700
                   border border-gray-500
                   shadow-lg
                   active:translate-x-[-2px]"
            />

            {/* Down Button */}
            <button
                onClick={onDown}
                type ="button"
                aria-label="Scroll Down"
                className="absolute left-[-30px] top-[190px]
                   w-7 h-14 rounded-md
                   bg-gradient-to-b from-gray-600 to-gray-700
                   border border-gray-500
                   shadow-lg
                   active:translate-x-[-2px]"
            />
        </div >
    );
}