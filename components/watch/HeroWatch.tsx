
type HeroWatchProps = {
    imageSrc: string;
    title: string;
    description: string;
};

export default function HeroWatch({ imageSrc }: HeroWatchProps) {
    return (
        <div className="relative w-72 h-72 rounded-full bg-black border-[10px] border-gray-800 shadow-2xl">
            
            {/* Watch Face */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900">

                <img
                    src={imageSrc}
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
            </div>

        </div>
    );
}