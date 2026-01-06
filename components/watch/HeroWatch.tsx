
type HeroWatchProps = {
    imageSrc: string;
    onUp?: () => void;
    onDown?: () => void;
};

export default function HeroWatch({ imageSrc, onUp, onDown, }: HeroWatchProps) {
    return (
        <div className="relative w-[340px] h-[340px] flex items-center justify-center">

            {/* Up Button */}
            <button
                onClick={onUp}
                type="button"
                aria-label="Scroll Up"
                className="absolute left-[8px] top-[97px] rotate-[15deg]
                   w-7 h-14 rounded-md
                   bg-gradient-to-b from-gray-600 to-gray-700
                   border border-gray-500
                   shadow-lg
                   active:translate-x-[2px] active:translate-y-[1px]"
            />

            {/* Down Button */}
            <button
                onClick={onDown}
                type="button"
                aria-label="Scroll Down"
                className="absolute left-[10px] top-[200px] rotate-[-20deg]
                   w-7 h-14 rounded-md
                   bg-gradient-to-b from-gray-600 to-gray-700
                   border border-gray-500
                   shadow-lg
                   active:translate-x-[2px] active:translate-y-[-1px]"
            />
            {/* Watch Case */}
            <div className="relative w-[300px] h-[300px] rounded-full
                            bg-gradient-to-br from-gray-700 to-gray-900
                            shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
                {/* Watch Bezel */}
                <div className="absolute inset-4 rounded-full
                                bg-black ring-1 ring-white/20" >
                    {/* Up & Down Markers */}
                    <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-center gap-20 pointer-events-none">
                        <span className="text-[11px] tracking-widest text-gray-300 rotate-[-75deg]">
                            UP
                        </span>
                        <span className="text-[11px] tracking-widest text-gray-300 rotate-[65deg]">
                            DOWN
                        </span>
                    </div>

                    {/* Watch Screen */}
                    <div className="absolute inset-8 rounded-full overflow-hidden bg-gray-900">

                        <img
                            src={imageSrc}
                            alt="Profile Photo"
                            className="w-full h-full object-cover object-[50%_15%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                </div>
            </div>


        </div >
    );
}