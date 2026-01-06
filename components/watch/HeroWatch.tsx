
type HeroWatchProps = {
    imageSrc: string;
    onUp?: () => void;
    onDown?: () => void;
    title: string;
    description: string;
};

export default function HeroWatch({ imageSrc, onUp, onDown }: HeroWatchProps) {
    return (
        <div className="relative">
            {/* Watch Body */}
            <div className="relative w-72 h-72 rounded-full bg-black border-[10px] border-gray-800 shadow-2xl">
                {/* Up Button */}
                <button onClick={onUp} className="absolute left-[-18px] top-[28%] 
                    w-6 h-12 rounded-md bg-gray-700 hover:bg-gray-600 border border-gray-500 
                    shadow-md active:translate-x-[-1px]"
                    aria-label="Scroll up">
                    <span className="sr-only">UP</span>
                </button>

                {/* Down Button */}
                <button onClick={onDown} className="absolute left-[-18px] top-[58%] w-6 h-12 rounded-md 
                    bg-gray-700 hover:bg-gray-600 border border-gray-500 shadow-md active:translate-x-[-1px]"
                    aria-label="Scroll down">
                    <span className="sr-only">DOWN</span>
                </button>

                {/* Watch Face */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900">

                    <img
                        src={imageSrc}
                        alt="Profile Photo"
                        className="w-full h-full object-cover object-[50%_15%]"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>
        </div>
    );
}